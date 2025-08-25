
export interface MathProblem {
    text: string;
    answer: string | number;
    xp: number;
    type: 'Aptitude' | 'Logical Reasoning';
}

export const problemBank: MathProblem[] = [
    // === Aptitude ===
    // Percentages
    { text: "What is 25% of 200?", answer: 50, xp: 25, type: 'Aptitude' },
    { text: "A shirt costing $40 is sold at a 10% discount. What is the final price?", answer: 36, xp: 25, type: 'Aptitude' },
    { text: "If a population increases from 1000 to 1200, what is the percentage increase?", answer: 20, xp: 30, type: 'Aptitude' },
    { text: "A student scored 45 out of 50 in a test. What is their score as a percentage?", answer: 90, xp: 25, type: 'Aptitude' },
    { text: "An item is sold for $120 at a 20% profit. What was the cost price?", answer: 100, xp: 35, type: 'Aptitude' },
    
    // Ratios and Proportions
    { text: "The ratio of boys to girls is 3:2. If there are 15 boys, how many girls are there?", answer: 10, xp: 25, type: 'Aptitude' },
    { text: "A map has a scale of 1cm : 5km. If two cities are 10cm apart, what is the actual distance in km?", answer: 50, xp: 30, type: 'Aptitude' },
    { text: "Two numbers are in the ratio 4:5. If their sum is 81, what is the larger number?", answer: 45, xp: 30, type: 'Aptitude'},

    // Averages
    { text: "What is the average of 10, 20, and 30?", answer: 20, xp: 25, type: 'Aptitude' },
    { text: "The average of 5 numbers is 15. What is their sum?", answer: 75, xp: 30, type: 'Aptitude' },
    { text: "The average age of 3 friends is 20. If one is 18 and another is 22, how old is the third friend?", answer: 20, xp: 35, type: 'Aptitude' },

    // Simple Algebra
    { text: "If 2x + 5 = 15, what is x?", answer: 5, xp: 25, type: 'Aptitude' },
    { text: "A number is doubled and 5 is added. The result is 25. What is the number?", answer: 10, xp: 30, type: 'Aptitude' },
    { text: "The sum of two consecutive numbers is 31. What is the larger number?", answer: 16, xp: 35, type: 'Aptitude' },

    // Time and Distance
    { text: "A car travels at 60 km/h. How far will it travel in 3 hours (in km)?", answer: 180, xp: 30, type: 'Aptitude' },
    { text: "A train covers 200 km in 4 hours. What is its speed in km/h?", answer: 50, xp: 30, type: 'Aptitude' },

    // === Logical Reasoning ===
    // Number Series
    { text: "Find the next number in the series: 2, 4, 6, 8, ...?", answer: 10, xp: 30, type: 'Logical Reasoning' },
    { text: "What comes next in the sequence: 1, 4, 9, 16, ...?", answer: 25, xp: 35, type: 'Logical Reasoning' },
    { text: "Find the next number: 3, 7, 11, 15, ...?", answer: 19, xp: 30, type: 'Logical Reasoning' },
    { text: "What is the next number in the series: 5, 10, 20, 40, ...?", answer: 80, xp: 35, type: 'Logical Reasoning' },
    { text: "Continue the sequence: 81, 27, 9, 3, ...?", answer: 1, xp: 40, type: 'Logical Reasoning' },

    // Analogies
    { text: "Dog is to Bark as Cat is to ...? (type the word)", answer: 'meow', xp: 30, type: 'Logical Reasoning' },
    { text: "Sun is to Day as Moon is to ...? (type the word)", answer: 'night', xp: 30, type: 'Logical Reasoning' },
    { text: "Author is to Book as Composer is to ...? (type the word)", answer: 'song', xp: 35, type: 'Logical Reasoning' },
    { text: "France is to Paris as Japan is to ...? (type the word)", answer: 'tokyo', xp: 35, type: 'Logical Reasoning' },
    
    // Odd One Out
    { text: "Which number doesn't belong? 2, 4, 6, 7, 8", answer: 7, xp: 30, type: 'Logical Reasoning' },
    { text: "Which word doesn't belong? Apple, Banana, Carrot, Grape", answer: 'carrot', xp: 30, type: 'Logical Reasoning' },
    { text: "Which shape is the odd one out? Square, Circle, Triangle, Rectangle", answer: 'circle', xp: 35, type: 'Logical Reasoning' },

    // Simple Logic
    { text: "If all cats are mammals, and a tiger is a cat, is a tiger a mammal? (yes/no)", answer: 'yes', xp: 30, type: 'Logical Reasoning' },
    { text: "A man has 5 sons. Each son has one sister. How many children does the man have?", answer: 6, xp: 40, type: 'Logical Reasoning' },
    { text: "Which letter comes next in this sequence? A, C, E, G, ...?", answer: 'I', xp: 35, type: 'Logical Reasoning' }
];
