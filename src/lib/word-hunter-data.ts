
export interface WordPuzzle {
    word: string;
    scrambled: string;
    hint: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface WordBank {
    English: {
        Easy: WordPuzzle[];
        Medium: WordPuzzle[];
        Hard: WordPuzzle[];
    };
    Tamil: {
        Easy: WordPuzzle[];
        Medium: WordPuzzle[];
        Hard: WordPuzzle[];
    };
}

export const wordBank: WordBank = {
    English: {
        Easy: [
            { word: 'tree', scrambled: 'eert', hint: 'Has leaves and branches', difficulty: 'Easy' },
            { word: 'duck', scrambled: 'kcud', hint: 'A bird that quacks', difficulty: 'Easy' },
            { word: 'fish', scrambled: 'hsif', hint: 'Swims in water', difficulty: 'Easy' },
            { word: 'boat', scrambled: 'taob', hint: 'Travels on water', difficulty: 'Easy' },
            { word: 'star', scrambled: 'rats', hint: 'Twinkles in the night sky', difficulty: 'Easy' },
            { word: 'moon', scrambled: 'noom', hint: 'Orbits the Earth', difficulty: 'Easy' },
            { word: 'book', scrambled: 'koob', hint: 'Something you read', difficulty: 'Easy' },
            { word: 'fire', scrambled: 'erif', hint: 'It\'s hot and bright', difficulty: 'Easy' },
            { word: 'ball', scrambled: 'llab', hint: 'A round toy', difficulty: 'Easy' },
            { word: 'song', scrambled: 'gnos', hint: 'You sing it', difficulty: 'Easy' },
            { word: 'apple', scrambled: 'elppa', hint: 'A common fruit', difficulty: 'Easy' },
            { word: 'water', scrambled: 'retaw', hint: 'A clear liquid you drink', difficulty: 'Easy' },
            { word: 'house', scrambled: 'esuoh', hint: 'A place where people live', difficulty: 'Easy' },
            { word: 'chair', scrambled: 'riahc', hint: 'A seat for one person', difficulty: 'Easy' },
            { word: 'smile', scrambled: 'elimS', hint: 'A happy facial expression', difficulty: 'Easy' },
            { word: 'bread', scrambled: 'dearb', hint: 'A food made from flour', difficulty: 'Easy' },
            { word: 'green', scrambled: 'neerg', hint: 'The color of grass', difficulty: 'Easy' },
            { word: 'happy', scrambled: 'yppah', hint: 'Feeling or showing pleasure', difficulty: 'Easy' },
            { word: 'sleep', scrambled: 'peels', hint: 'To rest your mind and body', difficulty: 'Easy' },
            { word: 'watch', scrambled: 'hctaw', hint: 'Tells the time, worn on a wrist', difficulty: 'Easy' },
            { word: 'phone', scrambled: 'enohp', hint: 'You use it to call people', difficulty: 'Easy' },
            { word: 'plate', scrambled: 'etalp', hint: 'You eat food off of it', difficulty: 'Easy' },
            { word: 'heart', scrambled: 'traeh', hint: 'It pumps blood through the body', difficulty: 'Easy' },
            { word: 'brain', scrambled: 'niarb', hint: 'The organ used for thinking', difficulty: 'Easy' },
            { word: 'cloud', scrambled: 'duolc', hint: 'White and fluffy in the sky', difficulty: 'Easy' },
            { word: 'music', scrambled: 'cisum', hint: 'Sounds arranged in a pleasant way', difficulty: 'Easy' },
            { word: 'light', scrambled: 'thgil', hint: 'Makes things visible', difficulty: 'Easy' },
            { word: 'earth', scrambled: 'htrae', hint: 'The planet we live on', difficulty: 'Easy' },
            { word: 'grape', scrambled: 'eparg', hint: 'A small, round fruit, often purple', difficulty: 'Easy' },
            { word: 'lemon', scrambled: 'nomel', hint: 'A sour yellow fruit', difficulty: 'Easy' },
        ],
        Medium: [
            { word: 'planet', scrambled: 'tenalp', hint: 'Orbits a star, like Earth', difficulty: 'Medium' },
            { word: 'guitar', scrambled: 'ratigu', hint: 'A musical instrument with strings', difficulty: 'Medium' },
            { word: 'flower', scrambled: 'rewolf', hint: 'A colorful part of a plant', difficulty: 'Medium' },
            { word: 'orange', scrambled: 'egnaro', hint: 'A citrus fruit and a color', difficulty: 'Medium' },
            { word: 'summer', scrambled: 'remmus', hint: 'The warmest season of the year', difficulty: 'Medium' },
            { word: 'bottle', scrambled: 'elttob', hint: 'A container for liquids', difficulty: 'Medium' },
            { word: 'camera', scrambled: 'aremac', hint: 'Used to take photographs', difficulty: 'Medium' },
            { word: 'window', scrambled: 'wodniw', hint: 'You can look through it in a wall', difficulty: 'Medium' },
            { word: 'friend', scrambled: 'dneirf', hint: 'A person you like and trust', difficulty: 'Medium' },
            { word: 'market', scrambled: 'tekram', hint: 'A place to buy food and goods', difficulty: 'Medium' },
            { word: 'purple', scrambled: 'elprut', hint: 'A color mixed from red and blue', difficulty: 'Medium' },
            { word: 'yellow', scrambled: 'wolley', hint: 'The color of the sun', difficulty: 'Medium' },
            { word: 'country', scrambled: 'yrtnuoc', hint: 'A nation with its own government', difficulty: 'Medium' },
            { word: 'kitchen', scrambled: 'nehctik', hint: 'A room for preparing and cooking food', difficulty: 'Medium' },
            { word: 'student', scrambled: 'tneduts', hint: 'A person who is studying at a school', difficulty: 'Medium' },
            { word: 'teacher', scrambled: 'rehcaet', hint: 'A person who teaches in a school', difficulty: 'Medium' },
            { word: 'morning', scrambled: 'gninrom', hint: 'The early part of the day', difficulty: 'Medium' },
            { word: 'evening', scrambled: 'gnineve', hint: 'The later part of the day', difficulty: 'Medium' },
            { word: 'journey', scrambled: 'yenruoj', hint: 'The act of traveling from one place to another', difficulty: 'Medium' },
            { word: 'silence', scrambled: 'ecnelis', hint: 'Complete absence of sound', difficulty: 'Medium' },
            { word: 'weather', scrambled: 'rehtaew', hint: 'Atmospheric conditions like sun or rain', difficulty: 'Medium' },
            { word: 'breathe', scrambled: 'ehtaerb', hint: 'To take air into the lungs', difficulty: 'Medium' },
            { word: 'bicycle', scrambled: 'elcycib', hint: 'A vehicle with two wheels', difficulty: 'Medium' },
            { word: 'diamond', scrambled: 'dnomaid', hint: 'A precious, hard gemstone', difficulty: 'Medium' },
            { word: 'explore', scrambled: 'erolpxe', hint: 'To travel through a place to learn about it', difficulty: 'Medium' },
        ],
        Hard: [
            { word: 'adventure', scrambled: 'nerutnevda', hint: 'An exciting or unusual experience', difficulty: 'Hard' },
            { word: 'technology', scrambled: 'ygolonhcet', hint: 'The application of scientific knowledge', difficulty: 'Hard' },
            { word: 'language', scrambled: 'egaugnal', hint: 'A system of communication', difficulty: 'Hard' },
            { word: 'knowledge', scrambled: 'egdelwonk', hint: 'Facts, information, and skills acquired', difficulty: 'Hard' },
            { word: 'celebrate', scrambled: 'etarbelec', hint: 'To acknowledge a happy day or event', difficulty: 'Hard' },
            { word: 'beautiful', scrambled: 'lufituaeb', hint: 'Pleasing the senses or mind aesthetically', difficulty: 'Hard' },
            { word: 'universe', scrambled: 'esrevinu', hint: 'All existing matter and space', difficulty: 'Hard' },
            { word: 'xylophone', scrambled: 'enohpolyx', hint: 'A musical instrument with wooden bars', difficulty: 'Hard' },
            { word: 'yesterday', scrambled: 'yadretsey', hint: 'The day before today', difficulty: 'Hard' },
            { word: 'information', scrambled: 'noitamrofni', hint: 'Facts provided or learned about something', difficulty: 'Hard' },
            { word: 'communication', scrambled: 'noitacinummoc', hint: 'The imparting or exchanging of information', difficulty: 'Hard' },
            { word: 'environment', scrambled: 'tnemnorivne', hint: 'The surroundings or conditions in which a person, animal, or plant lives', difficulty: 'Hard' },
            { word: 'government', scrambled: 'tnemnrevog', hint: 'The group of people with the authority to govern a country or state', difficulty: 'Hard' },
            { word: 'imagination', scrambled: 'noitanigami', hint: 'The faculty of forming new ideas or images not present to the senses', difficulty: 'Hard' },
            { word: 'intelligence', scrambled: 'ecnegilletni', hint: 'The ability to acquire and apply knowledge and skills', difficulty: 'Hard' },
            { word: 'opportunity', scrambled: 'ytinutroppo', hint: 'A set of circumstances that makes it possible to do something', difficulty: 'Hard' },
            { word: 'philosophy', scrambled: 'yhposolihp', hint: 'The study of the fundamental nature of knowledge, reality, and existence', difficulty: 'Hard' },
            { word: 'psychology', scrambled: 'ygolohcysp', hint: 'The scientific study of the human mind and its functions', difficulty: 'Hard' },
            { word: 'responsibility', scrambled: 'ytilibisnopser', hint: 'The state or fact of having a duty to deal with something', difficulty: 'Hard' },
            { word: 'understanding', scrambled: 'gnidnatsrednu', hint: 'The ability to comprehend something', difficulty: 'Hard' },
            { word: 'vocabulary', scrambled: 'yrabulacov', hint: 'The body of words used in a particular language', difficulty: 'Hard' },
            { word: 'architecture', scrambled: 'erutcetihcra', hint: 'The art or practice of designing and constructing buildings', difficulty: 'Hard' },
            { word: 'catastrophe', scrambled: 'ehportsatac', hint: 'An event causing great and sudden damage or suffering', difficulty: 'Hard' },
            { word: 'development', scrambled: 'tnempoleved', hint: 'The process of growing or causing something to grow or become more advanced', difficulty: 'Hard' },
            { word: 'extraordinary', scrambled: 'yranidroartxe', hint: 'Very unusual or remarkable', difficulty: 'Hard' },
        ]
    },
    Tamil: {
        Easy: [
            { word: 'நாய்', scrambled: 'ய்நா', hint: 'குரைக்கும் விலங்கு', difficulty: 'Easy' },
            { word: 'பூனை', scrambled: 'னைபூ', hint: 'மியாவ் என்று கத்தும்', difficulty: 'Easy' },
            { word: 'மரம்', scrambled: 'ரம்ம', hint: 'கிளைகள் மற்றும் இலைகள் கொண்டது', difficulty: 'Easy' },
            { word: 'பந்து', scrambled: 'ந்துப', hint: 'விளையாடப் பயன்படும் உருண்டை', difficulty: 'Easy' },
            { word: 'மீன்', scrambled: 'ன்மீ', hint: 'தண்ணீரில் நீந்தும்', difficulty: 'Easy' },
            { word: 'கண்', scrambled: 'ண்க', hint: 'பார்க்க உதவும் உறுப்பு', difficulty: 'Easy' },
            { word: 'கை', scrambled: 'இக', hint: 'பொருட்களைப் பிடிக்க உதவும்', difficulty: 'Easy' },
            { word: 'நிலா', scrambled: 'லாநி', hint: 'இரவில் தெரியும்', difficulty: 'Easy' },
            { word: 'வீடு', scrambled: 'டுவீ', hint: 'வாழும் இடம்', difficulty: 'Easy' },
            { word: 'பாடல்', scrambled: 'ல்படா', hint: 'இசையுடன் பாடுவது', difficulty: 'Easy' },
        ],
        Medium: [
            { word: 'பள்ளி', scrambled: 'ளிப்ள', hint: 'கல்வி கற்கும் இடம்', difficulty: 'Medium' },
            { word: 'விமானம்', scrambled: 'னம்விமா', hint: 'வானில் பறக்கும் வாகனம்', difficulty: 'Medium' },
            { word: 'கடிகாரம்', scrambled: 'ரம்கடிகா', hint: 'நேரம் காட்டும் கருவி', difficulty: 'Medium' },
            { word: 'சமையல்', scrambled: 'யல்சமை', hint: 'உணவு தயாரிக்கும் கலை', difficulty: 'Medium' },
            { word: 'வானவில்', scrambled: 'வில்வான', hint: 'மழைக்குப் பின் தோன்றும் ஏழு வண்ணம்', difficulty: 'Medium' },
            { word: 'கவிதை', scrambled: 'தைகவி', hint: 'உணர்ச்சிகளை வெளிப்படுத்தும் எழுத்து', difficulty: 'Medium' },
            { word: 'நண்பன்', scrambled: 'பண்நன்', hint: 'உயிர் தோழன்', difficulty: 'Medium' },
            { word: 'சினிமா', scrambled: 'மாசிநி', hint: 'திரைப்படம்', difficulty: 'Medium' },
            { word: 'மருத்துவர்', scrambled: 'வர்மருத்து', hint: 'நோய் குணப்படுத்துபவர்', difficulty: 'Medium' },
            { word: 'ஆசிரியர்', scrambled: 'யிரிஆசர்', hint: 'பாடம் நடத்துபவர்', difficulty: 'Medium' },
        ],
        Hard: [
            { word: 'கணினி', scrambled: 'னிகணி', hint: 'தகவல்களைச் சேமிக்கும் மின்னணு சாதனம்', difficulty: 'Hard' },
            { word: 'நூலகம்', scrambled: 'கம்நூல', hint: 'புத்தகங்கள் சேமிக்கப்பட்டுள்ள இடம்', difficulty: 'Hard' },
            { word: 'விண்வெளி', scrambled: 'ளிவெண்வி', hint: 'பூமிக்கு வெளியே உள்ள இடம்', difficulty: 'Hard' },
            { word: 'புகைப்படம்', scrambled: 'டம்புகைப்ப', hint: 'நினைவுகளைச் சேமிக்கும் படம்', difficulty: 'Hard' },
            { word: 'தொழில்நுட்பம்', scrambled: 'நுட்பம்தொழில்', hint: 'அறிவியல் அறிவின் பயன்பாடு', difficulty: 'Hard' },
            { word: 'சுற்றுச்சூழல்', scrambled: 'ழல்சுற்றுச்சூழ', hint: 'நம்மைச் சுற்றியுள்ள இயற்கை', difficulty: 'Hard' },
            { word: 'அரசாங்கம்', scrambled: 'கம்அரசாங்', hint: 'நாட்டை ஆளும் அமைப்பு', difficulty: 'Hard' },
            { word: 'கற்பனை', scrambled: 'னைகற்ப', hint: 'புதிய எண்ணங்களை உருவாக்கும் திறன்', difficulty: 'Hard' },
            { word: 'அறிவு', scrambled: 'வுஅறி', hint: 'கற்றுக்கொண்ட உண்மைகள்', difficulty: 'Hard' },
            { word: 'வாய்ப்பு', scrambled: 'ப்புவாய்', hint: 'சாதகமான சூழ்நிலை', difficulty: 'Hard' },
        ]
    }
};

    