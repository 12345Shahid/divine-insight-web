
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Bookmark } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { usePreferences } from '@/hooks/use-preferences';

const Navbar = () => {
  const { toast } = useToast();
  const { preferences, updatePreference } = usePreferences();
  
  const toggleTheme = () => {
    const newTheme = preferences.theme === 'dark' ? 'light' : 'dark';
    updatePreference('theme', newTheme);
    
    // Apply the theme to the document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} Mode Activated`,
      description: `Switched to ${newTheme} theme.`,
    });
  };

  // Apply current theme on component mount
  React.useEffect(() => {
    if (preferences.theme === 'dark' || 
       (preferences.theme === 'system' && 
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [preferences.theme]);

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="container py-2 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden mr-2">
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex flex-col gap-4 py-4">
                <Logo />
                <div className="space-y-3 mt-4">
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <Link to="/"><span>Home</span></Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <Link to="/about"><span>About</span></Link>
                  </Button>
                  <Button asChild variant="ghost" className="w-full justify-start">
                    <Link to="/support"><span>Support</span></Link>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bookmark className="mr-2 h-4 w-4" />
                    My Bookmarks
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/support">Support</Link>
          </Button>
          
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link to="/about">About</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
