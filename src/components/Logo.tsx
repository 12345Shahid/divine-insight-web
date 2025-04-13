
import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 flex items-center justify-center">
        <div className="text-white font-bold text-xl">Q</div>
      </div>
      <div className="font-semibold text-lg text-slate-900 dark:text-white">
        Quran<span className="text-emerald-600 dark:text-emerald-400">IQ</span>
      </div>
    </div>
  );
};
