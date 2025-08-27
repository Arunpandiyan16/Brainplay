
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
    { text: "What is 150% of 50?", answer: 75, xp: 30, type: 'Aptitude' },
    { text: "If you get 30 out of 40 on a test, what is your percentage?", answer: 75, xp: 25, type: 'Aptitude' },
    
    // Ratios and Proportions
    { text: "The ratio of boys to girls is 3:2. If there are 15 boys, how many girls are there?", answer: 10, xp: 25, type: 'Aptitude' },
    { text: "A map has a scale of 1cm : 5km. If two cities are 10cm apart, what is the actual distance in km?", answer: 50, xp: 30, type: 'Aptitude' },
    { text: "Two numbers are in the ratio 4:5. If their sum is 81, what is the larger number?", answer: 45, xp: 30, type: 'Aptitude'},
    { text: "If 3 apples cost $2, how much do 12 apples cost?", answer: 8, xp: 25, type: 'Aptitude' },

    // Averages
    { text: "What is the average of 10, 20, and 30?", answer: 20, xp: 25, type: 'Aptitude' },
    { text: "The average of 5 numbers is 15. What is their sum?", answer: 75, xp: 30, type: 'Aptitude' },
    { text: "The average age of 3 friends is 20. If one is 18 and another is 22, how old is the third friend?", answer: 20, xp: 35, type: 'Aptitude' },
    { text: "Find the average of the first five prime numbers (2, 3, 5, 7, 11).", answer: 5.6, xp: 35, type: 'Aptitude' },

    // Simple Algebra
    { text: "If 2x + 5 = 15, what is x?", answer: 5, xp: 25, type: 'Aptitude' },
    { text: "A number is doubled and 5 is added. The result is 25. What is the number?", answer: 10, xp: 30, type: 'Aptitude' },
    { text: "The sum of two consecutive numbers is 31. What is the larger number?", answer: 16, xp: 35, type: 'Aptitude' },
    { text: "If x/4 = 7, what is x?", answer: 28, xp: 25, type: 'Aptitude' },

    // Time and Distance
    { text: "A car travels at 60 km/h. How far will it travel in 3 hours (in km)?", answer: 180, xp: 30, type: 'Aptitude' },
    { text: "A train covers 200 km in 4 hours. What is its speed in km/h?", answer: 50, xp: 30, type: 'Aptitude' },
    { text: "If you walk at 5 km/h, how long will it take to walk 10 km (in hours)?", answer: 2, xp: 25, type: 'Aptitude' },

    // === Logical Reasoning ===
    // Number Series
    { text: "Find the next number in the series: 2, 4, 6, 8, ...?", answer: 10, xp: 30, type: 'Logical Reasoning' },
    { text: "What comes next in the sequence: 1, 4, 9, 16, ...?", answer: 25, xp: 35, type: 'Logical Reasoning' },
    { text: "Find the next number: 3, 7, 11, 15, ...?", answer: 19, xp: 30, type: 'Logical Reasoning' },
    { text: "What is the next number in the series: 5, 10, 20, 40, ...?", answer: 80, xp: 35, type: 'Logical Reasoning' },
    { text: "Continue the sequence: 81, 27, 9, 3, ...?", answer: 1, xp: 40, type: 'Logical Reasoning' },
    { text: "Find the next term: 1, 1, 2, 3, 5, 8, ...?", answer: 13, xp: 40, type: 'Logical Reasoning' },

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
    { text: "Which letter comes next in this sequence? A, C, E, G, ...?", answer: 'I', xp: 35, type: 'Logical Reasoning' },
    { text: "If a doctor gives you 3 pills and tells you to take one every half hour, how many minutes would it be from taking the first pill to the last pill?", answer: 60, xp: 40, type: 'Logical Reasoning' },
    // ... many more problems to be added here to reach 500.

     // === Aptitude ===
    // Percentages
    { text: "A student scored 72 marks out of 120. What is the percentage?", answer: 60, xp: 25, type: 'Aptitude' },
    { text: "If the price of sugar rises from $20 to $25 per kg, what is the percentage increase?", answer: 25, xp: 30, type: 'Aptitude' },
    { text: "A number is increased by 20% and then decreased by 20%. What is the net effect (in %)?", answer: -4, xp: 35, type: 'Aptitude' },
    { text: "A candidate scored 180 out of 200. What percent did he score?", answer: 90, xp: 25, type: 'Aptitude' },

    // Profit & Loss
    { text: "If a book is sold at $300 making a profit of 20%, what was the cost price?", answer: 250, xp: 35, type: 'Aptitude' },
    { text: "A trader sells a watch at a loss of 12% for $880. What was the cost price?", answer: 1000, xp: 40, type: 'Aptitude' },
    { text: "If the cost price is $500 and profit is $75, find the profit percentage.", answer: 15, xp: 35, type: 'Aptitude' },
    { text: "A toy was bought for $600 and sold for $750. Find the profit percentage.", answer: 25, xp: 35, type: 'Aptitude' },

    // Simple Interest
    { text: "The simple interest on $1500 at 12% per annum for 2 years is?", answer: 360, xp: 30, type: 'Aptitude' },
    { text: "Find the SI on $8000 for 3 years at 10% p.a.", answer: 2400, xp: 35, type: 'Aptitude' },
    { text: "If SI on a sum at 8% for 5 years is $400, find the principal.", answer: 1000, xp: 40, type: 'Aptitude' },
    { text: "At what rate will $2000 yield SI of $400 in 4 years?", answer: 5, xp: 35, type: 'Aptitude' },

    // Time, Speed & Distance
    { text: "A car covers 240 km in 4 hours. Find its speed.", answer: 60, xp: 30, type: 'Aptitude' },
    { text: "If speed = 40 km/h and time = 2.5 h, find distance.", answer: 100, xp: 30, type: 'Aptitude' },
    { text: "A train 150 m long passes a pole in 15 sec. Find its speed (km/h).", answer: 36, xp: 40, type: 'Aptitude' },
    { text: "If distance = 120 km and speed = 30 km/h, find time in hours.", answer: 4, xp: 25, type: 'Aptitude' },

    // Averages
    { text: "The average of 8 and 12 is?", answer: 10, xp: 25, type: 'Aptitude' },
    { text: "The average of 5 numbers is 20. Find the sum.", answer: 100, xp: 30, type: 'Aptitude' },
    { text: "Find the average of first 10 natural numbers.", answer: 5.5, xp: 35, type: 'Aptitude' },
    { text: "If the average of 4 numbers is 25, what is their total sum?", answer: 100, xp: 25, type: 'Aptitude' },

    // Ratio & Proportion
    { text: "The ratio of 2 to 3 is the same as 8 to what?", answer: 12, xp: 30, type: 'Aptitude' },
    { text: "Divide $600 in the ratio 2:3.", answer: "240,360", xp: 40, type: 'Aptitude' },
    { text: "If 4 pens cost $20, how much will 10 pens cost?", answer: 50, xp: 30, type: 'Aptitude' },
    { text: "Two numbers are in the ratio 5:7. If their sum is 144, find the larger number.", answer: 84, xp: 40, type: 'Aptitude' },

    // Probability
    { text: "Find the probability of getting an odd number on a dice.", answer: 0.5, xp: 30, type: 'Aptitude' },
    { text: "A card is drawn from a pack of 52. Find probability of a red card.", answer: 0.5, xp: 35, type: 'Aptitude' },
    { text: "Two dice are thrown. Find probability of getting sum = 7.", answer: 6/36, xp: 40, type: 'Aptitude' },
    { text: "Find probability of getting a king from a deck of cards.", answer: 1/13, xp: 35, type: 'Aptitude' },

    // === Logical Reasoning ===
    // Number Series
    { text: "Find next number: 2, 6, 12, 20, ...?", answer: 30, xp: 35, type: 'Logical Reasoning' },
    { text: "Find next number: 1, 2, 4, 8, 16, ...?", answer: 32, xp: 35, type: 'Logical Reasoning' },
    { text: "Find next number: 11, 22, 33, 44, ...?", answer: 55, xp: 30, type: 'Logical Reasoning' },
    { text: "What comes next: 100, 90, 80, 70, ...?", answer: 60, xp: 30, type: 'Logical Reasoning' },

    // Odd One Out
    { text: "Which number is odd? 3, 9, 15, 21, 25", answer: 25, xp: 35, type: 'Logical Reasoning' },
    { text: "Which word is odd? Dog, Cat, Cow, Chair", answer: "chair", xp: 35, type: 'Logical Reasoning' },
    { text: "Which is odd? Rose, Lotus, Lily, Apple", answer: "apple", xp: 35, type: 'Logical Reasoning' },
    { text: "Which is odd? Red, Blue, Green, Mango", answer: "mango", xp: 30, type: 'Logical Reasoning' },

    // Coding-Decoding
    { text: "If PEN = QFO, then CAT = ?", answer: "DBU", xp: 40, type: 'Logical Reasoning' },
    { text: "If A=1, B=2, then CAT = ?", answer: 24, xp: 40, type: 'Logical Reasoning' },
    { text: "If TREE is coded as 20-18-5-5, then BOOK = ?", answer: "2-15-15-11", xp: 35, type: 'Logical Reasoning' },
    { text: "If SUN = 54, then MOON = ?", answer: 57, xp: 40, type: 'Logical Reasoning' },

    // Blood Relations
    { text: "Pointing to a woman, a man said: 'She is my mother’s daughter-in-law.' Who is she?", answer: "wife", xp: 40, type: 'Logical Reasoning' },
    { text: "X is the brother of Y. Y is the mother of Z. How is X related to Z?", answer: "uncle", xp: 35, type: 'Logical Reasoning' },

    // Directions
    { text: "A person walks 3 km east, then 4 km north. How far is he from the starting point?", answer: 5, xp: 45, type: 'Logical Reasoning' },
    { text: "If you face south and turn left, which direction are you facing?", answer: "east", xp: 30, type: 'Logical Reasoning' },

    // Simple Logic & Puzzles
    { text: "All birds can fly. Penguin is a bird. Can penguins fly? (yes/no)", answer: "no", xp: 40, type: 'Logical Reasoning' },
    { text: "Which letter comes next? Z, X, V, T, ...?", answer: "R", xp: 40, type: 'Logical Reasoning' },
    { text: "A clock shows 3:15. What is the angle between the hands?", answer: 7.5, xp: 50, type: 'Logical Reasoning' },
    { text: "What is always coming but never arrives?", answer: "tomorrow", xp: 50, type: 'Logical Reasoning' }
];

// Placeholder for adding 450+ more problems
const addMoreProblems = (bank: MathProblem[]) => {
    // This is a placeholder function. In a real implementation, this would involve
    // generating hundreds of additional aptitude and logical reasoning problems.
    return bank;
};

addMoreProblems(problemBank);
