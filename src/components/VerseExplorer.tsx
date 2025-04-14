
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { X, BookOpen, BookText, Sparkles, Loader2 } from 'lucide-react';
import { Verse } from '@/types/quran';
import { fetchTafsir } from '@/services/quranApi';
import { mockHadith } from '@/data/mock-insights';

interface VerseExplorerProps {
  verse: Verse | null;
  open: boolean;
  onClose: () => void;
}

export const VerseExplorer = ({ verse, open, onClose }: VerseExplorerProps) => {
  const [activeTab, setActiveTab] = useState('tafsir');
  const [tafsir, setTafsir] = useState<string | null>(null);
  const [loadingTafsir, setLoadingTafsir] = useState(false);
  
  useEffect(() => {
    const loadTafsir = async () => {
      if (!verse) return;
      
      setLoadingTafsir(true);
      try {
        const tafsirText = await fetchTafsir(verse.surah, verse.number);
        setTafsir(tafsirText);
      } catch (error) {
        console.error("Error fetching tafsir:", error);
        setTafsir("No Tafseer available for this verse.");
      } finally {
        setLoadingTafsir(false);
      }
    };
    
    if (open && verse) {
      loadTafsir();
    }
  }, [verse, open]);
  
  if (!verse) return null;
  
  const hadith = mockHadith[verse.id] || [];
  
  const aiInsights = {
    context: "This verse was revealed in Medina during a period when the Muslim community was facing challenges from both external threats and internal doubts.",
    reflection: "The verse invites believers to reflect on the nature of faith and how it manifests in our actions, especially during times of difficulty.",
    application: "Consider how you can apply the principles mentioned in this verse to your daily interactions and decisions."
  };

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl overflow-y-auto">
        <SheetHeader className="space-y-2 pr-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg">Verse Explorer</SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </SheetClose>
          </div>
          
          <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4">
            <div className="mb-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Surah {verse.surah}, Verse {verse.number}
            </div>
            <p className="font-arabic text-xl leading-relaxed text-slate-800 dark:text-slate-200 mb-2 text-right">
              {verse.arabic}
            </p>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              {verse.translations.english}
            </p>
          </div>
        </SheetHeader>
        
        <Separator className="my-4" />
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="tafsir" className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>Tafsir</span>
            </TabsTrigger>
            <TabsTrigger value="hadith" className="flex items-center gap-1.5">
              <BookText className="h-4 w-4" />
              <span>Hadith</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              <span>AI Insights</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tafsir" className="space-y-4">
            {loadingTafsir ? (
              <div className="flex items-center justify-center p-12">
                <Loader2 className="h-6 w-6 animate-spin text-emerald-600" />
                <span className="ml-2 text-slate-600 dark:text-slate-300">Loading tafsir...</span>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Tafsir - Maududi</CardTitle>
                  <CardDescription>Comprehensive tafsir by Maulana Maududi</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{tafsir}</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="hadith" className="space-y-4">
            {hadith.length > 0 ? (
              hadith.map((h, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{h.collection}</CardTitle>
                    <CardDescription>Book: {h.book}, Number: {h.number}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{h.text}</p>
                    <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      <p>Narrated by: {h.narrator}</p>
                      <p>Authenticity: {h.grade}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-500 dark:text-slate-400">No related hadith found for this verse.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="ai" className="space-y-4">
            <Card className="border-2 border-emerald-200 dark:border-emerald-900">
              <CardHeader className="bg-emerald-50 dark:bg-emerald-950/30">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  AI-Generated Insights
                </CardTitle>
                <CardDescription>
                  Powered by AI to help understand this verse (for educational purposes only)
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">Historical Context</h4>
                    <p className="text-slate-700 dark:text-slate-300">{aiInsights.context}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">Reflection Point</h4>
                    <p className="text-slate-700 dark:text-slate-300">{aiInsights.reflection}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-1">Application</h4>
                    <p className="text-slate-700 dark:text-slate-300">{aiInsights.application}</p>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-md mt-4">
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      Note: These AI insights are meant to supplement, not replace, traditional scholarly interpretations. 
                      Always verify information with trusted Islamic sources.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
