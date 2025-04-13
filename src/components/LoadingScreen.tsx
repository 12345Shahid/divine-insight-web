
import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-3 flex items-center justify-center animate-pulse">
          <div className="text-white font-bold text-3xl">Q</div>
        </div>
        <div className="text-xl font-semibold text-slate-900 dark:text-white">
          Quran<span className="text-emerald-600 dark:text-emerald-400">IQ</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Loader2 className="h-5 w-5 animate-spin text-emerald-600 dark:text-emerald-400" />
          <span className="text-slate-600 dark:text-slate-400">Loading Quran...</span>
        </div>
      </div>
    </div>
  );
};
