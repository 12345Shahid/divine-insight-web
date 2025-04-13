
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
        },
        {
          id: 11,
          surah: 2,
          number: 4,
          arabic: "وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ",
          translations: {
            english: "And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].",
            urdu: "اور جو اس پر ایمان لاتے ہیں جو تم پر نازل کیا گیا اور جو تم سے پہلے نازل کیا گیا اور وہ آخرت پر یقین رکھتے ہیں",
            indonesian: "Dan mereka yang beriman kepada (Al-Qur'an) yang diturunkan kepadamu (Muhammad) dan (kitab-kitab) yang telah diturunkan sebelum engkau, dan mereka yakin akan adanya akhirat.",
            french: "Ceux qui croient à ce qui t'a été descendu et à ce qui a été descendu avant toi et qui croient fermement à la vie future."
          }
        },
        {
          id: 12,
          surah: 2,
          number: 5,
          arabic: "أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
          translations: {
            english: "Those are upon [right] guidance from their Lord, and it is those who are the successful.",
            urdu: "یہ لوگ اپنے رب کی طرف سے ہدایت پر ہیں اور یہی لوگ کامیاب ہیں",
            indonesian: "Merekalah yang mendapat petunjuk dari Tuhannya, dan mereka itulah orang yang beruntung.",
            french: "Ceux-là sont sur le bon chemin de leur Seigneur, et ce sont eux qui réussissent."
          }
        }
      ]
    },
    {
      number: 3,
      name: "آل عمران",
      englishName: "Al-i'Imran",
      revelationType: "Medinan",
      verses: [
        {
          id: 13,
          surah: 3,
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
          id: 14,
          surah: 3,
          number: 2,
          arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
          translations: {
            english: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.",
            urdu: "اللہ، کوئی معبود نہیں سوائے اس کے، زندہ ہمیشہ رہنے والا",
            indonesian: "Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya).",
            french: "Allah! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même."
          }
        },
        {
          id: 15,
          surah: 3,
          number: 3,
          arabic: "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ وَأَنْزَلَ التَّوْرَاةَ وَالْإِنْجِيلَ",
          translations: {
            english: "He has sent down upon you, [O Muhammad], the Book in truth, confirming what was before it. And He revealed the Torah and the Gospel.",
            urdu: "اس نے تم پر کتاب نازل کی حق کے ساتھ، تصدیق کرتی ہوئی اس کی جو پہلے موجود ہے اور اس نے تورات اور انجیل نازل کی",
            indonesian: "Dia menurunkan Kitab (Al-Qur'an) kepadamu (Muhammad) yang mengandung kebenaran, membenarkan (kitab-kitab) sebelumnya, dan Dia menurunkan Taurat dan Injil.",
            french: "Il a fait descendre sur toi le Livre avec la vérité, confirmant ce qui l'a précédé. Et Il a fait descendre la Thora et l'Evangile."
          }
        }
      ]
    },
    {
      number: 4,
      name: "النساء",
      englishName: "An-Nisa",
      revelationType: "Medinan",
      verses: [
        {
          id: 16,
          surah: 4,
          number: 1,
          arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
          translations: {
            english: "O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women. And fear Allah, through whom you ask one another, and the wombs. Indeed Allah is ever, over you, an Observer.",
            urdu: "لوگو! اپنے رب سے ڈرو جس نے تمہیں ایک جان سے پیدا کیا اور اسی سے اس کا جوڑا بنایا اور ان دونوں سے بہت سے مرد اور عورتیں پھیلائیں۔ اور اللہ سے ڈرو جس کے واسطے سے تم ایک دوسرے سے سوال کرتے ہو اور رشتہ داری سے۔ بیشک اللہ تم پر نگران ہے",
            indonesian: "Wahai manusia! Bertakwalah kepada Tuhanmu yang telah menciptakan kamu dari diri yang satu (Adam), dan (Allah) menciptakan pasangannya (Hawa) dari (diri)nya; dan dari keduanya Allah memperkembangbiakkan laki-laki dan perempuan yang banyak. Bertakwalah kepada Allah yang dengan nama-Nya kamu saling meminta, dan (peliharalah) hubungan kekeluargaan. Sesungguhnya Allah selalu menjaga dan mengawasimu.",
            french: "Ô hommes! Craignez votre Seigneur qui vous a créés d'un seul être, et a créé de celui-ci son épouse, et qui de ces deux-là a fait répandre beaucoup d'hommes et de femmes. Craignez Allah au nom duquel vous vous implorez les uns les autres, et craignez de rompre les liens du sang. Certes Allah vous observe parfaitement."
          }
        },
        {
          id: 17,
          surah: 4,
          number: 2,
          arabic: "وَآتُوا الْيَتَامَىٰ أَمْوَالَهُمْ ۖ وَلَا تَتَبَدَّلُوا الْخَبِيثَ بِالطَّيِّبِ ۖ وَلَا تَأْكُلُوا أَمْوَالَهُمْ إِلَىٰ أَمْوَالِكُمْ ۚ إِنَّهُ كَانَ حُوبًا كَبِيرًا",
          translations: {
            english: "And give to the orphans their properties and do not substitute the defective [of your own] for the good [of theirs]. And do not consume their properties into your own. Indeed, that is ever a great sin.",
            urdu: "اور یتیموں کو ان کے مال دو اور بری چیز کو اچھی چیز سے نہ بدلو۔ اور ان کے مال کو اپنے مال کے ساتھ ملا کر نہ کھاؤ۔ بیشک یہ بہت بڑا گناہ ہے",
            indonesian: "Dan berikanlah kepada anak-anak yatim (yang sudah dewasa) harta mereka, janganlah kamu menukar yang baik dengan yang buruk, dan jangan kamu makan harta mereka bersama hartamu. Sesungguhnya tindakan-tindakan (menukar dan memakan) itu, adalah dosa yang besar.",
            french: "Et donnez aux orphelins leurs biens; n'y substituez pas le mauvais au bon. Ne mangez pas leurs biens avec les vôtres: c'est vraiment un grand péché."
          }
        }
      ]
    },
    {
      number: 5,
      name: "المائدة",
      englishName: "Al-Ma'idah",
      revelationType: "Medinan",
      verses: [
        {
          id: 18,
          surah: 5,
          number: 1,
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ۚ أُحِلَّتْ لَكُمْ بَهِيمَةُ الْأَنْعَامِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ غَيْرَ مُحِلِّي الصَّيْدِ وَأَنْتُمْ حُرُمٌ ۗ إِنَّ اللَّهَ يَحْكُمُ مَا يُرِيدُ",
          translations: {
            english: "O you who have believed, fulfill [all] contracts. Lawful for you are the animals of grazing livestock except for that which is recited to you [in this Qur'an] - hunting not being permitted while you are in the state of ihram. Indeed, Allah ordains what He intends.",
            urdu: "اے ایمان والو! عہدوں کو پورا کرو۔ تمہارے لیے چوپایے حلال کیے گئے ہیں سوائے ان کے جن کا ذکر تم پر پڑھا جاتا ہے، بشرطیکہ تم شکار کو حلال نہ سمجھو جب کہ تم حالت احرام میں ہو۔ بیشک اللہ جو چاہتا ہے حکم دیتا ہے",
            indonesian: "Wahai orang-orang yang beriman! Penuhilah janji-janji. Hewan ternak dihalalkan bagimu, kecuali yang akan disebutkan kepadamu, dengan tidak menghalalkan berburu ketika kamu sedang berihram (haji atau umrah). Sesungguhnya Allah menetapkan hukum sesuai dengan yang Dia kehendaki.",
            french: "Ô les croyants! Remplissez fidèlement vos engagements. Vous est permise la bête du cheptel, sauf ce qui sera énoncé. Ne vous permettez point la chasse alors que vous êtes en état d'ihram. Allah en vérité, décide ce qu'Il veut."
          }
        },
        {
          id: 19,
          surah: 5,
          number: 2,
          arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحِلُّوا شَعَائِرَ اللَّهِ وَلَا الشَّهْرَ الْحَرَامَ وَلَا الْهَدْيَ وَلَا الْقَلَائِدَ وَلَا آمِّينَ الْبَيْتَ الْحَرَامَ يَبْتَغُونَ فَضْلًا مِنْ رَبِّهِمْ وَرِضْوَانًا ۚ وَإِذَا حَلَلْتُمْ فَاصْطَادُوا ۚ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ أَنْ صَدُّوكُمْ عَنِ الْمَسْجِدِ الْحَرَامِ أَنْ تَعْتَدُوا ۘ وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ ۚ وَاتَّقُوا اللَّهَ ۖ إِنَّ اللَّهَ شَدِيدُ الْعِقَابِ",
          translations: {
            english: "O you who have believed, do not violate the rites of Allah or [the sanctity of] the sacred month or [neglect the marking of] the sacrificial animals and garlanding [them] or [violate the safety of] those coming to the Sacred House seeking bounty from their Lord and [His] approval. But when you come out of ihram, then [you may] hunt. And do not let the hatred of a people for having obstructed you from al-Masjid al-Haram lead you to transgress. And cooperate in righteousness and piety, but do not cooperate in sin and aggression. And fear Allah; indeed, Allah is severe in penalty.",
            urdu: "اے ایمان والو! اللہ کی نشانیوں کی، نہ حرمت والے مہینے کی، نہ قربانی کے جانوروں کی، نہ ان (قربانی کے جانوروں) کی گردنوں میں ڈالنے والی علامتوں کی، اور نہ بیت الحرام کا قصد کرنے والوں کی حرمت توڑو، جو اپنے رب کا فضل اور رضامندی چاہتے ہیں۔ اور جب تم احرام سے باہر آجاؤ تو تم شکار کر سکتے ہو۔ اور کسی قوم کی دشمنی، جس نے تمہیں مسجد حرام سے روکا، تمہیں اس بات پر نہ ابھارے کہ تم حد سے تجاوز کرو۔ اور نیکی اور تقویٰ میں ایک دوسرے کی مدد کرو اور گناہ اور زیادتی میں ایک دوسرے کی مدد نہ کرو۔ اور اللہ سے ڈرو۔ بیشک اللہ کا عذاب سخت ہے",
            indonesian: "Wahai orang-orang yang beriman! Janganlah kamu merusak syi'ar-syi'ar kesucian Allah, dan jangan (merusak) bulan-bulan haram, jangan (mengganggu) hadyu (hewan-hewan kurban) dan qala'id (hewan-hewan kurban yang diberi tanda), dan jangan (pula) mengganggu orang-orang yang mengunjungi Baitulharam; mereka mencari karunia dan keridhaan Tuhannya. Tetapi apabila kamu telah menyelesaikan ihram, maka bolehlah kamu berburu. Jangan sampai kebencian(mu) kepada suatu kaum karena mereka menghalang-halangimu dari Masjidilharam, mendorongmu berbuat melampaui batas (kepada mereka). Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan. Bertakwalah kepada Allah, sungguh, Allah sangat berat siksaan-Nya.",
            french: "Ô les croyants! Ne profanez ni les rites du pèlerinage dans la voie d'Allah, ni le mois sacré, ni les offrandes, ni les animaux marqués, ni les gens qui se dirigent vers la Maison sacrée pour y chercher la grâce et la satisfaction de leur Seigneur. Une fois désacralisés, vous êtes libres de chasser. Et ne laissez pas la haine pour un peuple qui vous a obstrué la route vers la Mosquée sacrée vous inciter à transgresser. Entraidez-vous dans l'accomplissement des bonnes œuvres et de la piété et ne vous entraidez pas dans le péché et la transgression. Et craignez Allah, car Allah est, certes, dur en punition!"
          }
        }
      ]
    },
    {
      number: 9,
      name: "التوبة",
      englishName: "At-Tawbah",
      revelationType: "Medinan",
      verses: [
        {
          id: 20,
          surah: 9,
          number: 1,
          arabic: "بَرَاءَةٌ مِنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدْتُمْ مِنَ الْمُشْرِكِينَ",
          translations: {
            english: "[This is a declaration of] disassociation, from Allah and His Messenger, to those with whom you had made a treaty among the polytheists.",
            urdu: "اللہ اور اس کے رسول کی طرف سے ان مشرکین کے بارے میں اعلان بیزاری ہے جن سے تم نے معاہدہ کیا تھا",
            indonesian: "(Inilah pernyataan) pemutusan hubungan dari Allah dan Rasul-Nya kepada orang-orang musyrik yang kamu telah mengadakan perjanjian (dengan mereka).",
            french: "Désaveu de la part d'Allah et de Son messager à l'égard des associateurs avec qui vous avez conclu un pacte."
          }
        }
      ]
    },
    {
      number: 114,
      name: "الناس",
      englishName: "An-Nas",
      revelationType: "Meccan",
      verses: [
        {
          id: 21,
          surah: 114,
          number: 1,
          arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          translations: {
            english: "Say, \"I seek refuge in the Lord of mankind,",
            urdu: "کہو میں پناہ مانگتا ہوں انسانوں کے رب کی",
            indonesian: "Katakanlah, "Aku berlindung kepada Tuhannya manusia,",
            french: "Dis : «Je cherche protection auprès du Seigneur des hommes."
          }
        },
        {
          id: 22,
          surah: 114,
          number: 2,
          arabic: "مَلِكِ النَّاسِ",
          translations: {
            english: "The Sovereign of mankind,",
            urdu: "انسانوں کے بادشاہ کی",
            indonesian: "Raja manusia,",
            french: "Le Souverain des hommes,"
          }
        },
        {
          id: 23,
          surah: 114,
          number: 3,
          arabic: "إِلَٰهِ النَّاسِ",
          translations: {
            english: "The God of mankind,",
            urdu: "انسانوں کے معبود کی",
            indonesian: "Sembahan manusia,",
            french: "Dieu des hommes,"
          }
        },
        {
          id: 24,
          surah: 114,
          number: 4,
          arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
          translations: {
            english: "From the evil of the retreating whisperer -",
            urdu: "پیچھے ہٹ جانے والے وسوسہ ڈالنے والے کے شر سے",
            indonesian: "dari kejahatan (bisikan) setan yang bersembunyi,",
            french: "contre le mal du mauvais conseiller, furtif,"
          }
        },
        {
          id: 25,
          surah: 114,
          number: 5,
          arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
          translations: {
            english: "Who whispers [evil] into the breasts of mankind -",
            urdu: "جو انسانوں کے دلوں میں وسوسے ڈالتا ہے",
            indonesian: "yang membisikkan (kejahatan) ke dalam dada manusia,",
            french: "qui souffle le mal dans les poitrines des hommes,"
          }
        },
        {
          id: 26,
          surah: 114,
          number: 6,
          arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
          translations: {
            english: "From among the jinn and mankind.\"",
            urdu: "جنوں میں سے اور انسانوں میں سے",
            indonesian: "dari (golongan) jin dan manusia."",
            french: "qu'il soit un djinn, ou un être humain»."
          }
        }
      ]
    }
  ]
};
