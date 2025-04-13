
import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Verse } from '@/types/quran';
import { mockQuranData } from '@/data/mock-quran';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

interface QuranReaderProps {
  currentSurah: number;
  setCurrentSurah: (surah: number) => void;
  onVerseSelect: (verse: Verse) => void;
  bookmarks: number[];
  onBookmark: (verse: Verse) => void;
  currentVerse: Verse | null;
  translation: string;
  onTranslationChange: (translation: string) => void;
}

export const QuranReader = ({
  currentSurah,
  setCurrentSurah,
  onVerseSelect,
  bookmarks,
  onBookmark,
  currentVerse,
  translation,
  onTranslationChange
}: QuranReaderProps) => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const versesPerPage = 5;
  
  useEffect(() => {
    // In a real implementation, this would fetch data from an API
    const surahs = mockQuranData.surahs;
    const surah = surahs.find(s => s.number === currentSurah);
    
    if (surah) {
      setVerses(surah.verses);
      setCurrentPage(1); // Reset to first page when changing Surah
    }
  }, [currentSurah]);

  const handlePrevSurah = () => {
    if (currentSurah > 1) {
      setCurrentSurah(currentSurah - 1);
    }
  };

  const handleNextSurah = () => {
    if (currentSurah < 114) {
      setCurrentSurah(currentSurah + 1);
    }
  };

  // Pagination logic
  const indexOfLastVerse = currentPage * versesPerPage;
  const indexOfFirstVerse = indexOfLastVerse - versesPerPage;
  const currentVerses = verses.slice(indexOfFirstVerse, indexOfLastVerse);
  const totalPages = Math.ceil(verses.length / versesPerPage);
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const surahName = mockQuranData.surahs.find(s => s.number === currentSurah)?.name || '';
  const englishName = mockQuranData.surahs.find(s => s.number === currentSurah)?.englishName || '';

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {surahName}
            <span className="ml-2 text-lg font-normal text-slate-500">
              {englishName}
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Surah {currentSurah}
          </p>
        </div>
        
        <div className="flex items-center gap-2 self-stretch md:self-auto">
          <div className="w-40">
            <Select value={translation} onValueChange={onTranslationChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select Translation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English (Sahih)</SelectItem>
                <SelectItem value="urdu">Urdu</SelectItem>
                <SelectItem value="indonesian">Indonesian</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center">
            <Button variant="outline" size="icon" onClick={handlePrevSurah} disabled={currentSurah <= 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="w-16 text-center">
              <span className="text-sm font-medium">{currentSurah}/114</span>
            </div>
            <Button variant="outline" size="icon" onClick={handleNextSurah} disabled={currentSurah >= 114}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <Card className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-sm">
        <CardContent className="p-0">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 text-center border-b border-slate-200 dark:border-slate-800">
            <p className="font-arabic text-3xl leading-loose text-slate-800 dark:text-slate-200 mb-2">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>
          
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {currentVerses.map((verse) => (
              <div 
                key={verse.id}
                className={cn(
                  "p-6 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer",
                  currentVerse?.id === verse.id && "bg-slate-50 dark:bg-slate-900/50"
                )}
                onClick={() => onVerseSelect(verse)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                      {verse.number}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <p className="font-arabic text-2xl leading-loose text-right text-slate-800 dark:text-slate-200">
                      {verse.arabic}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      {verse.translations[translation]}
                    </p>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookmark(verse);
                    }}
                    className={cn(
                      "h-8 w-8",
                      bookmarks.includes(verse.id) ? "text-amber-500 hover:text-amber-600" : "text-slate-400 hover:text-slate-500"
                    )}
                  >
                    <Bookmark className={cn("h-4 w-4", bookmarks.includes(verse.id) && "fill-amber-500")} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {verses.length > 0 && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={handlePrevPage} className={currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"} />
                  </PaginationItem>
                  
                  <PaginationItem>
                    <span className="px-4 py-2">
                      Page {currentPage} of {totalPages}
                    </span>
                  </PaginationItem>
                  
                  <PaginationItem>
                    <PaginationNext onClick={handleNextPage} className={currentPage === totalPages ? "cursor-not-allowed opacity-50" : "cursor-pointer"} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
