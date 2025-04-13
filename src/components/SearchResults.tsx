
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Search } from 'lucide-react';
import { SearchResult } from '@/types/quran';
import { cn } from '@/lib/utils';

interface SearchResultsProps {
  results: SearchResult[];
  onSelectResult: (result: SearchResult) => void;
}

export const SearchResults = ({ results, onSelectResult }: SearchResultsProps) => {
  if (results.length === 0) {
    return null;
  }
  
  return (
    <Card className="mt-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Search className="h-4 w-4" />
          Search Results
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-slate-200 dark:divide-slate-800 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={`${result.verse.id}-${index}`}
              className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 cursor-pointer transition-colors"
              onClick={() => onSelectResult(result)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
                        {result.verse.number}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-slate-500">
                      {result.matchType === 'surah' ? 
                        `Surah ${result.verse.surah}` : 
                        `${result.verse.surah}:${result.verse.number}`}
                    </span>
                  </div>
                  
                  {result.matchType === 'text' && (
                    <p className="font-arabic text-right text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                      {result.highlightedText}...
                    </p>
                  )}
                  
                  {(result.matchType === 'translation' || result.matchType === 'surah') && (
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {result.highlightedText}...
                    </p>
                  )}
                </div>
                
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
