
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mic, Search, Menu, X, Moon, Sun, Bookmark } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { Logo } from './Logo';

const Navbar = () => {
  const [isListening, setIsListening] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(!isListening);
      
      if (!isListening) {
        toast({
          title: "Listening...",
          description: "Speak your search query clearly.",
        });
        
        // This is just a placeholder. Real implementation would use the Web Speech API
        setTimeout(() => {
          setIsListening(false);
          setSearchQuery("Show verses about forgiveness");
          toast({
            title: "Voice Search",
            description: "Searching for: 'Show verses about forgiveness'",
          });
        }, 2000);
      } else {
        // Stop listening
        setIsListening(false);
      }
    } else {
      toast({
        variant: "destructive",
        title: "Not Supported",
        description: "Voice search is not supported in your browser.",
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Searching...",
        description: `Looking for: "${searchQuery}"`,
      });
      // Actual search implementation would go here
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="container py-2 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex flex-col gap-4 py-4">
                <Logo />
                <div className="space-y-3 mt-4">
                  <Button variant="ghost" className="w-full justify-start">
                    <Bookmark className="mr-2 h-4 w-4" />
                    My Bookmarks
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    About QuranIQ
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Logo />
        </div>
        
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search the Quran..."
              className="pl-9 pr-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={`absolute right-1 top-1 ${isListening ? 'text-primary' : ''}`}
              onClick={handleVoiceSearch}
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </form>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button variant="outline">Support</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
