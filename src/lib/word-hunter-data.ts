
export interface WordPuzzle {
  word: string;
  scrambled: string;
  hint: string;
  language: 'English' | 'Tamil';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const wordHunterPuzzles: WordPuzzle[] = [
  // === English - Easy (4-5 letters) ===
  { word: "apple", scrambled: "pleap", hint: "A common fruit", language: "English", difficulty: "Easy" },
  { word: "house", scrambled: "esuoh", hint: "A place where people live", language: "English", difficulty: "Easy" },
  { word: "water", scrambled: "rewat", hint: "A clear liquid you drink", language: "English", difficulty: "Easy" },
  { word: "music", scrambled: "sucim", hint: "Sounds arranged in a pleasing way", language: "English", difficulty: "Easy" },
  { word: "dream", scrambled: "mader", hint: "Stories in your mind while sleeping", language: "English", difficulty: "Easy" },
  { word: "smile", scrambled: "miles", hint: "A happy facial expression", language: "English", difficulty: "Easy" },
  { word: "earth", scrambled: "herta", hint: "The planet we live on", language: "English", difficulty: "Easy" },
  { word: "bread", scrambled: "bard", hint: "A baked food made from flour", language: "English", difficulty: "Easy" },
  { word: "light", scrambled: "gilht", hint: "Makes things visible", language: "English", difficulty: "Easy" },
  { word: "beach", scrambled: "cheab", hint: "A sandy shore by the ocean", language: "English", difficulty: "Easy" },

  // === English - Medium (6-7 letters) ===
  { word: "planet", scrambled: "lpanet", hint: "A celestial body orbiting a star", language: "English", difficulty: "Medium" },
  { word: "garden", scrambled: "gadrne", hint: "A place where flowers and plants grow", language: "English", difficulty: "Medium" },
  { word: "friend", scrambled: "frined", hint: "A person you know well and like", language: "English", difficulty: "Medium" },
  { word: "purple", scrambled: "lupper", hint: "A color that is a mix of red and blue", language: "English", difficulty: "Medium" },
  { word: "journey", scrambled: "yournej", hint: "A long trip", language: "English", difficulty: "Medium" },
  { word: "believe", scrambled: "vebile", hint: "Accept something as true", language: "English", difficulty: "Medium" },
  { word: "country", scrambled: "nycotur", hint: "A nation with its own government", language: "English", difficulty: "Medium" },
  { word: "morning", scrambled: "ninmorg", hint: "The early part of the day", language: "English", difficulty: "Medium" },

  // === English - Hard (8+ letters) ===
  { word: "beautiful", scrambled: "tifulbeau", hint: "Pleasing the senses or mind aesthetically", language: "English", difficulty: "Hard" },
  { word: "knowledge", scrambled: "wledgenok", hint: "Facts, information, and skills", language: "English", difficulty: "Hard" },
  { word: "adventure", scrambled: "vendeatur", hint: "An unusual and exciting experience", language: "English", difficulty: "Hard" },
  { word: "technology", scrambled: "chologyten", hint: "Application of scientific knowledge", language: "English", difficulty: "Hard" },
  { word: "language", scrambled: "gegulana", hint: "The method of human communication", language: "English", difficulty: "Hard" },
  { word: "important", scrambled: "portantim", hint: "Of great significance or value", language: "English", difficulty: "Hard" },
  { word: "experience", scrambled: "ceenrepixe", hint: "Practical contact with and observation of facts or events", language: "English", difficulty: "Hard" },
  { word: "celebrate", scrambled: "bratecele", hint: "Acknowledge a happy day or event", language: "English", difficulty: "Hard" },

  // === Tamil - Easy (2-3 characters) ===
  { word: "நாய்", scrambled: "ய்நா", hint: "வீட்டு விலங்கு", language: "Tamil", difficulty: "Easy" },
  { word: "பூனை", scrambled: "னைபூ", hint: "இதுவும் வீட்டு விலங்கு", language: "Tamil", difficulty: "Easy" },
  { word: "மரம்", scrambled: "ரம்ம", hint: "மரக்கன்றுகளை நடுங்கள்", language: "Tamil", difficulty: "Easy" },
  { word: "வீடு", scrambled: "டுவீ", hint: "நாம் வசிக்கும் இடம்", language: "Tamil", difficulty: "Easy" },
  { word: "பழம்", scrambled: "ழம்ப", hint: "மாம்பழம் ஒரு...", language: "Tamil", difficulty: "Easy" },
  { word: "நிலா", scrambled: "லாநி", hint: "இரவில் தெரியும்", language: "Tamil", difficulty: "Easy" },

  // === Tamil - Medium (4-5 characters) ===
  { word: "கதிரவன்", scrambled: "வன்கதிர", hint: "சூரியனின் மற்றொரு பெயர்", language: "Tamil", difficulty: "Medium" },
  { word: "புத்தகம்", scrambled: "கம்புத்த", hint: "அறிவு தரும்", language: "Tamil", difficulty: "Medium" },
  { word: "பயணம்", scrambled: "ணம்பய", hint: "ஓர் இடத்திலிருந்து இன்னொரு இடத்திற்குச் செல்லுதல்", language: "Tamil", difficulty: "Medium" },
  { word: "விமானம்", scrambled: "னம்விமா", hint: "வானில் பறக்கும்", language: "Tamil", difficulty: "Medium" },
  { word: "சமூகம்", scrambled: "கம்சமூ", hint: "மக்கள் குழு", language: "Tamil", difficulty: "Medium" },

  // === Tamil - Hard (6+ characters) ===
  { word: "கணினி", scrambled: "னிகணி", hint: "ஒரு மின்னணு சாதனம்", language: "Tamil", difficulty: "Hard" },
  { word: "நூலகம்", scrambled: "கம்நூல", hint: "புத்தகங்கள் இருக்கும் இடம்", language: "Tamil", difficulty: "Hard" },
  { word: "விண்வெளி", scrambled: "ளிண்வெவி", hint: "பூமிக்கு அப்பால் உள்ள இடம்", language: "Tamil", difficulty: "Hard" },
  { word: "கலாச்சாரம்", scrambled: "ரம்சாலாக்க", hint: "பண்பாடு", language: "Tamil", difficulty: "Hard" },
  { word: "சுற்றுச்சூழல்", scrambled: "ழல்சுற்றுச்சூழ", hint: "நம்மைச் சுற்றியுள்ள உலகம்", language: "Tamil", difficulty: "Hard" },
];
