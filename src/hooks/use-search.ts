
import { useState, useCallback } from 'react';
import { SearchResult, Verse } from '@/types/quran';
import { mockQuranData } from '@/data/mock-quran';

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // In a real app, this would be an API call, but we'll search the mock data
    const normalizedQuery = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    mockQuranData.surahs.forEach(surah => {
      // Match on surah name
      if (surah.englishName.toLowerCase().includes(normalizedQuery)) {
        // Add first verse as a representative of the surah
        if (surah.verses.length > 0) {
          results.push({
            verse: surah.verses[0],
            matchType: 'surah',
            highlightedText: surah.englishName
          });
        }
      }

      // Match on verse content
      surah.verses.forEach(verse => {
        // Check Arabic text
        if (verse.arabic.includes(normalizedQuery)) {
          results.push({
            verse,
            matchType: 'text',
            highlightedText: verse.arabic
          });
        }
        
        // Check translations
        Object.entries(verse.translations).forEach(([lang, text]) => {
          if (text.toLowerCase().includes(normalizedQuery)) {
            results.push({
              verse,
              matchType: 'translation',
              highlightedText: text
            });
          }
        });
      });
    });

    setSearchResults(results.slice(0, 10)); // Limit to 10 results for performance
    setIsSearching(false);
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    performSearch,
    isSearching
  };
}
