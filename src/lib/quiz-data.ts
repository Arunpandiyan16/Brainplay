
export interface QuizQuestion {
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  category: 'General Knowledge' | 'Movies' | 'Cricket' | 'Tech' | 'Tamil Nadu GK';
  country: 'India' | 'Global';
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const quizQuestions: QuizQuestion[] = [
  // General Knowledge - Global - Easy
  {
    question: "What is the capital of Japan?",
    choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answerIndex: 2,
    explanation: "Tokyo is the capital and largest city of Japan.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "How many colors are in a rainbow?",
    choices: ["5", "6", "7", "8"],
    answerIndex: 2,
    explanation: "There are seven colors in a rainbow: red, orange, yellow, green, blue, indigo, and violet.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "What is the largest animal on Earth?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answerIndex: 1,
    explanation: "The Blue Whale is the largest animal on Earth, both in terms of length and weight.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },

  // General Knowledge - India - Easy
  {
    question: "Which Indian festival is known as the festival of lights?",
    choices: ["Holi", "Diwali", "Eid", "Christmas"],
    answerIndex: 1,
    explanation: "Diwali, or Deepavali, is the Hindu festival of lights, which symbolizes the spiritual victory of light over darkness.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "What is India's national flower?",
    choices: ["Rose", "Lotus", "Jasmine", "Marigold"],
    answerIndex: 1,
    explanation: "The Lotus is the national flower of India and holds a sacred status in the country's culture and mythology.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Which city in India is famous for its tea plantations?",
    choices: ["Shimla", "Darjeeling", "Nainital", "Munnar"],
    answerIndex: 1,
    explanation: "Darjeeling is world-renowned for its tea plantations and the unique flavor of Darjeeling tea.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },

  // General Knowledge - Global - Medium
  {
    question: "What is the largest desert in the world?",
    choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Polar Desert"],
    answerIndex: 3,
    explanation: "By the measure of low precipitation, the Antarctic Polar Desert is the largest desert in the world.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "Who developed the theory of relativity?",
    choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    answerIndex: 1,
    explanation: "Albert Einstein, a theoretical physicist, developed the theory of relativity, one of the two pillars of modern physics.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Medium"
  },

  // Movies - Global - Easy
  {
    question: "Which movie features a character named 'Simba'?",
    choices: ["The Jungle Book", "Finding Nemo", "The Lion King", "Madagascar"],
    answerIndex: 2,
    explanation: "'The Lion King' tells the story of Simba, a young lion who is to succeed his father, Mufasa, as King of the Pride Lands.",
    category: "Movies",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Who plays the character of 'Iron Man' in the Marvel Cinematic Universe?",
    choices: ["Chris Evans", "Chris Hemsworth", "Mark Ruffalo", "Robert Downey Jr."],
    answerIndex: 3,
    explanation: "Robert Downey Jr. portrays Tony Stark / Iron Man in the Marvel Cinematic Universe.",
    category: "Movies",
    country: "Global",
    difficulty: "Easy"
  },

  // Movies - India - Easy
  {
    question: "Which film starring Shah Rukh Khan and Kajol features the famous train scene?",
    choices: ["Kuch Kuch Hota Hai", "Dilwale Dulhania Le Jayenge", "Kabhi Khushi Kabhie Gham", "My Name is Khan"],
    answerIndex: 1,
    explanation: "The iconic train scene is from 'Dilwale Dulhania Le Jayenge' (DDLJ), a landmark in Bollywood cinema.",
    category: "Movies",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "What is the name of the superhero played by Hrithik Roshan in a popular Indian film series?",
    choices: ["G.One", "Shaktimaan", "Krrish", "Ra.One"],
    answerIndex: 2,
    explanation: "Hrithik Roshan plays the superhero 'Krrish' in the film series of the same name.",
    category: "Movies",
    country: "India",
    difficulty: "Easy"
  },

  // Movies - Global - Medium
  {
    question: "What is the name of the fictional city where Batman operates?",
    choices: ["Metropolis", "Star City", "Gotham City", "Central City"],
    answerIndex: 2,
    explanation: "Batman's base of operations is the dark and gritty fictional metropolis, Gotham City.",
    category: "Movies",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "Which 1972 film is a crime drama directed by Francis Ford Coppola?",
    choices: ["Goodfellas", "The French Connection", "A Clockwork Orange", "The Godfather"],
    answerIndex: 3,
    explanation: "'The Godfather', directed by Francis Ford Coppola, is widely regarded as one of the greatest films of all time.",
    category: "Movies",
    country: "Global",
    difficulty: "Medium"
  },

  // Movies - India - Medium
  {
    question: "In the film 'Baahubali', what is the name of the lead character's powerful uncle?",
    choices: ["Bhallaladeva", "Kattappa", "Bijjaladeva", "Kalakeya"],
    answerIndex: 0,
    explanation: "Bhallaladeva, played by Rana Daggubati, is the powerful and antagonistic cousin/uncle figure to Baahubali.",
    category: "Movies",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "Which actress, a former Miss World, is a major international star from India?",
    choices: ["Aishwarya Rai Bachchan", "Sushmita Sen", "Priyanka Chopra Jonas", "Deepika Padukone"],
    answerIndex: 2,
    explanation: "Priyanka Chopra Jonas, who won Miss World 2000, has achieved significant success in both Bollywood and Hollywood.",
    category: "Movies",
    country: "India",
    difficulty: "Medium"
  },

  // Cricket - Global - Easy
  {
    question: "What is the maximum number of players in a cricket team on the field at one time?",
    choices: ["9", "10", "11", "12"],
    answerIndex: 2,
    explanation: "A cricket team consists of eleven players on the field during a match.",
    category: "Cricket",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "A century in cricket refers to a score of how many runs?",
    choices: ["50", "100", "150", "200"],
    answerIndex: 1,
    explanation: "A century is a score of 100 or more runs by a single batsman in an innings.",
    category: "Cricket",
    country: "Global",
    difficulty: "Easy"
  },

  // Cricket - India - Easy
  {
    question: "Which Indian city has the Wankhede Stadium?",
    choices: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
    answerIndex: 3,
    explanation: "Wankhede Stadium is an international cricket stadium in Mumbai, India.",
    category: "Cricket",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Who captained India to victory in the 2011 ICC Cricket World Cup?",
    choices: ["Sachin Tendulkar", "Virender Sehwag", "MS Dhoni", "Yuvraj Singh"],
    answerIndex: 2,
    explanation: "Mahendra Singh Dhoni (MS Dhoni) was the captain of the Indian team that won the 2011 World Cup.",
    category: "Cricket",
    country: "India",
    difficulty: "Easy"
  },

  // Cricket - Global - Medium
  {
    question: "Which bowler has taken the most wickets in Test cricket history?",
    choices: ["Shane Warne", "Anil Kumble", "Muttiah Muralitharan", "James Anderson"],
    answerIndex: 2,
    explanation: "Muttiah Muralitharan of Sri Lanka holds the record for the most wickets in Test cricket, with 800 wickets.",
    category: "Cricket",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "What is the Duckworth-Lewis-Stern (DLS) method used for in cricket?",
    choices: ["Deciding the man of the match", "Calculating run rates in rain-affected matches", "Choosing the batting order", "Measuring pitch hardness"],
    answerIndex: 1,
    explanation: "The DLS method is a mathematical formulation designed to calculate the target score for the team batting second in a limited-overs match interrupted by weather or other circumstances.",
    category: "Cricket",
    country: "Global",
    difficulty: "Medium"
  },

  // Cricket - India - Medium
  {
    question: "Who is the first Indian batsman to score a triple century in Test cricket?",
    choices: ["Sunil Gavaskar", "Sachin Tendulkar", "Virender Sehwag", "Rahul Dravid"],
    answerIndex: 2,
    explanation: "Virender Sehwag was the first Indian to score a triple century (309) in Test cricket, against Pakistan in 2004.",
    category: "Cricket",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "What is Rahul Dravid's famous nickname in the cricket world?",
    choices: ["The God of Cricket", "The Wall", "The Turbanator", "Captain Cool"],
    answerIndex: 1,
    explanation: "Rahul Dravid is known as 'The Wall' for his incredible defensive technique and ability to bat for long periods.",
    category: "Cricket",
    country: "India",
    difficulty: "Medium"
  },

  // Tech - Global - Easy
  {
    question: "What do you call a program that can replicate itself and spread to other computers?",
    choices: ["A bug", "A virus", "A cookie", "A cache"],
    answerIndex: 1,
    explanation: "A computer virus is a type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code.",
    category: "Tech",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Which social media platform is known for its 280-character limit messages?",
    choices: ["Facebook", "Instagram", "LinkedIn", "X (formerly Twitter)"],
    answerIndex: 3,
    explanation: "X (formerly known as Twitter) is famous for its short-form posts, originally 140 characters and later expanded to 280.",
    category: "Tech",
    country: "Global",
    difficulty: "Easy"
  },

  // Tech - India - Easy
  {
    question: "Paytm is a popular Indian company primarily in which sector?",
    choices: ["E-commerce", "Digital Payments", "Social Media", "Ride-sharing"],
    answerIndex: 1,
    explanation: "Paytm is a leading Indian digital payments and financial services company, based in Noida.",
    category: "Tech",
    country: "India",
    difficulty: "Easy"
  },

  // Tech - Global - Medium
  {
    question: "What does 'Wi-Fi' stand for?",
    choices: ["Wireless Fidelity", "Wireless Firewall", "Wide Fidelity", "It's not an acronym"],
    answerIndex: 3,
    explanation: "Despite common belief, 'Wi-Fi' is a trademarked name and does not stand for 'Wireless Fidelity'. It was a marketing name created by a branding firm.",
    category: "Tech",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "The first successful personal computer was the...",
    choices: ["IBM PC", "Commodore PET", "Apple I", "Kenbak-1"],
    answerIndex: 3,
    explanation: "The Kenbak-1, released in 1971, is considered by the Computer History Museum to be the world's first personal computer.",
    category: "Tech",
    country: "Global",
    difficulty: "Medium"
  },

  // Tech - India - Medium
  {
    question: "What is Aadhaar in the context of India?",
    choices: ["A tax identification number", "A unique 12-digit identity number", "A driver's license", "A mobile payment app"],
    answerIndex: 1,
    explanation: "Aadhaar is a 12-digit unique identity number issued by the UIDAI to all residents of India.",
    category: "Tech",
    country: "India",
    difficulty: "Medium"
  },

  // Tamil Nadu GK - Easy
  {
    question: "Marina Beach, one of the longest urban beaches in the world, is in which city?",
    choices: ["Kanyakumari", "Rameswaram", "Puducherry", "Chennai"],
    answerIndex: 3,
    explanation: "Marina Beach is a natural urban beach in Chennai, Tamil Nadu, along the Bay of Bengal.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Easy"
  },

  // Tamil Nadu GK - Medium
  {
    question: "Which of these is a famous hill station in Tamil Nadu?",
    choices: ["Shimla", "Darjeeling", "Ooty", "Munnar"],
    answerIndex: 2,
    explanation: "Ooty, officially known as Udhagamandalam, is a popular hill station located in the Nilgiri Hills.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "Who is the famous Tamil poet and philosopher who wrote the Tirukkuṟaḷ?",
    choices: ["Kambar", "Thiruvalluvar", "Avvaiyar", "Bharathiyar"],
    answerIndex: 1,
    explanation: "Thiruvalluvar is the celebrated author of the Tirukkuṟaḷ, a classic Tamil text on ethics and morality.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Medium"
  },

  // General Knowledge - Global - Hard
  {
    question: "Which two countries are separated by the Bering Strait?",
    choices: ["USA and Canada", "Russia and China", "USA and Russia", "Japan and Russia"],
    answerIndex: 2,
    explanation: "The Bering Strait is a strait connecting the Pacific and Arctic oceans between Russia and the United States (Alaska).",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Hard"
  },
  {
    question: "The ancient city of Rome was built on how many hills?",
    choices: ["Five", "Seven", "Nine", "Ten"],
    answerIndex: 1,
    explanation: "The ancient city of Rome was famously built on seven hills, which are central to Roman mythology and history.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Hard"
  },

  // Movies - Global - Hard
  {
    question: "In the film '2001: A Space Odyssey', what is the name of the rogue AI?",
    choices: ["Skynet", "GLaDOS", "HAL 9000", "VIKI"],
    answerIndex: 2,
    explanation: "HAL 9000 (Heuristically programmed ALgorithmic computer) is the sentient AI that controls the systems of the Discovery One spacecraft.",
    category: "Movies",
    country: "Global",
    difficulty: "Hard"
  },
  {
    question: "Which director is known for the use of the 'oner' or long continuous take in films like 'Birdman' and 'The Revenant'?",
    choices: ["Wes Anderson", "Denis Villeneuve", "Alejandro G. Iñárritu", "Christopher Nolan"],
    answerIndex: 2,
    explanation: "Alejandro G. Iñárritu is acclaimed for his use of long, seamless takes to create immersive and visceral cinematic experiences.",
    category: "Movies",
    country: "Global",
    difficulty: "Hard"
  },

  // Movies - India - Hard
  {
    question: "Which film by Mira Nair won the Golden Lion at the Venice Film Festival?",
    choices: ["Salaam Bombay!", "The Namesake", "Monsoon Wedding", "Queen of Katwe"],
    answerIndex: 2,
    explanation: "'Monsoon Wedding' (2001) won the Golden Lion, the highest prize at the Venice Film Festival, making Mira Nair one of the few women to have received the honor.",
    category: "Movies",
    country: "India",
    difficulty: "Hard"
  },

  // Cricket - Global - Hard
  {
    question: "What is the term for a bowler taking three wickets on three consecutive deliveries?",
    choices: ["A hat-trick", "A trifecta", "A maiden", "A clean sweep"],
    answerIndex: 0,
    explanation: "A hat-trick occurs in cricket when a bowler dismisses three batsmen with consecutive deliveries.",
    category: "Cricket",
    country: "Global",
    difficulty: "Hard"
  },

  // Cricket - India - Hard
  {
    question: "Which Indian bowler is the highest wicket-taker for India in Test cricket?",
    choices: ["Kapil Dev", "Harbhajan Singh", "Ravichandran Ashwin", "Anil Kumble"],
    answerIndex: 3,
    explanation: "Anil Kumble is India's leading wicket-taker in Test cricket, with 619 wickets in his career.",
    category: "Cricket",
    country: "India",
    difficulty: "Hard"
  },

  // Tech - Global - Hard
  {
    question: "What was the name of the first-ever web browser?",
    choices: ["Netscape Navigator", "Internet Explorer", "Mosaic", "WorldWideWeb"],
    answerIndex: 3,
    explanation: "The first web browser, named WorldWideWeb (later renamed Nexus), was created by Tim Berners-Lee in 1990.",
    category: "Tech",
    country: "Global",
    difficulty: "Hard"
  },

  // Tech - India - Hard
  {
    question: "Which Indian-born CEO is the current head of Google's parent company, Alphabet?",
    choices: ["Satya Nadella", "Sundar Pichai", "Arvind Krishna", "Shantanu Narayen"],
    answerIndex: 1,
    explanation: "Sundar Pichai is the Chief Executive Officer of Alphabet Inc. and its subsidiary Google.",
    category: "Tech",
    country: "India",
    difficulty: "Hard"
  },
  
  // Tamil Nadu GK - Hard
  {
    question: "The Brihadeeswarar Temple, a UNESCO World Heritage site, was built by which Chola king?",
    choices: ["Rajendra Chola I", "Karikala Chola", "Rajaraja Chola I", "Vijayalaya Chola"],
    answerIndex: 2,
    explanation: "The Brihadeeswarar Temple (or Peruvudaiyar Kovil) in Thanjavur was built by the great Chola emperor Rajaraja I in the 11th century CE.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Hard"
  },
  {
    question: "What is the southernmost tip of mainland India, located in Tamil Nadu?",
    choices: ["Rameswaram", "Kanyakumari", "Dhanushkodi", "Thoothukudi"],
    answerIndex: 1,
    explanation: "Kanyakumari (Cape Comorin) is the southernmost town in mainland India, located in the state of Tamil Nadu.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Hard"
  }
];


    