
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { QuranReader } from '@/components/QuranReader';
import { VerseExplorer } from '@/components/VerseExplorer';
import { AudioPlayer } from '@/components/AudioPlayer';
import { VoiceSearch } from '@/components/VoiceSearch';
import { SearchResults } from '@/components/SearchResults';
import { useToast } from '@/hooks/use-toast';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useSearch } from '@/hooks/use-search';
import { usePreferences } from '@/hooks/use-preferences';
import { Verse, SearchResult } from '@/types/quran';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useLocation } from 'react-router-dom';
import { mockQuranData } from '@/data/mock-quran';

const ReadQuran = () => {
  const [loading, setLoading] = useState(true);
  const [currentSurah, setCurrentSurah] = useState(1);
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>('quraniq-bookmarks', []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const { preferences, updatePreference } = usePreferences();
  const location = useLocation();
  const { 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    performSearch, 
    isSearching 
  } = useSearch();

  useEffect(() => {
    // Handle direct navigation to a specific verse
    if (location.state) {
      const { surah, verseId } = location.state as { surah: number, verseId: number };
      
      if (surah && verseId) {
        setCurrentSurah(surah);
        
        // Find the verse
        const surahData = mockQuranData.surahs.find(s => s.number === surah);
        if (surahData) {
          const verse = surahData.verses.find(v => v.id === verseId);
          if (verse) {
            setCurrentVerse(verse);
            setSidebarOpen(true);
          }
        }
      }
    }

    // Simulate loading the initial data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [location.state]);

  const handleVerseSelect = (verse: Verse) => {
    setCurrentVerse(verse);
    setSidebarOpen(true);
  };

  const handleSearchResultSelect = (result: SearchResult) => {
    setCurrentSurah(result.verse.surah);
    setCurrentVerse(result.verse);
    setSidebarOpen(true);
  };

  const handleBookmark = (verse: Verse) => {
    const verseId = verse.id;
    
    if (bookmarks.includes(verseId)) {
      setBookmarks(bookmarks.filter(id => id !== verseId));
      toast({
        title: "Bookmark Removed",
        description: `Removed verse ${verse.surah}:${verse.number} from bookmarks`,
      });
    } else {
      setBookmarks([...bookmarks, verseId]);
      toast({
        title: "Bookmark Added", 
        description: `Added verse ${verse.surah}:${verse.number} to bookmarks`,
      });
    }
  };

  const handleTranslationChange = (translation: string) => {
    updatePreference('translation', translation);
  };

  const handleQariChange = (qari: string) => {
    updatePreference('audioQari', qari);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6">
            <VoiceSearch 
              onSearch={performSearch}
              isSearching={isSearching} 
            />
            <SearchResults 
              results={searchResults}
              onSelectResult={handleSearchResultSelect}
            />
          </div>

          <QuranReader 
            currentSurah={currentSurah}
            setCurrentSurah={setCurrentSurah}
            onVerseSelect={handleVerseSelect}
            bookmarks={bookmarks}
            onBookmark={handleBookmark}
            currentVerse={currentVerse}
            translation={preferences.translation}
            onTranslationChange={handleTranslationChange}
          />
          
          <div className="mt-6">
            <AudioPlayer 
              surah={currentSurah} 
              verse={currentVerse?.number || 1} 
              qari={preferences.audioQari}
              onQariChange={handleQariChange}
            />
          </div>
        </main>
        
        <VerseExplorer 
          verse={currentVerse} 
          open={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
      </div>
    </Layout>
  );
};

export default ReadQuran;
