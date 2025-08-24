
export interface QuizQuestion {
  question: string;
  choices: string[];
  answerIndex: number;
  explanation: string;
  category: string;
  country: 'India' | 'Global';
}

export const CATEGORIES = ['General Knowledge', 'Movies', 'Cricket', 'Tech', 'Tamil Nadu GK'];

const questions: QuizQuestion[] = [
  // General Knowledge - Global
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    answerIndex: 2,
    explanation: "Paris is the capital and most populous city of France.",
    category: "General Knowledge",
    country: "Global"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answerIndex: 1,
    explanation: "Mars is often called the 'Red Planet' because of its reddish appearance, caused by iron oxide on its surface.",
    category: "General Knowledge",
    country: "Global"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answerIndex: 1,
    explanation: "William Shakespeare, an English playwright, poet, and actor, is widely regarded as the greatest writer in the English language.",
    category: "General Knowledge",
    country: "Global"
  },
  // General Knowledge - India
  {
    question: "What is the capital of India?",
    choices: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answerIndex: 1,
    explanation: "New Delhi is the capital of India and an administrative district of NCT Delhi.",
    category: "General Knowledge",
    country: "India"
  },
  {
    question: "Which river is considered the most sacred in India?",
    choices: ["Yamuna", "Brahmaputra", "Ganges", "Godavari"],
    answerIndex: 2,
    explanation: "The Ganges (Ganga) is a trans-boundary river of Asia which flows through India and Bangladesh, and is sacred to Hindus.",
    category: "General Knowledge",
    country: "India"
  },
   {
    question: "Who was the first Prime Minister of India?",
    choices: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Dr. B. R. Ambedkar"],
    answerIndex: 2,
    explanation: "Jawaharlal Nehru was the first Prime Minister of India, serving from 1947 until his death in 1964.",
    category: "General Knowledge",
    country: "India"
  },
  // Movies - Global
  {
    question: "Which movie won the first-ever Academy Award for Best Picture?",
    choices: ["The Jazz Singer", "Metropolis", "Wings", "Sunrise"],
    answerIndex: 2,
    explanation: "'Wings' (1927), a silent film about two WWI fighter pilots, won the first Best Picture Oscar in 1929.",
    category: "Movies",
    country: "Global"
  },
  {
    question: "Who directed the movie 'Inception'?",
    choices: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
    answerIndex: 2,
    explanation: "Christopher Nolan is the acclaimed director behind mind-bending films like 'Inception', 'Interstellar', and 'The Dark Knight' trilogy.",
    category: "Movies",
    country: "Global"
  },
  // Movies - India
  {
    question: "Which was the first full-length Indian feature film?",
    choices: ["Alam Ara", "Raja Harishchandra", "Kisan Kanya", "Mother India"],
    answerIndex: 1,
    explanation: "'Raja Harishchandra' (1913), a silent film directed by Dadasaheb Phalke, is considered the first full-length Indian feature film.",
    category: "Movies",
    country: "India"
  },
  {
    question: "In the movie 'Lagaan', what was the final score required to win the match?",
    choices: ["1 run from 1 ball", "4 runs from 1 ball", "6 runs from 1 ball", "2 runs from 2 balls"],
    answerIndex: 0,
    explanation: "With one ball left, Bhuvan needed one run to win, but hit a six, with the catch being taken outside the boundary line.",
    category: "Movies",
    country: "India"
  },
  // Cricket - Global
  {
    question: "Which country has won the most ICC Cricket World Cups (Men's ODI)?",
    choices: ["India", "West Indies", "England", "Australia"],
    answerIndex: 3,
    explanation: "Australia is the most successful team in the tournament's history, having won it six times.",
    category: "Cricket",
    country: "Global"
  },
  // Cricket - India
  {
    question: "Who is the first Indian batsman to score a triple century in Test cricket?",
    choices: ["Sachin Tendulkar", "Sunil Gavaskar", "Virender Sehwag", "Rahul Dravid"],
    answerIndex: 2,
    explanation: "Virender Sehwag was the first Indian to score a triple century (309) in Test cricket, against Pakistan in Multan in 2004.",
    category: "Cricket",
    country: "India"
  },
  // Tech - Global
  {
    question: "What does 'HTTP' stand for?",
    choices: ["HyperText Transfer Protocol", "High-Tech Text Protocol", "Hyperlink Transfer Technology Process", "HyperText Transmission Protocol"],
    answerIndex: 0,
    explanation: "HTTP is the foundation of data communication for the World Wide Web, defining how messages are formatted and transmitted.",
    category: "Tech",
    country: "Global"
  },
  // Tech - India
  {
    question: "What is the name of India's first supercomputer?",
    choices: ["Saga-220", "PARAM 8000", "Aaditya", "Mihir"],
    answerIndex: 1,
    explanation: "PARAM 8000, developed by C-DAC in 1991, is considered India's first supercomputer.",
    category: "Tech",
    country: "India"
  },
  // Tamil Nadu GK - India
  {
    question: "Which city is known as the 'Manchester of South India'?",
    choices: ["Chennai", "Madurai", "Coimbatore", "Salem"],
    answerIndex: 2,
    explanation: "Coimbatore is called the 'Manchester of South India' due to its extensive textile industry.",
    category: "Tamil Nadu GK",
    country: "India"
  },
  {
    question: "What is the classical dance form of Tamil Nadu?",
    choices: ["Kathak", "Kuchipudi", "Bharatanatyam", "Mohiniyattam"],
    answerIndex: 2,
    explanation: "Bharatanatyam is a major genre of Indian classical dance that originated in the Hindu temples of Tamil Nadu.",
    category: "Tamil Nadu GK",
    country: "India"
  }
];

export function getQuizQuestion(category: string, country: string): QuizQuestion {
  let filteredQuestions = questions.filter(q => q.category === category);
  
  if (country !== 'Global' && category !== 'Tamil Nadu GK') {
    // Filter for the specific country OR global questions if not enough country-specific ones exist
    const countrySpecific = filteredQuestions.filter(q => q.country === country);
    const globalFallback = filteredQuestions.filter(q => q.country === 'Global');
    filteredQuestions = [...countrySpecific, ...globalFallback];
  } else if (category === 'Tamil Nadu GK') {
    // TN GK is only for India
    filteredQuestions = filteredQuestions.filter(q => q.country === 'India');
  } else { // Global
     filteredQuestions = filteredQuestions.filter(q => q.country === 'Global');
  }
  
  if (filteredQuestions.length === 0) {
    // Fallback to any question in the category if no country-specific ones are found
    filteredQuestions = questions.filter(q => q.category === category);
    if(filteredQuestions.length === 0) {
        // Fallback to any question at all
        filteredQuestions = questions;
    }
  }
  
  const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
  return filteredQuestions[randomIndex];
}
