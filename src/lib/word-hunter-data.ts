
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
  { word: "bread", scrambled: "drabe", hint: "A baked food made from flour", language: "English", difficulty: "Easy" },
  { word: "light", scrambled: "gilht", hint: "Makes things visible", language: "English", difficulty: "Easy" },
  { word: "beach", scrambled: "cheab", hint: "A sandy shore by the ocean", language: "English", difficulty: "Easy" },

  // === English - Medium (6-7 letters) ===
  { word: "planet", scrambled: "lpanet", hint: "A celestial body orbiting a star", language: "English", difficulty: "Medium" },
  { word: "garden", scrambled: "gadrne", hint: "A place where flowers and plants grow", language: "English", difficulty: "Medium" },
  { word: "friend", scrambled: "frined", hint: "A person you know well and like", language: "English", difficulty: "Medium" },
  { word: "purple", scrambled: "lupper", hint: "A color that is a mix of red and blue", language: "English", difficulty: "Medium" },
  { word: "journey", scrambled: "yournej", hint: "A long trip", language: "English", difficulty: "Medium" },
  { word: "believe", scrambled: "elevib", hint: "Accept something as true", language: "English", difficulty: "Medium" },
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
  { word: "மரம்", scrambled: "ரமஅ", hint: "மரக்கன்றுகளை நடுங்கள்", language: "Tamil", difficulty: "Easy" },
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
  { word: "கலாச்சாரம்", scrambled: "சம்காரளா", hint: "பண்பாடு", language: "Tamil", difficulty: "Hard" },
  { word: "சுற்றுச்சூழல்", scrambled: "ழச்சூள்றல்சு", hint: "நம்மைச் சுற்றியுள்ள உலகம்", language: "Tamil", difficulty: "Hard" },
  // === Extra English - Easy (4-5 letters) ===
{ word: "book", scrambled: "okob", hint: "You read it", language: "English", difficulty: "Easy" },
{ word: "fish", scrambled: "hsif", hint: "Lives in water", language: "English", difficulty: "Easy" },
{ word: "milk", scrambled: "ilkm", hint: "White drink from cows", language: "English", difficulty: "Easy" },
{ word: "star", scrambled: "rats", hint: "Shines in the night sky", language: "English", difficulty: "Easy" },
{ word: "rain", scrambled: "nira", hint: "Falls from clouds", language: "English", difficulty: "Easy" },
{ word: "door", scrambled: "rood", hint: "You open it to enter", language: "English", difficulty: "Easy" },
{ word: "tree", scrambled: "reet", hint: "Has leaves and branches", language: "English", difficulty: "Easy" },
{ word: "fire", scrambled: "erif", hint: "Produces heat and light", language: "English", difficulty: "Easy" },
{ word: "gold", scrambled: "dlog", hint: "A precious yellow metal", language: "English", difficulty: "Easy" },
{ word: "wind", scrambled: "dwin", hint: "Moves through the air", language: "English", difficulty: "Easy" },

// === Extra English - Medium (6-7 letters) ===
{ word: "school", scrambled: "choosl", hint: "Where students learn", language: "English", difficulty: "Medium" },
{ word: "doctor", scrambled: "ctodro", hint: "Helps sick people", language: "English", difficulty: "Medium" },
{ word: "market", scrambled: "tkmear", hint: "A place to buy and sell things", language: "English", difficulty: "Medium" },
{ word: "family", scrambled: "lmfayi", hint: "Parents and children together", language: "English", difficulty: "Medium" },
{ word: "forest", scrambled: "trofes", hint: "Large area full of trees", language: "English", difficulty: "Medium" },
{ word: "castle", scrambled: "letcas", hint: "A king or queen may live here", language: "English", difficulty: "Medium" },
{ word: "bridge", scrambled: "grdeib", hint: "Helps people cross rivers", language: "English", difficulty: "Medium" },
{ word: "silver", scrambled: "lvisre", hint: "A shiny grey metal", language: "English", difficulty: "Medium" },
{ word: "farmer", scrambled: "ermfra", hint: "Grows crops and raises animals", language: "English", difficulty: "Medium" },
{ word: "circus", scrambled: "cuiscr", hint: "Clowns and acrobats perform here", language: "English", difficulty: "Medium" },

