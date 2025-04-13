
import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { mockQuranData } from '@/data/mock-quran';
import { Verse } from '@/types/quran';
import { useNavigate } from 'react-router-dom';
import { usePreferences } from '@/hooks/use-preferences';
import { Bookmark, ExternalLink } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

const Bookmarks = () => {
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Verse[]>([]);
  const [bookmarks] = useLocalStorage<number[]>('quraniq-bookmarks', []);
  const { preferences } = usePreferences();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const versesPerPage = 5;
  
  useEffect(() => {
    const fetchBookmarkedVerses = () => {
      const verses: Verse[] = [];
      
      bookmarks.forEach(bookmarkId => {
        mockQuranData.surahs.forEach(surah => {
          const foundVerse = surah.verses.find(verse => verse.id === bookmarkId);
          if (foundVerse) {
            verses.push(foundVerse);
          }
        });
      });
      
      setBookmarkedVerses(verses);
    };
    
    fetchBookmarkedVerses();
  }, [bookmarks]);
  
  const handleReadVerse = (verse: Verse) => {
    navigate('/read-quran', { state: { surah: verse.surah, verseId: verse.id } });
  };
  
  // Calculate pagination
  const indexOfLastVerse = currentPage * versesPerPage;
  const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
  const currentVerses = bookmarkedVerses.slice(indexOfFirstVerse, indexOfLastVerse);
  const totalPages = Math.ceil(bookmarkedVerses.length / versesPerPage);
  
  const renderPagination = () => {
    if (totalPages <= 1) return null;
    
    return (
      <Pagination className="mt-6">
        <PaginationContent>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => setCurrentPage(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    );
  };

  return (
    <Layout>
      <div className="container max-w-4xl py-8">
        <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">
          My Bookmarks
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Access your saved verses easily
        </p>
        
        {bookmarkedVerses.length === 0 ? (
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm">
            <CardContent className="p-6 text-center">
              <Bookmark className="mx-auto h-12 w-12 text-slate-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">No bookmarks yet</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4">
                Start adding verses to your bookmarks by clicking the bookmark icon while reading the Quran.
              </p>
              <Button 
                variant="outline" 
                onClick={() => navigate('/read-quran')}
              >
                Go to Quran Reader
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="space-y-4">
              {currentVerses.map((verse) => (
                <Card 
                  key={verse.id} 
                  className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                          <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                            {verse.number}
                          </span>
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Surah {verse.surah}
                        </div>
                      </div>
                      
                      <p className="font-arabic text-xl leading-loose text-right text-slate-800 dark:text-slate-200">
                        {verse.arabic}
                      </p>
                      
                      <p className="text-slate-700 dark:text-slate-300">
                        {verse.translations[preferences.translation]}
                      </p>
                      
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700"
                          onClick={() => handleReadVerse(verse)}
                        >
                          <span>Read in context</span>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {renderPagination()}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Bookmarks;
