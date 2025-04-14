
import { Verse, Surah, QuranData } from '@/types/quran';

// Cache implementation
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours
const CACHE_PREFIX = 'quraniq-';

interface CachedData {
  data: any;
  timestamp: number;
}

const getCachedData = (key: string): any | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const cachedData = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cachedData) return null;
    
    const { data, timestamp } = JSON.parse(cachedData) as CachedData;
    const isExpired = Date.now() - timestamp > CACHE_EXPIRY;
    
    return isExpired ? null : data;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
};

const setCachedData = (key: string, data: any): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const cachedData: CachedData = {
      data,
      timestamp: Date.now()
    };
    
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(cachedData));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
};

// API endpoints
const API_BASE_URL = 'https://api.alquran.cloud/v1';
const FALLBACK_AUDIO_URL = 'https://everyayah.com/data/Alafasy_64kbps';

export async function fetchVerse(surahNumber: number, ayahNumber: number): Promise<Verse | null> {
  const cacheKey = `verse-${surahNumber}-${ayahNumber}`;
  const cachedVerse = getCachedData(cacheKey);
  
  if (cachedVerse) return cachedVerse;
  
  try {
    const response = await fetch(`${API_BASE_URL}/ayah/${surahNumber}:${ayahNumber}`);
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) throw new Error('Failed to fetch verse');
    
    const verse: Verse = {
      id: data.data.number,
      surah: data.data.surah.number,
      number: data.data.numberInSurah,
      arabic: data.data.text,
      translations: {
        english: '',
        urdu: '',
        indonesian: '',
        french: ''
      }
    };
    
    setCachedData(cacheKey, verse);
    return verse;
  } catch (error) {
    console.error('Error fetching verse:', error);
    return null;
  }
}

export async function fetchTranslations(surahNumber: number, ayahNumber: number): Promise<{ [language: string]: string } | null> {
  const cacheKey = `translations-${surahNumber}-${ayahNumber}`;
  const cachedTranslations = getCachedData(cacheKey);
  
  if (cachedTranslations) return cachedTranslations;
  
  try {
    const response = await fetch(`${API_BASE_URL}/ayah/${surahNumber}:${ayahNumber}/editions/en.asad,ur.jalandhry,id.indonesian,fr.hamidullah`);
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) throw new Error('Failed to fetch translations');
    
    const translations: { [language: string]: string } = {
      english: '',
      urdu: '',
      indonesian: '',
      french: ''
    };
    
    data.data.forEach((edition: any) => {
      if (edition.edition.language === 'en') translations.english = edition.text;
      if (edition.edition.language === 'ur') translations.urdu = edition.text;
      if (edition.edition.language === 'id') translations.indonesian = edition.text;
      if (edition.edition.language === 'fr') translations.french = edition.text;
    });
    
    setCachedData(cacheKey, translations);
    return translations;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return null;
  }
}

export async function fetchVerseWithTranslations(surahNumber: number, ayahNumber: number): Promise<Verse | null> {
  const verse = await fetchVerse(surahNumber, ayahNumber);
  if (!verse) return null;
  
  const translations = await fetchTranslations(surahNumber, ayahNumber);
  if (translations) {
    verse.translations = translations;
  }
  
  return verse;
}

export async function fetchSurah(surahNumber: number): Promise<Verse[]> {
  const cacheKey = `surah-${surahNumber}`;
  const cachedSurah = getCachedData(cacheKey);
  
  if (cachedSurah) return cachedSurah;
  
  try {
    const response = await fetch(`${API_BASE_URL}/surah/${surahNumber}`);
    const surahData = await response.json();
    
    if (surahData.code !== 200 || !surahData.data) throw new Error('Failed to fetch surah');
    
    // Fetch translations for the whole surah
    const translationsResponse = await fetch(`${API_BASE_URL}/surah/${surahNumber}/editions/en.asad`);
    const translationsData = await translationsResponse.json();
    
    if (translationsData.code !== 200 || !translationsData.data) throw new Error('Failed to fetch surah translations');
    
    const englishVerses = translationsData.data[0].ayahs;
    
    const verses: Verse[] = surahData.data.ayahs.map((ayah: any, index: number) => {
      const verse: Verse = {
        id: ayah.number,
        surah: surahNumber,
        number: ayah.numberInSurah,
        arabic: ayah.text,
        translations: {
          english: englishVerses[index]?.text || '',
          urdu: '',
          indonesian: '',
          french: ''
        }
      };
      
      return verse;
    });
    
    setCachedData(cacheKey, verses);
    return verses;
  } catch (error) {
    console.error('Error fetching surah:', error);
    return [];
  }
}

