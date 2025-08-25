
export interface LogicPuzzle {
    text: string;
    choices: string[];
    answerIndex: number;
    explanation: string;
    xp: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    type: 'Number Series' | 'Analogy' | 'Odd One Out' | 'Verbal Logic';
}

export const logicPuzzles: LogicPuzzle[] = [
    // === Easy ===
    // Number Series
    { 
        text: "Find the next number in the series: 2, 4, 6, 8, ...?", 
        choices: ["9", "10", "12", "14"],
        answerIndex: 1, 
        explanation: "The series increases by 2 each time, so the next number is 10.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Number Series' 
    },
    { 
        text: "What comes next in the sequence: 5, 10, 15, 20, ...?", 
        choices: ["22", "25", "30", "35"],
        answerIndex: 1, 
        explanation: "The series increases by 5 each time, so the next number is 25.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Number Series'
    },
    // Analogies
    { 
        text: "Dog is to Bark as Cat is to ...?", 
        choices: ["Chirp", "Moo", "Roar", "Meow"],
        answerIndex: 3, 
        explanation: "A dog makes a 'bark' sound, and a cat makes a 'meow' sound.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Analogy' 
    },
    { 
        text: "Sun is to Day as Moon is to ...?", 
        choices: ["Star", "Night", "Sky", "Cloud"],
        answerIndex: 1,
        explanation: "The sun is the primary celestial body visible during the day, and the moon is at night.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Analogy' 
    },
    // Odd One Out
    { 
        text: "Which word doesn't belong? Apple, Banana, Carrot, Grape", 
        choices: ["Apple", "Banana", "Carrot", "Grape"],
        answerIndex: 2,
        explanation: "A carrot is a vegetable, while the others are fruits.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Odd One Out' 
    },
    { 
        text: "Which number doesn't belong? 2, 4, 6, 7, 8", 
        choices: ["2", "4", "6", "7"],
        answerIndex: 3, 
        explanation: "7 is an odd number; the rest are even.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Odd One Out' 
    },

    // === Medium ===
    // Number Series
    { 
        text: "What is the next number in the series: 1, 4, 9, 16, ...?", 
        choices: ["20", "24", "25", "36"],
        answerIndex: 2, 
        explanation: "The series consists of square numbers (1^2, 2^2, 3^2, 4^2). The next is 5^2, which is 25.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Number Series' 
    },
    { 
        text: "Find the next number: 3, 7, 11, 15, ...?", 
        choices: ["18", "19", "20", "21"],
        answerIndex: 1, 
        explanation: "The series increases by 4 each time. 15 + 4 = 19.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Number Series' 
    },
     { 
        text: "Continue the sequence: 40, 35, 30, 25, ...?", 
        choices: ["15", "20", "22", "10"],
        answerIndex: 1, 
        explanation: "The series decreases by 5 each time. 25 - 5 = 20.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Number Series' 
    },
    // Analogies
    { 
        text: "France is to Paris as Japan is to ...?", 
        choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answerIndex: 2, 
        explanation: "Paris is the capital of France, and Tokyo is the capital of Japan.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Analogy' 
    },
    { 
        text: "Author is to Book as Composer is to ...?", 
        choices: ["Song", "Poem", "Painting", "Statue"],
        answerIndex: 0, 
        explanation: "An author creates a book, and a composer creates a song or musical piece.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Analogy'
    },
    // Verbal Logic
    { 
        text: "If all cats are mammals, and a tiger is a cat, is a tiger a mammal?", 
        choices: ["Yes", "No", "Maybe", "Not enough info"],
        answerIndex: 0, 
        explanation: "This is a simple syllogism. Since the premises are true (all cats are mammals, a tiger is a cat), the conclusion (a tiger is a mammal) must be true.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Verbal Logic'
    },
     { 
        text: "A man has 5 sons. Each son has one sister. How many children does the man have in total?", 
        choices: ["10", "11", "5", "6"],
        answerIndex: 3, 
        explanation: "All 5 sons share the same one sister, so there are 5 boys and 1 girl, making 6 children in total.",
        xp: 30, 
        difficulty: 'Medium',
        type: 'Verbal Logic'
    },

    // === Hard ===
    // Number Series
    { 
        text: "What is the next number in the series: 5, 10, 20, 40, ...?", 
        choices: ["50", "60", "70", "80"],
        answerIndex: 3, 
        explanation: "Each number is double the previous number. 40 * 2 = 80.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Number Series' 
    },
    { 
        text: "Continue the sequence: 81, 27, 9, 3, ...?", 
        choices: ["1", "0", "2", "1/3"],
        answerIndex: 0, 
        explanation: "Each number is the previous number divided by 3. 3 / 3 = 1.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Number Series' 
    },
     { 
        text: "Find the next number: 1, 1, 2, 3, 5, 8, ...?", 
        choices: ["10", "11", "12", "13"],
        answerIndex: 3, 
        explanation: "This is the Fibonacci sequence, where each number is the sum of the two preceding ones. 5 + 8 = 13.",
        xp: 40, 
        difficulty: 'Hard',
        type: 'Number Series' 
    },
    // Odd One Out
    { 
        text: "Which shape is the odd one out?", 
        choices: ["Square", "Circle", "Triangle", "Rectangle"],
        answerIndex: 1, 
        explanation: "A circle is the only shape without straight sides or corners.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Odd One Out' 
    },
     { 
        text: "Which one doesn't belong?", 
        choices: ["Car", "Bicycle", "Motorcycle", "Scooter"],
        answerIndex: 0, 
        explanation: "A car is the only vehicle in the list that typically has four wheels; the others have two.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Odd One Out' 
    },
    // Verbal Logic
    { 
        text: "Which letter comes next in this sequence? J, F, M, A, M, ...?", 
        choices: ["J", "A", "S", "O"],
        answerIndex: 0, 
        explanation: "The sequence is the first letter of the months of the year: January, February, March, April, May, June.",
        xp: 40, 
        difficulty: 'Hard',
        type: 'Verbal Logic' 
    },
    {
        text: "A farmer has 17 sheep, and all but 9 die. How many are left?",
        choices: ["17", "8", "9", "26"],
        answerIndex: 2,
        explanation: "The phrase 'all but 9 die' is a tricky way of saying that 9 sheep are the ones that survived.",
        xp: 40,
        difficulty: 'Hard',
        type: 'Verbal Logic'
    }
];
