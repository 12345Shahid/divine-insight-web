
import { useState, useCallback } from 'react';
import { SearchResult, Verse } from '@/types/quran';
import { fetchAllSurahs, fetchVerseWithTranslations } from '@/services/quranApi';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      // In a real application, we would use a proper search API endpoint
      // For now, we'll fetch all surahs and do a client-side search
      const normalizedQuery = query.toLowerCase().trim();
      const results: SearchResult[] = [];
      
      // Fetch all surahs (this will use cache after first request)
      const surahs = await fetchAllSurahs();
      
      // Search by surah name
      const matchingSurahs = surahs.filter(surah => 
        surah.englishName.toLowerCase().includes(normalizedQuery)
      ).slice(0, 3); // Limit to 3 surah matches
      
      // Add matching surahs to results
      for (const surah of matchingSurahs) {
        // Fetch first verse as a representative of the surah
        const verse = await fetchVerseWithTranslations(surah.number, 1);
        if (verse) {
          results.push({
            verse,
            matchType: 'surah',
            highlightedText: surah.englishName
          });
        }
      }
      
      // Check if query looks like a surah:ayah reference (e.g., "2:255")
      const referenceMatch = normalizedQuery.match(/^(\d+):(\d+)$/);
      if (referenceMatch) {
        const surahNum = parseInt(referenceMatch[1]);
        const ayahNum = parseInt(referenceMatch[2]);
        
        if (surahNum >= 1 && surahNum <= 114) {
          const verse = await fetchVerseWithTranslations(surahNum, ayahNum);
          if (verse) {
            results.push({
              verse,
              matchType: 'text',
              highlightedText: `${surahNum}:${ayahNum}`
            });
          }
        }
      }
      
      // For keyword search, we would normally use a proper search API
      // This is a simplified implementation for demonstration
      // In a production app, implement server-side search or use a search service
      
      setSearchResults(results.slice(0, 10)); // Limit to 10 results for performance
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    performSearch,
    isSearching
  };
}
