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
        ]
    },
    Tamil: {
        Easy: [
            { word: 'நாய்', scrambled: 'ய்நா', hint: 'குரைக்கும் விலங்கு', difficulty: 'Easy' },
            { word: 'பூனை', scrambled: 'னைபூ', hint: 'மியாவ் என்று கத்தும்', difficulty: 'Easy' },
            { word: 'மரம்', scrambled: 'ரம்ம', hint: 'கிளைகள் மற்றும் இலைகள் கொண்டது', difficulty: 'Easy' },
            { word: 'பந்து', scrambled: 'ந்துப', hint: 'விளையாடப் பயன்படும் உருண்டை', difficulty: 'Easy' },
            { word: 'மீன்', scrambled: 'ன்மீ', hint: 'தண்ணீரில் நீந்தும்', difficulty: 'Easy' },
        ],
        Medium: [
            { word: 'பள்ளி', scrambled: 'ளிப்ள', hint: 'கல்வி கற்கும் இடம்', difficulty: 'Medium' },
            { word: 'விமானம்', scrambled: 'னம்விமா', hint: 'வானில் பறக்கும் வாகனம்', difficulty: 'Medium' },
            { word: 'கடிகாரம்', scrambled: 'ரம்கடிகா', hint: 'நேரம் காட்டும் கருவி', difficulty: 'Medium' },
            { word: 'சமையல்', scrambled: 'யல்சமை', hint: 'உணவு தயாரிக்கும் கலை', difficulty: 'Medium' },
            { word: 'வானவில்', scrambled: 'வில்வான', hint: 'மழைக்குப் பின் தோன்றும் ஏழு வண்ணம்', difficulty: 'Medium' },
        ],
        Hard: [
            { word: 'கணினி', scrambled: 'னிகணி', hint: 'தகவல்களைச் சேமிக்கும் மின்னணு சாதனம்', difficulty: 'Hard' },
            { word: 'நூலகம்', scrambled: 'கம்நூல', hint: 'புத்தகங்கள் சேமிக்கப்பட்டுள்ள இடம்', difficulty: 'Hard' },
            { word: 'விண்வெளி', scrambled: 'ளிவெண்வி', hint: 'பூமிக்கு வெளியே உள்ள przestrzeń', difficulty: 'Hard' },
            { word: 'புகைப்படம்', scrambled: 'டம்புகைப்ப', hint: 'நினைவுகளைச் சேமிக்கும் படம்', difficulty: 'Hard' },
            { word: 'தொழில்நுட்பம்', scrambled: 'நுட்பம்தொழில்', hint: 'அறிவியல் அறிவின் பயன்பாடு', difficulty: 'Hard' },
        ]
    }
};
