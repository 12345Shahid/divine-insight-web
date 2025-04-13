
export const mockTafsir: {
  [verseId: number]: {
    short: string;
    ibn_kathir: string;
    maariful: string;
  };
} = {
  1: {
    short: "This verse is the opening of the Quran, known as the Basmalah, which Muslims recite before beginning any important task, seeking Allah's blessing.",
    ibn_kathir: "This honorable Surah is the mother of the Quran and comprises seven Ayat. It begins with praising Allah and glorifying Him. This verse is always recited before any surah, as a means of seeking Allah's help and guidance.",
    maariful: "The meaning of Bismillah is 'I begin with the name of Allah.' Imam Al-Qurtubi states that when one says 'Bismillah,' one is saying: 'I seek help through the name of Allah.' The term 'Rahman' signifies the attribute of mercy that encompasses all creation, while 'Rahim' is more specific to believers."
  },
  2: {
    short: "This verse establishes that all praise belongs to Allah alone, the Lord and Sustainer of all worlds, affirming His perfection and sovereignty.",
    ibn_kathir: "Allah praises Himself for His perfect Attributes and honored Deeds. 'Al-Hamd' implies praise, glorification, and a sense of gratitude. 'Rabb al-'Alamin' means He is the Creator, Provider, and Nourisher of all existence, and everything is in need of Him.",
    maariful: "By declaring Allah as 'Rabb al-'Alamin', the verse establishes that Allah is the sole creator, sustainer, and nurturer of all realms - whether visible or invisible, known or unknown to mankind. This comprehensive description leaves no room for any form of polytheism."
  },
  3: {
    short: "This verse repeats Allah's attributes of mercy, emphasizing His complete and perfect mercy that extends to all creation generally and to believers specifically.",
    ibn_kathir: "Ar-Rahman and Ar-Rahim are two names derived from the word 'Rahmah' (mercy). Ar-Rahman is more intense in meaning, denoting the One Who has mercy for all creation. Ar-Rahim is specifically for the believers, as Allah says: 'And He is ever Rahim to the believers.'",
    maariful: "The repetition of these attributes after mentioning Allah as Lord of the worlds creates a balance between His majesty and His mercy. It reminds us that despite His absolute authority and power, Allah's primary relationship with His creation is characterized by compassion and care."
  },
  4: {
    short: "This verse acknowledges Allah as the absolute sovereign on the Day of Judgment, when all souls will be accountable for their deeds.",
    ibn_kathir: "Allah is the Master of the Day of Recompense, the Day when everyone will be judged according to their good and evil deeds. This verse instills both hope and fear - hope in Allah's mercy for the righteous and fear of His justice for the wrongdoers.",
    maariful: "The use of 'Malik' (Master/Owner) rather than merely 'Judge' signifies that on the Day of Judgment, Allah has complete authority not just to judge but to dispose of all matters as He wills. No intercession will work without His permission, and no ransom will be accepted unless He allows it."
  },
  5: {
    short: "In this verse, believers acknowledge that worship and seeking help are directed to Allah alone, establishing the core principle of monotheism in Islam.",
    ibn_kathir: "This verse represents the essence of Islam – that worship and seeking assistance are directed to Allah alone. By placing 'You alone' at the beginning of the sentence, it emphasizes exclusivity. The verse transitions from speaking about Allah to speaking directly to Him, establishing a direct connection.",
    maariful: "This ayah transitions from praise and recognition of Allah's attributes to a direct conversation with Him, creating an intimate bond. By using the plural form 'we,' it reminds us that worship is both individual and communal, and that we stand before Allah as part of the community of believers."
  }
};

export const mockHadith: {
  [verseId: number]: Array<{
    collection: string;
    book: string;
    number: string;
    text: string;
    narrator: string;
    grade: string;
  }>;
} = {
  1: [
    {
      collection: "Sahih Bukhari",
      book: "Book of Tafsir",
      number: "4474",
      text: "The Prophet (ﷺ) said, \"When you recite 'Bismillah ar-Rahman ar-Raheem' at the start of Al-Fatiha, you are honoring Allah with the names He loves most.\"",
      narrator: "Abu Hurayrah",
      grade: "Sahih"
    }
  ],
  2: [
    {
      collection: "Sahih Muslim",
      book: "Book of Prayer",
      number: "598",
      text: "The Prophet (ﷺ) said, \"Allah says: 'I have divided the prayer (Al-Fatiha) into two halves between Me and My servant, and My servant will be given what he asks for.' When the servant says 'All praise is due to Allah, the Lord of the worlds', Allah says: 'My servant has praised Me.'\"",
      narrator: "Abu Hurayrah",
      grade: "Sahih"
    }
  ],
  5: [
    {
      collection: "Sunan Abu Dawud",
      book: "Book of Prayer",
      number: "832",
      text: "The Prophet (ﷺ) said: \"The essence of worship is supplication (du'a).\" Then he recited: \"It is You we worship and You we ask for help.\"",
      narrator: "Nu'man ibn Bashir",
      grade: "Hasan"
    },
    {
      collection: "Jami at-Tirmidhi",
      book: "Chapters on Tafsir",
      number: "2953",
      text: "The Prophet (ﷺ) said: \"When you are in need, ask Allah alone, and when you seek help, seek it from Allah alone.\"",
      narrator: "Ibn Abbas",
      grade: "Hasan Sahih"
    }
  ]
};
