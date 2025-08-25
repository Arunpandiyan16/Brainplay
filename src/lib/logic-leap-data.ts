
export interface LogicPuzzle {
    text: string;
    answer: string | number;
    answerType: 'text' | 'number';
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
        answer: 10, 
        answerType: 'number',
        explanation: "The series increases by 2 each time.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Number Series' 
    },
    { 
        text: "What comes next in the sequence: 5, 10, 15, 20, ...?", 
        answer: 25, 
        answerType: 'number',
        explanation: "The series increases by 5 each time.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Number Series'
    },
    // Analogies
    { 
        text: "Dog is to Bark as Cat is to ...? (type the word)", 
        answer: 'meow', 
        answerType: 'text',
        explanation: "A dog makes a 'bark' sound, and a cat makes a 'meow' sound.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Analogy' 
    },
    { 
        text: "Sun is to Day as Moon is to ...? (type the word)", 
        answer: 'night',
        answerType: 'text',
        explanation: "The sun is visible during the day, and the moon is visible at night.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Analogy' 
    },
    // Odd One Out
    { 
        text: "Which word doesn't belong? Apple, Banana, Carrot, Grape", 
        answer: 'carrot',
        answerType: 'text',
        explanation: "A carrot is a vegetable, while the others are fruits.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Odd One Out' 
    },
    { 
        text: "Which number doesn't belong? 2, 4, 6, 7, 8", 
        answer: 7, 
        answerType: 'number',
        explanation: "7 is an odd number; the rest are even.",
        xp: 15, 
        difficulty: 'Easy',
        type: 'Odd One Out' 
    },

    // === Medium ===
    // Number Series
    { 
        text: "What is the next number in the series: 1, 4, 9, 16, ...?", 
        answer: 25, 
        answerType: 'number',
        explanation: "The series consists of square numbers (1^2, 2^2, 3^2, 4^2, 5^2).",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Number Series' 
    },
    { 
        text: "Find the next number: 3, 7, 11, 15, ...?", 
        answer: 19, 
        answerType: 'number',
        explanation: "The series increases by 4 each time.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Number Series' 
    },
     { 
        text: "Continue the sequence: 40, 35, 30, 25, ...?", 
        answer: 20, 
        answerType: 'number',
        explanation: "The series decreases by 5 each time.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Number Series' 
    },
    // Analogies
    { 
        text: "France is to Paris as Japan is to ...? (type the word)", 
        answer: 'tokyo', 
        answerType: 'text',
        explanation: "Paris is the capital of France, and Tokyo is the capital of Japan.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Analogy' 
    },
    { 
        text: "Author is to Book as Composer is to ...? (type the word)", 
        answer: 'song', 
        answerType: 'text',
        explanation: "An author creates a book, and a composer creates a song.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Analogy'
    },
    // Verbal Logic
    { 
        text: "If all cats are mammals, and a tiger is a cat, is a tiger a mammal? (yes/no)", 
        answer: 'yes', 
        answerType: 'text',
        explanation: "This is a simple syllogism. Since the premises are true, the conclusion must be true.",
        xp: 25, 
        difficulty: 'Medium',
        type: 'Verbal Logic'
    },
     { 
        text: "A man has 5 sons. Each son has one sister. How many children does the man have in total?", 
        answer: 6, 
        answerType: 'number',
        explanation: "All 5 sons share the same one sister, so there are 5 boys and 1 girl, making 6 children in total.",
        xp: 30, 
        difficulty: 'Medium',
        type: 'Verbal Logic'
    },

    // === Hard ===
    // Number Series
    { 
        text: "What is the next number in the series: 5, 10, 20, 40, ...?", 
        answer: 80, 
        answerType: 'number',
        explanation: "Each number is double the previous number.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Number Series' 
    },
    { 
        text: "Continue the sequence: 81, 27, 9, 3, ...?", 
        answer: 1, 
        answerType: 'number',
        explanation: "Each number is the previous number divided by 3.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Number Series' 
    },
     { 
        text: "Find the next number: 1, 1, 2, 3, 5, 8, ...?", 
        answer: 13, 
        answerType: 'number',
        explanation: "This is the Fibonacci sequence, where each number is the sum of the two preceding ones.",
        xp: 40, 
        difficulty: 'Hard',
        type: 'Number Series' 
    },
    // Odd One Out
    { 
        text: "Which shape is the odd one out? Square, Circle, Triangle, Rectangle", 
        answer: 'circle', 
        answerType: 'text',
        explanation: "A circle is the only shape without straight sides or corners.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Odd One Out' 
    },
     { 
        text: "Which one doesn't belong? Car, Bicycle, Motorcycle, Scooter", 
        answer: 'car', 
        answerType: 'text',
        explanation: "A car is the only vehicle in the list that typically has four wheels; the others have two.",
        xp: 35, 
        difficulty: 'Hard',
        type: 'Odd One Out' 
    },
    // Verbal Logic
    { 
        text: "Which letter comes next in this sequence? J, F, M, A, M, ...?", 
        answer: 'J', 
        answerType: 'text',
        explanation: "The sequence is the first letter of the months of the year: January, February, March, April, May, June.",
        xp: 40, 
        difficulty: 'Hard',
        type: 'Verbal Logic' 
    },
    {
        text: "A farmer has 17 sheep, and all but 9 die. How many are left?",
        answer: 9,
        answerType: 'number',
        explanation: "The phrase 'all but 9 die' is a tricky way of saying that 9 sheep are the ones that survived.",
        xp: 40,
        difficulty: 'Hard',
        type: 'Verbal Logic'
    }
];
