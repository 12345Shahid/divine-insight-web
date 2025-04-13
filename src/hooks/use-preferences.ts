
import { useLocalStorage } from './use-local-storage';
import { UserPreferences } from '@/types/quran';

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

  return {
    preferences,
    updatePreference,
  };
}
