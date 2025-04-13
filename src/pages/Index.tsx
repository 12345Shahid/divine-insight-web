
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { QuranReader } from '@/components/QuranReader';
import { VerseExplorer } from '@/components/VerseExplorer';
import { AudioPlayer } from '@/components/AudioPlayer';
import { useToast } from '@/hooks/use-toast';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Verse } from '@/types/quran';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [currentSurah, setCurrentSurah] = useState(1);
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>('quraniq-bookmarks', []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading the initial data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleVerseSelect = (verse: Verse) => {
    setCurrentVerse(verse);
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

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <main className="flex-1 p-4 md:p-6">
          <QuranReader 
            currentSurah={currentSurah}
            setCurrentSurah={setCurrentSurah}
            onVerseSelect={handleVerseSelect}
            bookmarks={bookmarks}
            onBookmark={handleBookmark}
            currentVerse={currentVerse}
          />
          <div className="mt-6">
            <AudioPlayer surah={currentSurah} verse={currentVerse?.number || 1} />
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

export default Index;