// === Extra English - Hard (8+ letters) ===
{ word: "mountain", scrambled: "nmiatnou", hint: "Very tall landform", language: "English", difficulty: "Hard" },
{ word: "elephant", scrambled: "thpanele", hint: "A very large animal", language: "English", difficulty: "Hard" },
{ word: "hospital", scrambled: "plohitsa", hint: "People go here when ill", language: "English", difficulty: "Hard" },
{ word: "computer", scrambled: "terupmoc", hint: "An electronic machine", language: "English", difficulty: "Hard" },
{ word: "telephone", scrambled: "pheonelt", hint: "Used for talking over distance", language: "English", difficulty: "Hard" },
{ word: "festival", scrambled: "vafliest", hint: "A time of celebration", language: "English", difficulty: "Hard" },
{ word: "umbrella", scrambled: "mrelubal", hint: "Used in rain", language: "English", difficulty: "Hard" },
{ word: "strength", scrambled: "ghtsren", hint: "Quality of being strong", language: "English", difficulty: "Hard" },
{ word: "creative", scrambled: "tivecare", hint: "Having original ideas", language: "English", difficulty: "Hard" },
{ word: "champion", scrambled: "hampcion", hint: "The winner", language: "English", difficulty: "Hard" },

// === Extra Tamil - Easy (2-3 characters) ===
{ word: "சூரி", scrambled: "ரிசூ", hint: "சூரியனின் குறுக்கு பெயர்", language: "Tamil", difficulty: "Easy" },
{ word: "கல்", scrambled: "லக", hint: "கடினமான பொருள்", language: "Tamil", difficulty: "Easy" },
{ word: "அம்மா", scrambled: "ம்மஆ", hint: "வீட்டின் தலைவி", language: "Tamil", difficulty: "Easy" },
{ word: "அப்பா", scrambled: "ப்ஆஅ", hint: "வீட்டின் தலைவர்", language: "Tamil", difficulty: "Easy" },
{ word: "காய்", scrambled: "யகா", hint: "காய்கறி", language: "Tamil", difficulty: "Easy" },
{ word: "வான்", scrambled: "ன்வா", hint: "நீல வானம்", language: "Tamil", difficulty: "Easy" },
{ word: "மழை", scrambled: "ழைம", hint: "மேகம் பொழிகிறது", language: "Tamil", difficulty: "Easy" },
{ word: "பால்", scrambled: "லபா", hint: "கன்றுக்குட்டி குடிக்கும்", language: "Tamil", difficulty: "Easy" },
{ word: "இலை", scrambled: "லையி", hint: "மரத்தில் வளரும்", language: "Tamil", difficulty: "Easy" },
{ word: "சூரியன்", scrambled: "யன்சூரி", hint: "பகல் நேரத்தில் தெரியும்", language: "Tamil", difficulty: "Easy" },

// === Extra Tamil - Medium (4-5 characters) ===
{ word: "ஆசிரியர்", scrambled: "ரயஆசிரி", hint: "பாடம் கற்பவர்", language: "Tamil", difficulty: "Medium" },
{ word: "கிராமம்", scrambled: "மாமகிரி", hint: "நகரம் அல்லாத இடம்", language: "Tamil", difficulty: "Medium" },
{ word: "நகரம்", scrambled: "கரமந", hint: "மக்கள் அதிகம் வாழும் இடம்", language: "Tamil", difficulty: "Medium" },
{ word: "பசுமை", scrambled: "மைசுப", hint: "இயற்கையின் அழகு", language: "Tamil", difficulty: "Medium" },
{ word: "ஆரோக்கியம்", scrambled: "மஆரோக்கிய", hint: "நலம், உடல்நலம்", language: "Tamil", difficulty: "Medium" },
{ word: "கடிகாரம்", scrambled: "ரமகடிகா", hint: "நேரம் காட்டும்", language: "Tamil", difficulty: "Medium" },
{ word: "மருத்துவர்", scrambled: "வருமருத்து", hint: "நோயாளிகளை குணப்படுத்துபவர்", language: "Tamil", difficulty: "Medium" },
{ word: "காலணி", scrambled: "லணிகா", hint: "காலில் அணிவது", language: "Tamil", difficulty: "Medium" },
{ word: "நிலம்", scrambled: "மநில", hint: "நிலப்பரப்பு", language: "Tamil", difficulty: "Medium" },
{ word: "ஆற்றல்", scrambled: "ற்றலஆ", hint: "சக்தி", language: "Tamil", difficulty: "Medium" },

