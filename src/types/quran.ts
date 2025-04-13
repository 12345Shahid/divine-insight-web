
export interface Verse {
  id: number;
  surah: number;
  number: number;
  arabic: string;
  translations: {
    [language: string]: string;
  };
}

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  revelationType: string;
  verses: Verse[];
}

export interface QuranData {
  surahs: Surah[];
}

export interface SearchResult {
  verse: Verse;
  matchType: 'text' | 'translation' | 'surah';
  highlightedText?: string;
}

export interface UserPreferences {
  translation: string;
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  audioQari: string;
}
