
import { QuranData } from "@/types/quran";

// This is a simplified mock of the Quran data for development purposes
// In a real application, this would be fetched from an API

export const mockQuranData: QuranData = {
  surahs: [
    {
      number: 1,
      name: "الفاتحة",
      englishName: "Al-Fatiha",
      revelationType: "Meccan",
      verses: [
        {
          id: 1,
          surah: 1,
          number: 1,
          arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          translations: {
            english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
            urdu: "اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے",
            indonesian: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
            french: "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux."
          }
        },
        {
          id: 2,
          surah: 1,
          number: 2,
          arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
          translations: {
            english: "All praise is due to Allah, Lord of the worlds.",
            urdu: "سب تعریف اللہ کے لیے ہے جو تمام جہانوں کا پالنے والا ہے",
            indonesian: "Segala puji bagi Allah, Tuhan seluruh alam.",
            french: "Louange à Allah, Seigneur des mondes."
          }
        },
        {
          id: 3,
          surah: 1,
          number: 3,
          arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
          translations: {
            english: "The Entirely Merciful, the Especially Merciful.",
            urdu: "بڑا مہربان نہایت رحم والا",
            indonesian: "Yang Maha Pengasih, Maha Penyayang.",
            french: "Le Tout Miséricordieux, le Très Miséricordieux."
          }
        },
        {
          id: 4,
          surah: 1,
          number: 4,
          arabic: "مَالِكِ يَوْمِ الدِّينِ",
          translations: {
            english: "Sovereign of the Day of Recompense.",
            urdu: "روزِ جزا کا مالک",
            indonesian: "Pemilik hari pembalasan.",
            french: "Maître du Jour de la rétribution."
          }
        },
        {
          id: 5,
          surah: 1,
          number: 5,
          arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
          translations: {
            english: "It is You we worship and You we ask for help.",
            urdu: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں",
            indonesian: "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.",
            french: "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours."
          }
        },
        {
          id: 6,
          surah: 1,
          number: 6,
          arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
          translations: {
            english: "Guide us to the straight path.",
            urdu: "ہمیں سیدھا راستہ دکھا",
            indonesian: "Tunjukilah kami jalan yang lurus.",
            french: "Guide-nous dans le droit chemin."
          }
        },
        {
          id: 7,
          surah: 1,
          number: 7,
          arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
          translations: {
            english: "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.",
            urdu: "ان لوگوں کا راستہ جن پر تو نے انعام کیا، نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا",
            indonesian: "(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya, bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.",
            french: "Le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés."
          }
        }
      ]
    },
    {
      number: 2,
      name: "البقرة",
      englishName: "Al-Baqarah",
      revelationType: "Medinan",
      verses: [
        {
          id: 8,
          surah: 2,
          number: 1,
          arabic: "الم",
          translations: {
            english: "Alif, Lam, Meem.",
            urdu: "الم",
            indonesian: "Alif Lam Mim.",
            french: "Alif, Lam, Mim."
          }
        },
        {
          id: 9,
          surah: 2,
          number: 2,
          arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ",
          translations: {
            english: "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
            urdu: "یہ وہ کتاب ہے جس میں کچھ شک نہیں، ہدایت ہے پرہیزگاروں کے لئے",
            indonesian: "Kitab (Al-Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa.",
            french: "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux."
          }
        },
        {
          id: 10,
          surah: 2,
          number: 3,
          arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ",
          translations: {
            english: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them.",
            urdu: "جو غیب پر ایمان لاتے ہیں اور نماز قائم کرتے ہیں اور ہمارے دیے ہوئے میں سے خرچ کرتے ہیں",
            indonesian: "(yaitu) mereka yang beriman kepada yang gaib, melaksanakan salat, dan menginfakkan sebagian rezeki yang Kami berikan kepada mereka.",
            french: "Qui croient à l'invisible et accomplissent la Salat et dépensent [dans l'obéissance à Allah], de ce que Nous leur avons attribué."
          }
        }
      ]
    }
  ]
};