// === Extra Tamil - Hard (6+ characters) ===
{ word: "குடும்பம்", scrambled: "பகும்டம்", hint: "அம்மா, அப்பா, பிள்ளைகள்", language: "Tamil", difficulty: "Hard" },
{ word: "அரசாங்கம்", scrambled: "சமஅரங்கா", hint: "நாட்டை நடத்தும் அமைப்பு", language: "Tamil", difficulty: "Hard" },
{ word: "விஞ்ஞானம்", scrambled: "ஞமவிஞ்ஞா", hint: "Science என்றால்?", language: "Tamil", difficulty: "Hard" },
{ word: "படைப்பாற்றல்", scrambled: "ற்றல்படைப்பா", hint: "Creative power", language: "Tamil", difficulty: "Hard" },
{ word: "பொறியியல்", scrambled: "றியில்பொ", hint: "Engineering என்றால்?", language: "Tamil", difficulty: "Hard" },
{ word: "இயற்கை", scrambled: "கையஇற", hint: "Nature", language: "Tamil", difficulty: "Hard" },
{ word: "சுதந்திரம்", scrambled: "மசுதந்திர", hint: "ஆசிரியர் தினம் / விடுதலை", language: "Tamil", difficulty: "Hard" },
{ word: "கலைஞர்", scrambled: "ஞரகலை", hint: "படைப்பாளர்", language: "Tamil", difficulty: "Hard" },
{ word: "ஆன்மீகம்", scrambled: "மஆன்மீக", hint: "Spirituality", language: "Tamil", difficulty: "Hard" },
{ word: "வளர்ச்சி", scrambled: "ர்ச்சிவள", hint: "Development", language: "Tamil", difficulty: "Hard" },
  
    {
    "word": "cake",
    "scrambled": "ekac",
    "hint": "Sweet dessert baked in oven",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "lamp",
    "scrambled": "ampl",
    "hint": "Provides light at night",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "game",
    "scrambled": "emag",
    "hint": "Fun activity to play",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "hill",
    "scrambled": "llhi",
    "hint": "Small elevated landform",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "nest",
    "scrambled": "tsen",
    "hint": "Bird's home",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "teacher",
    "scrambled": "chearet",
    "hint": "Person who teaches students",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "airport",
    "scrambled": "irparto",
    "hint": "Place for airplanes to take off",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "battery",
    "scrambled": "terybta",
    "hint": "Stores electricity for devices",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "picture",
    "scrambled": "cturepi",
    "hint": "A visual image or photo",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "writing",
    "scrambled": "itgrwin",
    "hint": "The act of forming letters",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "happiness",
    "scrambled": "nesshappi",
    "hint": "State of being happy",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "generation",
    "scrambled": "rationgene",
    "hint": "All people born at same time",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "knowledge",
    "scrambled": "owkledgen",
    "hint": "What you know",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "reflection",
    "scrambled": "ctionrelef",
    "hint": "Image seen in a mirror",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "resolution",
    "scrambled": "olutionres",
    "hint": "Firm decision or solving problem",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "மண்",
    "scrambled": "ண்ம",
    "hint": "நமது நிலம்",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "நீர்",
    "scrambled": "ீரந",
    "hint": "தண்ணீர்",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "மூடு",
    "scrambled": "டுமோ",
    "hint": "மூடும் செயல்பாடு",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "வீழ்ச்சி",
    "scrambled": "்ச்சிவீழ",
    "hint": "தாழ்வு அல்லது பொழிவு",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "மின்னல்",
    "scrambled": "ல்மின்ன",
    "hint": "வெஜ்ஜல் ஒளியுடன் வரும்",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "முயற்சி",
    "scrambled": "ற்சி முய",
    "hint": "செய்யும் முயற்சி",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "அறிவியல்",
    "scrambled": "யியல்அறிவ",
    "hint": "Science",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "அருள்ச்சி",
    "scrambled": "்ச்சி அருள்",
    "hint": "Grace, Blessing",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "மாணவர்",
    "scrambled": "வரமாண",
    "hint": "Student",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "முன்னேற்றம்",
    "scrambled": "ற்றமுன்னே",
    "hint": "Progress, Development",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "பொதுமக்கள்",
    "scrambled": "க்கள்பொது",
    "hint": "Public people",
    "language": "Tamil",
    "difficulty": "Hard"
  },
   {
    "word": "coin",
    "scrambled": "oinc",
    "hint": "Metal currency",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "cake",
    "scrambled": "keca",
    "hint": "Sweet baked dessert",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "leaf",
    "scrambled": "feal",
    "hint": "Part of a plant",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "bell",
    "scrambled": "lleb",
    "hint": "Makes ringing sound",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "fish",
    "scrambled": "hsfi",
    "hint": "Aquatic animal",
    "language": "English",
    "difficulty": "Easy"
  },
  {
    "word": "airport",
    "scrambled": "poritra",
    "hint": "Place for planes",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "library",
    "scrambled": "rryliba",
    "hint": "Place with books",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "gallery",
    "scrambled": "yallerg",
    "hint": "Art display space",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "journey",
    "scrambled": "ejnruoy",
    "hint": "Travel from one place to another",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "balance",
    "scrambled": "eblanca",
    "hint": "Even distribution",
    "language": "English",
    "difficulty": "Medium"
  },
  {
    "word": "extraordinary",
    "scrambled": "rdinaryextrao",
    "hint": "Very unusual",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "philosophy",
    "scrambled": "ophyphiloso",
    "hint": "Study of fundamental nature",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "dictionary",
    "scrambled": "arydictino",
    "hint": "Word meanings collection",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "journalist",
    "scrambled": "nalistjour",
    "hint": "Reports news",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "microphone",
    "scrambled": "phonemicro",
    "hint": "Amplifies sound",
    "language": "English",
    "difficulty": "Hard"
  },
  {
    "word": "மரம்",
    "scrambled": "மரம",
    "hint": "மிகப் பெரிய செடி",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "கல்",
    "scrambled": "லக",
    "hint": "தோல் மிகக் கடினம்",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "நீர்",
    "scrambled": "ரநீ",
    "hint": "தண்ணீர்",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "பால்",
    "scrambled": "லபா",
    "hint": "கன்றுக்குட்டி குடிக்கும்",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "கடல்",
    "scrambled": "லடக",
    "hint": "நீர்கடல்",
    "language": "Tamil",
    "difficulty": "Easy"
  },
  {
    "word": "புத்தகம்",
    "scrambled": "கம்புத்த",
    "hint": "அறிவு தரும் நூல்",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "ஆரோக்கியம்",
    "scrambled": "மஆரோக்கிய",
    "hint": "நலமுள்ள நிலை",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "முன்னேற்றம்",
    "scrambled": "்றமுன்னே",
    "hint": "வளர்ச்சி",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "கடிகாரம்",
    "scrambled": "ரமகடிகா",
    "hint": "நேரம் காட்டும் சாதனம்",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "விமானம்",
    "scrambled": "மவினா",
    "hint": "வானில் பறக்கும் வாகனம்",
    "language": "Tamil",
    "difficulty": "Medium"
  },
  {
    "word": "அறிவியல்",
    "scrambled": "யியல்அறிவ",
    "hint": "அறிவு பகிர்வது",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "மாணவர்",
    "scrambled": "வரமாண",
    "hint": "படிக்கின்றவர்",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "இயற்கை",
    "scrambled": "கையஇற",
    "hint": "நாட்டு இயல்புகள்",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "சமூகம்",
    "scrambled": "கம்சமூ",
    "hint": "மக்கள் குழு",
    "language": "Tamil",
    "difficulty": "Hard"
  },
  {
    "word": "பொறியியல்",
    "scrambled": "றியில்பொ",
    "hint": "தொழில்நுட்பம்",
    "language": "Tamil",
    "difficulty": "Hard"
  }
];