export async function fetchSurahInfo(surahNumber: number): Promise<Surah | null> {
  const cacheKey = `surahInfo-${surahNumber}`;
  const cachedSurahInfo = getCachedData(cacheKey);
  
  if (cachedSurahInfo) return cachedSurahInfo;
  
  try {
    const response = await fetch(`${API_BASE_URL}/surah/${surahNumber}`);
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) throw new Error('Failed to fetch surah info');
    
    const verses = await fetchSurah(surahNumber);
    
    const surah: Surah = {
      number: data.data.number,
      name: data.data.name,
      englishName: data.data.englishName,
      revelationType: data.data.revelationType,
      verses
    };
    
    setCachedData(cacheKey, surah);
    return surah;
  } catch (error) {
    console.error('Error fetching surah info:', error);
    return null;
  }
}

export function getAudioUrl(surahNumber: number, ayahNumber: number, qari: string = 'alafasy'): string {
  // Format numbers with leading zeros
  const formattedSurah = surahNumber.toString().padStart(3, '0');
  const formattedAyah = ayahNumber.toString().padStart(3, '0');
  
  // Different qaris have different folder names
  const qariMap: { [key: string]: string } = {
    alafasy: 'Alafasy_64kbps',
    sudais: 'Abdurrahmaan_As-Sudais_64kbps',
    husary: 'Husary_64kbps',
    muaiqly: 'Maher_AlMuaiqly_64kbps'
  };
  
  const qariFolder = qariMap[qari] || qariMap.alafasy;
  
  return `https://everyayah.com/data/${qariFolder}/${formattedSurah}${formattedAyah}.mp3`;
}

export async function fetchTafsir(surahNumber: number, ayahNumber: number): Promise<string | null> {
  const cacheKey = `tafsir-${surahNumber}-${ayahNumber}`;
  const cachedTafsir = getCachedData(cacheKey);
  
  if (cachedTafsir) return cachedTafsir;
  
  try {
    const response = await fetch(`${API_BASE_URL}/ayah/${surahNumber}:${ayahNumber}/editions/en.maududi`);
    const data = await response.json();
    
    if (data.code !== 200 || !data.data || data.data.length === 0) return 'No Tafseer available for this verse.';
    
    const tafsirText = data.data[0].text;
    setCachedData(cacheKey, tafsirText);
    return tafsirText;
  } catch (error) {
    console.error('Error fetching tafsir:', error);
    return 'No Tafseer available for this verse.';
  }
}

export async function fetchAllSurahs(): Promise<Surah[]> {
  const cacheKey = 'all-surahs';
  const cachedSurahs = getCachedData(cacheKey);
  
  if (cachedSurahs) return cachedSurahs;
  
  try {
    const response = await fetch(`${API_BASE_URL}/surah`);
    const data = await response.json();
    
    if (data.code !== 200 || !data.data) throw new Error('Failed to fetch surahs');
    
    const surahs: Surah[] = data.data.map((surah: any) => ({
      number: surah.number,
      name: surah.name,
      englishName: surah.englishName,
      revelationType: surah.revelationType,
      verses: [] // Verses will be fetched separately when needed
    }));
    
    setCachedData(cacheKey, surahs);
    return surahs;
  } catch (error) {
    console.error('Error fetching all surahs:', error);
    return [];
  }
}
