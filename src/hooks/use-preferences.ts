
import { useLocalStorage } from './use-local-storage';
import { UserPreferences } from '@/types/quran';
import { useEffect } from 'react';

const defaultPreferences: UserPreferences = {
  translation: 'english',
  theme: 'system',
  fontSize: 'medium',
  audioQari: 'alafasy',
};

export function usePreferences() {
  const [preferences, setPreferences] = useLocalStorage<UserPreferences>(
    'quraniq-preferences',
    defaultPreferences
  );

  const updatePreference = <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => {
    setPreferences({
      ...preferences,
      [key]: value,
    });
  };

  // Set up theme listener for system preference
  useEffect(() => {
    if (preferences.theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle('dark', e.matches);
      };
      
      // Set initial value
      document.documentElement.classList.toggle('dark', mediaQuery.matches);
      
      // Listen for changes
      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    } else {
      // Direct theme setting
      document.documentElement.classList.toggle('dark', preferences.theme === 'dark');
    }
  }, [preferences.theme]);

  return {
    preferences,
    updatePreference,
  };
}
