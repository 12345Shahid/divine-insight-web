
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              QuranIQ Web — Instant Quran Research Platform
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>for the Ummah</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
