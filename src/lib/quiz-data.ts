
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
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    answerIndex: 2,
    explanation: "Paris is the capital and most populous city of France.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answerIndex: 1,
    explanation: "Mars is often referred to as the 'Red Planet' because the iron oxide prevalent on its surface gives it a reddish appearance.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
    {
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answerIndex: 3,
    explanation: "The Pacific Ocean is the largest and deepest of the world's five oceans.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    answerIndex: 2,
    explanation: "Nitrogen makes up about 78% of the Earth's atmosphere.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answerIndex: 2,
    explanation: "The Mona Lisa is a world-famous portrait painted by the Italian artist Leonardo da Vinci.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "What is the chemical symbol for gold?",
    choices: ["Ag", "Au", "Gd", "Go"],
    answerIndex: 1,
    explanation: "The chemical symbol for gold is Au, from the Latin word 'aurum'.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Easy"
  },

  // General Knowledge - India - Easy
  {
    question: "What is the capital of India?",
    choices: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
    answerIndex: 3,
    explanation: "New Delhi is the capital of India and an administrative district of NCT Delhi.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    choices: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Subhas Chandra Bose"],
    answerIndex: 2,
    explanation: "Mahatma Gandhi is revered in India as the 'Father of the Nation'.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Which river is considered the holiest in India?",
    choices: ["Yamuna", "Ganges", "Brahmaputra", "Godavari"],
    answerIndex: 1,
    explanation: "The Ganges (Ganga) is the most sacred river to Hindus and is a lifeline to millions of Indians who live along its course.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },
   {
    question: "What is the national animal of India?",
    choices: ["Lion", "Tiger", "Elephant", "Leopard"],
    answerIndex: 1,
    explanation: "The Bengal tiger is the national animal of India.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "The famous 'Taj Mahal' is located in which Indian city?",
    choices: ["Delhi", "Jaipur", "Mumbai", "Agra"],
    answerIndex: 3,
    explanation: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Easy"
  },

  // General Knowledge - Global - Medium
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
    answerIndex: 0,
    explanation: "'To Kill a Mockingbird' was written by Harper Lee and published in 1960.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "In what year did the Titanic sink?",
    choices: ["1905", "1912", "1918", "1923"],
    answerIndex: 1,
    explanation: "The RMS Titanic sank in the early morning hours of 15 April 1912, in the North Atlantic Ocean.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Monaco", "Nauru", "San Marino", "Vatican City"],
    answerIndex: 3,
    explanation: "Vatican City is the smallest independent state in the world, both in terms of area and population.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "Who composed the 'Four Seasons'?",
    choices: ["Mozart", "Bach", "Beethoven", "Vivaldi"],
    answerIndex: 3,
    explanation: "The 'Four Seasons' is a set of four violin concertos composed by the Italian composer Antonio Vivaldi.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Medium"
  },
  
  // Movies - Global - Easy
  {
    question: "Who directed the movie 'Jurassic Park'?",
    choices: ["James Cameron", "Steven Spielberg", "George Lucas", "Martin Scorsese"],
    answerIndex: 1,
    explanation: "Steven Spielberg directed the 1993 blockbuster 'Jurassic Park'.",
    category: "Movies",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Which actor played the character of Jack Dawson in 'Titanic'?",
    choices: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"],
    answerIndex: 2,
    explanation: "Leonardo DiCaprio famously portrayed Jack Dawson in James Cameron's 1997 film 'Titanic'.",
    category: "Movies",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Which film series is based on the books by J.K. Rowling?",
    choices: ["The Lord of the Rings", "The Chronicles of Narnia", "Harry Potter", "The Hunger Games"],
    answerIndex: 2,
    explanation: "The 'Harry Potter' film series is based on the seven fantasy novels written by British author J. K. Rowling.",
    category: "Movies",
    country: "Global",
    difficulty: "Easy"
  },

  // Movies - India - Easy
  {
    question: "Who directed the iconic Bollywood film 'Sholay'?",
    choices: ["Yash Chopra", "Raj Kapoor", "Ramesh Sippy", "Satyajit Ray"],
    answerIndex: 2,
    explanation: "'Sholay' (1975), one of the most famous Indian films, was directed by Ramesh Sippy.",
    category: "Movies",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Who is fondly known as the 'King Khan' of Bollywood?",
    choices: ["Amitabh Bachchan", "Salman Khan", "Aamir Khan", "Shah Rukh Khan"],
    answerIndex: 3,
    explanation: "Shah Rukh Khan is widely referred to as 'King Khan' or 'SRK' by his fans and the media.",
    category: "Movies",
    country: "India",
    difficulty: "Easy"
  },

  // Movies - Global - Medium
  {
    question: "Which movie won the first-ever Oscar for Best Picture?",
    choices: ["The Artist", "Sunrise", "Wings", "Metropolis"],
    answerIndex: 2,
    explanation: "'Wings', a silent film about World War I fighter pilots, won the first Academy Award for Best Picture in 1929.",
    category: "Movies",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "In 'The Matrix', what is the real name of the main character, Neo?",
    choices: ["Thomas Anderson", "John Wick", "Ted Logan", "Kevin Lomax"],
    answerIndex: 0,
    explanation: "Neo's name in the 'real world' before he was freed from the Matrix was Thomas A. Anderson.",
    category: "Movies",
    country: "Global",
    difficulty: "Medium"
  },

  // Movies - India - Medium
  {
    question: "Which Indian film was the first to be nominated for an Oscar in the Best Foreign Language Film category?",
    choices: ["Lagaan", "Salaam Bombay!", "Mother India", "Guide"],
    answerIndex: 2,
    explanation: "Mehboob Khan's 'Mother India' (1957) was India's first submission for the Academy Award for Best Foreign Language Film.",
    category: "Movies",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "In the movie '3 Idiots', what is the real name of the character 'Rancho'?",
    choices: ["Ranchhoddas Chanchad", "Phunsukh Wangdu", "Chatur Ramalingam", "Raju Rastogi"],
    answerIndex: 1,
    explanation: "While he used the name Ranchhoddas, his actual name was revealed to be Phunsukh Wangdu, a famous scientist.",
    category: "Movies",
    country: "India",
    difficulty: "Medium"
  },
  
  // Cricket - Global - Easy
  {
    question: "How many balls are there in a standard over in cricket?",
    choices: ["4", "5", "6", "8"],
    answerIndex: 2,
    explanation: "A standard over in cricket consists of six legal deliveries bowled by a single bowler.",
    category: "Cricket",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "What does LBW stand for in cricket?",
    choices: ["Leg Before Wicket", "Long Ball Wide", "Leg Bye Warning", "Light Bat Weight"],
    answerIndex: 0,
    explanation: "LBW stands for Leg Before Wicket, which is a common way for a batsman to be dismissed.",
    category: "Cricket",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "The 20-over format of cricket is also known as?",
    choices: ["Test", "One Day International", "Twenty20", "The Hundred"],
    answerIndex: 2,
    explanation: "Twenty20, often abbreviated as T20, is a shortened format of cricket where each team plays a single innings of 20 overs.",
    category: "Cricket",
    country: "Global",
    difficulty: "Easy"
  },

  // Cricket - India - Easy
  {
    question: "What is the name of the premier domestic T20 cricket league in India?",
    choices: ["Ranji Trophy", "Indian Premier League (IPL)", "Duleep Trophy", "Syed Mushtaq Ali Trophy"],
    answerIndex: 1,
    explanation: "The Indian Premier League (IPL) is the most-attended cricket league in the world and a premier T20 competition.",
    category: "Cricket",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Which Indian city is home to the iconic Eden Gardens cricket stadium?",
    choices: ["Mumbai", "Chennai", "Kolkata", "Delhi"],
    answerIndex: 2,
    explanation: "Eden Gardens, located in Kolkata, is the oldest and second-largest cricket stadium in India.",
    category: "Cricket",
    country: "India",
    difficulty: "Easy"
  },

  // Cricket - Global - Medium
  {
    question: "Which country won the first-ever Cricket World Cup in 1975?",
    choices: ["Australia", "England", "West Indies", "India"],
    answerIndex: 2,
    explanation: "The West Indies, led by Clive Lloyd, won the inaugural Cricket World Cup by defeating Australia in the final.",
    category: "Cricket",
    country: "Global",
    difficulty: "Medium"
  },
  {
    question: "The term 'Ashes' is used to describe a Test cricket series played between which two countries?",
    choices: ["India and Pakistan", "Australia and England", "South Africa and New Zealand", "West Indies and India"],
    answerIndex: 1,
    explanation: "The Ashes is a historic Test cricket series played between England and Australia.",
    category: "Cricket",
    country: "Global",
    difficulty: "Medium"
  },

  // Cricket - India - Medium
  {
    question: "Who was the captain of the Indian cricket team that won the 1983 World Cup?",
    choices: ["Sunil Gavaskar", "Kapil Dev", "Ravi Shastri", "Mohinder Amarnath"],
    answerIndex: 1,
    explanation: "Kapil Dev famously captained the Indian team to its first-ever World Cup victory in 1983.",
    category: "Cricket",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "Which Indian cricketer is known as the 'God of Cricket'?",
    choices: ["Virat Kohli", "Kapil Dev", "MS Dhoni", "Sachin Tendulkar"],
    answerIndex: 3,
    explanation: "Sachin Tendulkar is widely regarded as one of the greatest batsmen of all time and is often called the 'God of Cricket'.",
    category: "Cricket",
    country: "India",
    difficulty: "Medium"
  },

  // Tech - Global - Easy
  {
    question: "What does 'CPU' stand for?",
    choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Panel Unit"],
    answerIndex: 0,
    explanation: "CPU stands for Central Processing Unit, the primary component of a computer that executes instructions.",
    category: "Tech",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "Who is the co-founder of Microsoft Corporation?",
    choices: ["Steve Jobs", "Larry Page", "Bill Gates", "Mark Zuckerberg"],
    answerIndex: 2,
    explanation: "Bill Gates co-founded Microsoft with Paul Allen in 1975.",
    category: "Tech",
    country: "Global",
    difficulty: "Easy"
  },
  {
    question: "What does the 'G' in 5G stand for?",
    choices: ["Gateway", "Gigabyte", "Generation", "Global"],
    answerIndex: 2,
    explanation: "The 'G' in cellular technology like 3G, 4G, and 5G stands for 'Generation'.",
    category: "Tech",
    country: "Global",
    difficulty: "Easy"
  },

  // Tech - India - Easy
  {
    question: "The '.in' domain extension represents which country?",
    choices: ["Indonesia", "Indiana (US State)", "India", "Iran"],
    answerIndex: 2,
    explanation: "The '.in' is the Internet country code top-level domain (ccTLD) for India.",
    category: "Tech",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "What does UPI, a popular payment system in India, stand for?",
    choices: ["Universal Payment Interface", "Unified Payments Interface", "Unique Payment Identifier", "Universal Payments Identification"],
    answerIndex: 1,
    explanation: "UPI stands for Unified Payments Interface, an instant real-time payment system developed by National Payments Corporation of India.",
    category: "Tech",
    country: "India",
    difficulty: "Easy"
  },

  // Tech - Global - Medium
  {
    question: "What does 'HTTP' stand for?",
    choices: ["HyperText Transfer Protocol", "High-Text Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Program"],
    answerIndex: 0,
    explanation: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication for the World Wide Web.",
    category: "Tech",
    country: "Global",
    difficulty: "Medium"
  },

  // Tech - India - Medium
  {
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    choices: ["Hyderabad", "Pune", "Bengaluru", "Gurugram"],
    answerIndex: 2,
    explanation: "Bengaluru (formerly Bangalore) is known as the Silicon Valley of India because of its role as the nation's leading information technology (IT) exporter.",
    category: "Tech",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "What is the ISRO, India's space agency, full form?",
    choices: ["Indian Space Research Organization", "Indian Scientific Research Organization", "International Space Research Organization", "Indian Satellite Research Organization"],
    answerIndex: 0,
    explanation: "ISRO stands for the Indian Space Research Organisation, the national space agency of India.",
    category: "General Knowledge",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "Which Indian company is a major manufacturer of two-wheelers and motorcycles?",
    choices: ["Tata Motors", "Mahindra & Mahindra", "Maruti Suzuki", "Hero MotoCorp"],
    answerIndex: 3,
    explanation: "Hero MotoCorp Ltd. is the world's largest manufacturer of two-wheelers, based in India.",
    category: "Tech",
    country: "India",
    difficulty: "Medium"
  },
  
  // Tamil Nadu GK - Easy
  {
    question: "What is the capital city of Tamil Nadu?",
    choices: ["Coimbatore", "Madurai", "Chennai", "Tiruchirappalli"],
    answerIndex: 2,
    explanation: "Chennai (formerly known as Madras) is the capital city of the Indian state of Tamil Nadu.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Easy"
  },
  {
    question: "Which classical dance form originated in Tamil Nadu?",
    choices: ["Kathak", "Kuchipudi", "Bharatanatyam", "Mohiniyattam"],
    answerIndex: 2,
    explanation: "Bharatanatyam is a major form of Indian classical dance that originated in the temples of Tamil Nadu.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Easy"
  },
  
  // Tamil Nadu GK - Medium
  {
    question: "What is the traditional harvest festival of Tamil Nadu called?",
    choices: ["Diwali", "Onam", "Holi", "Pongal"],
    answerIndex: 3,
    explanation: "Pongal is a multi-day Hindu harvest festival of South India, particularly in the Tamil community.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Medium"
  },
  {
    question: "The Meenakshi Amman Temple, a historic Hindu temple, is located in which city of Tamil Nadu?",
    choices: ["Thanjavur", "Madurai", "Kanchipuram", "Rameswaram"],
    answerIndex: 1,
    explanation: "The Meenakshi Amman Temple is located on the southern bank of the Vaigai River in the temple city of Madurai.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Medium"
  },
  
  // General Knowledge - Global - Hard
  {
    question: "Who is credited with discovering penicillin?",
    choices: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
    answerIndex: 1,
    explanation: "Sir Alexander Fleming discovered the antibiotic substance penicillin from the fungus Penicillium notatum in 1928.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Hard"
  },
  {
    question: "What is the name of the galaxy that contains our Solar System?",
    choices: ["Andromeda Galaxy", "Triangulum Galaxy", "Whirlpool Galaxy", "Milky Way Galaxy"],
    answerIndex: 3,
    explanation: "Our Solar System is located within the Milky Way Galaxy, a barred spiral galaxy.",
    category: "General Knowledge",
    country: "Global",
    difficulty: "Hard"
  },

  // Movies - Global - Hard
  {
    question: "What is the highest-grossing film of all time (unadjusted for inflation)?",
    choices: ["Titanic", "Avengers: Endgame", "Avatar", "Star Wars: The Force Awakens"],
    answerIndex: 2,
    explanation: "As of the early 2020s, 'Avatar' (2009) holds the title for the highest-grossing film worldwide.",
    category: "Movies",
    country: "Global",
    difficulty: "Hard"
  },
  {
    question: "For which movie did Tom Hanks win his first Academy Award for Best Actor?",
    choices: ["Forrest Gump", "Philadelphia", "Saving Private Ryan", "Cast Away"],
    answerIndex: 1,
    explanation: "Tom Hanks won his first Best Actor Oscar for his role as Andrew Beckett in the 1993 film 'Philadelphia'.",
    category: "Movies",
    country: "Global",
    difficulty: "Hard"
  },

  // Movies - India - Hard
  {
    question: "Which Indian director is known for epic historical films like 'Jodhaa Akbar' and 'Lagaan'?",
    choices: ["Sanjay Leela Bhansali", "Ashutosh Gowariker", "Karan Johar", "Rajkumar Hirani"],
    answerIndex: 1,
    explanation: "Ashutosh Gowariker is known for directing epic films, including the Oscar-nominated 'Lagaan' (2001) and 'Jodhaa Akbar' (2008).",
    category: "Movies",
    country: "India",
    difficulty: "Hard"
  },

  // Cricket - Global - Hard
  {
    question: "Who holds the record for the highest individual score in a Test innings?",
    choices: ["Sachin Tendulkar", "Don Bradman", "Brian Lara", "Virender Sehwag"],
    answerIndex: 2,
    explanation: "Brian Lara of the West Indies scored 400 not out against England in 2004, the highest individual score in Test history.",
    category: "Cricket",
    country: "Global",
    difficulty: "Hard"
  },
  {
    question: "Who holds the record for the most wickets in Test cricket history?",
    choices: ["Shane Warne", "Anil Kumble", "Muttiah Muralitharan", "James Anderson"],
    answerIndex: 2,
    explanation: "Sri Lankan spinner Muttiah Muralitharan holds the world record for the most wickets in Test cricket with 800.",
    category: "Cricket",
    country: "Global",
    difficulty: "Hard"
  },
  // Cricket - India - Hard
  {
    question: "Who was the first Indian cricketer to score a century in all three formats of the game (Test, ODI, T20I)?",
    choices: ["Virat Kohli", "Rohit Sharma", "Suresh Raina", "Virender Sehwag"],
    answerIndex: 2,
    explanation: "Suresh Raina was the first Indian batsman to score a century in all three formats of international cricket.",
    category: "Cricket",
    country: "India",
    difficulty: "Hard"
  },

  // Tech - Global - Hard
  {
    question: "Which company developed the Python programming language?",
    choices: ["Google", "Microsoft", "It was developed by Guido van Rossum, an independent developer", "Apple"],
    answerIndex: 2,
    explanation: "Python was created by Guido van Rossum and first released in 1991. He worked at CWI in the Netherlands at the time.",
    category: "Tech",
    country: "Global",
    difficulty: "Hard"
  },
  {
    question: "Who is considered the 'Father of the Computer'?",
    choices: ["Alan Turing", "Charles Babbage", "John von Neumann", "Thomas Edison"],
    answerIndex: 1,
    explanation: "Charles Babbage, an English mechanical engineer and polymath, originated the concept of a digital programmable computer.",
    category: "Tech",
    country: "Global",
    difficulty: "Hard"
  },

  // Tech - India - Hard
  {
    question: "What is the name of India's first domestically developed supercomputer?",
    choices: ["PARAM", "SAGA", "EKA", "Vikram-100"],
    answerIndex: 0,
    explanation: "PARAM 8000, launched in 1991, is considered India's first supercomputer. It was developed by C-DAC.",
    category: "Tech",
    country: "India",
    difficulty: "Hard"
  },
  {
    question: "Which Indian tech company is the largest IT services firm in the country by revenue?",
    choices: ["Infosys", "Wipro", "HCL Technologies", "Tata Consultancy Services (TCS)"],
    answerIndex: 3,
    explanation: "Tata Consultancy Services (TCS) is a multinational IT services and consulting company, and consistently ranks as the largest in India.",
    category: "Tech",
    country: "India",
    difficulty: "Hard"
  },
  
  // Tamil Nadu GK - Hard
  {
    question: "Which is the longest river that flows in Tamil Nadu?",
    choices: ["Vaigai", "Palar", "Kaveri", "Thamirabarani"],
    answerIndex: 2,
    explanation: "The Kaveri (or Cauvery) is the longest river in Tamil Nadu and is often called the 'Ganges of the South'.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Hard"
  },
  {
    question: "The Thirukkural, a classic Tamil text, was written by which famous poet?",
    choices: ["Kambar", "Avvaiyar", "Thiruvalluvar", "Bharathiyar"],
    answerIndex: 2,
    explanation: "The Thirukkural is a classic Tamil text consisting of 1,330 couplets or kurals, authored by the poet Thiruvalluvar.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Hard"
  },
  {
    question: "Jallikattu, a traditional event, is typically practiced in which state?",
    choices: ["Kerala", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
    answerIndex: 2,
    explanation: "Jallikattu is a traditional bull-taming sport that is popular in the Indian state of Tamil Nadu as part of Pongal celebrations.",
    category: "Tamil Nadu GK",
    country: "India",
    difficulty: "Hard"
  }
];
