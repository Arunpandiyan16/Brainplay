
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
    { text: "What is always coming but never arrives?", answer: "tomorrow", xp: 50, type: 'Logical Reasoning' },
    { text: "A shop gives a 15% discount on a dress priced at $200. What is the sale price?", answer: 170, xp: 30, type: 'Aptitude' },
    { text: "A student's marks increased from 40 to 50. Find the percentage increase.", answer: 25, xp: 30, type: 'Aptitude' },
    { text: "If a number is increased by 50%, the result is 75. Find the original number.", answer: 50, xp: 35, type: 'Aptitude' },

    // Profit & Loss
    { text: "A bicycle is bought for $500 and sold for $600. Find the profit percentage.", answer: 20, xp: 35, type: 'Aptitude' },
    { text: "An article bought for $400 is sold at $320. Find the loss percentage.", answer: 20, xp: 35, type: 'Aptitude' },
    
    // Simple Interest
    { text: "Find SI on $1200 at 5% per annum for 3 years.", answer: 180, xp: 30, type: 'Aptitude' },
    { text: "If SI = $250 on a sum of $2000 for 5 years, find the rate of interest.", answer: 2.5, xp: 35, type: 'Aptitude' },
    
    // Time, Speed & Distance
    { text: "A man runs at 10 km/h. How long will he take to cover 25 km?", answer: 2.5, xp: 30, type: 'Aptitude' },
    { text: "A train travels 300 km in 5 hours. Find its speed.", answer: 60, xp: 30, type: 'Aptitude' },
    
    // Ratio & Proportion
    { text: "Divide $500 in the ratio 3:2.", answer: "300,200", xp: 35, type: 'Aptitude' },
    { text: "Two numbers are in the ratio 7:8. If the smaller is 21, find the larger.", answer: 24, xp: 30, type: 'Aptitude' },

    // Averages
    { text: "The average of 6 numbers is 15. Find their sum.", answer: 90, xp: 25, type: 'Aptitude' },
    { text: "Average of 5, 10, 15, 20, 25 is?", answer: 15, xp: 25, type: 'Aptitude' },

    // === Logical Reasoning ===
    // Number Series
    { text: "Find the next number: 5, 10, 20, 40, ...?", answer: 80, xp: 35, type: 'Logical Reasoning' },
    { text: "Find next number: 1, 2, 4, 7, 11, ...?", answer: 16, xp: 40, type: 'Logical Reasoning' },
    { text: "Find next number: 2, 6, 12, 20, 30, ...?", answer: 42, xp: 40, type: 'Logical Reasoning' },

    // Analogies
    { text: "Hand is to Glove as Foot is to ...?", answer: "sock", xp: 30, type: 'Logical Reasoning' },
    { text: "Bird is to Nest as Bee is to ...?", answer: "hive", xp: 35, type: 'Logical Reasoning' },
    
    // Odd One Out
    { text: "Odd one out: 14, 28, 35, 42", answer: 35, xp: 35, type: 'Logical Reasoning' },
    { text: "Odd one out: Lion, Tiger, Elephant, Leopard", answer: "Elephant", xp: 35, type: 'Logical Reasoning' },

    // Coding-Decoding
    { text: "If DOG = 4157, then CAT = ?", answer: 3120, xp: 40, type: 'Logical Reasoning' },
    { text: "If ABC = 123, then DEF = ?", answer: 456, xp: 40, type: 'Logical Reasoning' },

    // Blood Relations
    { text: "Pointing to a boy, a woman says, 'He is my grandfather’s son’s son.' Who is he?", answer: "grandson", xp: 40, type: 'Logical Reasoning' },
    { text: "X is the father of Y. Y is the sister of Z. How is Z related to X?", answer: "child", xp: 35, type: 'Logical Reasoning' },

    // Directions
    { text: "A person walks 5 km north and then 12 km east. Find the distance from starting point.", answer: 13, xp: 45, type: 'Logical Reasoning' },
    { text: "If you face west and turn right, which direction are you facing?", answer: "north", xp: 30, type: 'Logical Reasoning' },

    // Puzzles & Logic
    { text: "I am a three-digit number. My tens digit is 5 more than my hundreds digit. My units digit is 8 less than my tens digit. Who am I?", answer: 193, xp: 50, type: 'Logical Reasoning' },
    { text: "Which number is missing in the series: 2, 6, 12, 20, ?, 42", answer: 30, xp: 45, type: 'Logical Reasoning' },

    // Mixed Aptitude
    { text: "If a shopkeeper gives 2 kg sugar free on purchase of 10 kg, what is the effective discount %?", answer: 16.67, xp: 35, type: 'Aptitude' },
    { text: "A sum of $1000 amounts to $1210 in 2 years at simple interest. Find rate of interest.", answer: 10.5, xp: 35, type: 'Aptitude' },
    { text: "The difference between compound and simple interest on $5000 for 2 years at 10% p.a. is?", answer: 50, xp: 40, type: 'Aptitude' },
    { text: "A boat goes 10 km downstream in 1 hour and returns upstream in 1.25 hours. Find speed of stream.", answer: 2, xp: 40, type: 'Aptitude' },

    // Logical Puzzle
    { text: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", answer: "echo", xp: 50, type: 'Logical Reasoning' },
    { text: "You see me once in June, twice in November, and not at all in May. What am I?", answer: "E", xp: 45, type: 'Logical Reasoning' },

    // More Number Series
    { text: "Next in series: 0, 1, 1, 2, 3, 5, ...?", answer: 8, xp: 40, type: 'Logical Reasoning' },
    { text: "Next number: 7, 14, 28, 56, ...?", answer: 112, xp: 35, type: 'Logical Reasoning' },

    // Word Puzzles
    { text: "Unscramble: 'TCA' to form an animal.", answer: "cat", xp: 30, type: 'Logical Reasoning' },
    { text: "Unscramble: 'ODG' to form an animal.", answer: "dog", xp: 30, type: 'Logical Reasoning' },

    // Simple Algebra
    { text: "If 5x - 10 = 20, find x.", answer: 6, xp: 35, type: 'Aptitude' },
    { text: "If 3x + 7 = 25, find x.", answer: 6, xp: 35, type: 'Aptitude' },

    // Time & Work
    { text: "If 5 men can do a job in 10 days, how long will 10 men take?", answer: 5, xp: 35, type: 'Aptitude' },
    { text: "If A can do a work in 12 days and B in 18 days, in how many days will they do it together?", answer: 7.2, xp: 40, type: 'Aptitude' },

    // Probability
    { text: "A bag has 4 red, 3 blue, 2 green balls. Probability of picking red?", answer: 4/9, xp: 35, type: 'Aptitude' },
    { text: "Probability of getting even number on dice?", answer: 0.5, xp: 30, type: 'Aptitude' },
     // Percentages
    { text: "A laptop costs $800 and is sold at 10% discount. Find the selling price.", answer: 720, xp: 30, type: 'Aptitude' },
    { text: "A price rises from $60 to $75. Find the percentage increase.", answer: 25, xp: 30, type: 'Aptitude' },
    { text: "A number decreased by 20% becomes 160. Find the original number.", answer: 200, xp: 35, type: 'Aptitude' },

    // Profit & Loss
    { text: "A shopkeeper buys an article for $250 and sells it for $300. Find profit %.", answer: 20, xp: 35, type: 'Aptitude' },
    { text: "An article bought for $400 is sold at $360. Find loss %.", answer: 10, xp: 35, type: 'Aptitude' },

    // Simple Interest
    { text: "SI on $1500 at 6% per annum for 2 years?", answer: 180, xp: 30, type: 'Aptitude' },
    { text: "Find rate if SI = $120 on $800 for 3 years.", answer: 5, xp: 35, type: 'Aptitude' },

    // Time, Speed & Distance
    { text: "A man runs 12 km in 3 hours. Find his speed.", answer: 4, xp: 30, type: 'Aptitude' },
    { text: "A train covers 150 km in 2.5 hours. Find speed.", answer: 60, xp: 30, type: 'Aptitude' },

    // Ratio & Proportion
    { text: "Divide $900 in the ratio 5:4.", answer: "500,400", xp: 35, type: 'Aptitude' },
    { text: "Two numbers are in ratio 6:7. If sum = 91, find larger number.", answer: 49, xp: 30, type: 'Aptitude' },

    // Averages
    { text: "Average of 12, 15, 18, 21 is?", answer: 16.5, xp: 25, type: 'Aptitude' },
    { text: "Average of 7 numbers is 14. Find their sum.", answer: 98, xp: 25, type: 'Aptitude' },

    // === Logical Reasoning ===
    // Number Series
    { text: "Next in series: 3, 9, 27, 81, ...?", answer: 243, xp: 35, type: 'Logical Reasoning' },
    { text: "Next number: 2, 5, 10, 17, ...?", answer: 26, xp: 40, type: 'Logical Reasoning' },
    { text: "Next number: 1, 4, 10, 19, ...?", answer: 31, xp: 40, type: 'Logical Reasoning' },

    // Analogies
    { text: "Fish is to Water as Bird is to ...?", answer: "air", xp: 30, type: 'Logical Reasoning' },
    { text: "Pen is to Write as Knife is to ...?", answer: "cut", xp: 35, type: 'Logical Reasoning' },

    // Odd One Out
    { text: "Odd one out: 9, 16, 25, 36, 40", answer: 40, xp: 35, type: 'Logical Reasoning' },
    { text: "Odd one out: Rose, Lily, Tulip, Car", answer: "Car", xp: 35, type: 'Logical Reasoning' },

    // Coding-Decoding
    { text: "If SUN = 21, then STAR = ?", answer: 61, xp: 40, type: 'Logical Reasoning' },
    { text: "If CAT = 24, then DOG = ?", answer: 26, xp: 40, type: 'Logical Reasoning' },

    // Blood Relations
    { text: "Pointing to a girl, a man says 'She is my son’s sister.' Who is she?", answer: "daughter", xp: 40, type: 'Logical Reasoning' },
    { text: "A is the father of B. B is the mother of C. How is C related to A?", answer: "grandchild", xp: 35, type: 'Logical Reasoning' },

    // Directions
    { text: "A man walks 8 km east and then 6 km south. Distance from starting point?", answer: 10, xp: 45, type: 'Logical Reasoning' },
    { text: "If you face north and turn left, which direction are you facing?", answer: "west", xp: 30, type: 'Logical Reasoning' },

    // Puzzles & Logic
    { text: "I have keys but no locks. I have space but no rooms. What am I?", answer: "keyboard", xp: 50, type: 'Logical Reasoning' },
    { text: "What comes once in a minute, twice in a moment, but never in a thousand years?", answer: "M", xp: 45, type: 'Logical Reasoning' },

    // Algebra
    { text: "Solve for x: 4x + 7 = 31.", answer: 6, xp: 35, type: 'Aptitude' },
    { text: "Solve: 7x - 5 = 16.", answer: 3, xp: 35, type: 'Aptitude' },

    // Time & Work
    { text: "If 6 men complete a work in 12 days, how long will 4 men take?", answer: 18, xp: 35, type: 'Aptitude' },
    { text: "A can do a job in 10 days, B in 15 days. Days together?", answer: 6, xp: 40, type: 'Aptitude' },

    // Probability
    { text: "Probability of getting a red ball from bag with 5 red, 3 blue?", answer: 5/8, xp: 35, type: 'Aptitude' },
    { text: "Probability of getting a head when a coin is tossed?", answer: 0.5, xp: 30, type: 'Aptitude' },

    // Mixed Logic
    { text: "I am tall when I am young, and short when I am old. What am I?", answer: "candle", xp: 50, type: 'Logical Reasoning' },
    { text: "What has hands but cannot clap?", answer: "clock", xp: 45, type: 'Logical Reasoning' },

    // Number Series
    { text: "Next number: 2, 3, 5, 7, 11, ...?", answer: 13, xp: 35, type: 'Logical Reasoning' },
    { text: "Next number: 1, 1, 2, 6, 24, ...?", answer: 120, xp: 40, type: 'Logical Reasoning' },

    // Simple Algebra
    { text: "If x - 7 = 15, find x.", answer: 22, xp: 35, type: 'Aptitude' },
    { text: "If 2x + 9 = 25, find x.", answer: 8, xp: 35, type: 'Aptitude' },

    // Percentages
    { text: "A sum of $500 is increased by 10%. Find the final amount.", answer: 550, xp: 30, type: 'Aptitude' },
    { text: "A price decreases from $200 to $160. Find % decrease.", answer: 20, xp: 30, type: 'Aptitude' },

    // Profit & Loss
    { text: "Cost price $250, sold for $275. Profit %?", answer: 10, xp: 35, type: 'Aptitude' },
    { text: "CP $400, SP $360. Loss %?", answer: 10, xp: 35, type: 'Aptitude' },
      // Percentages
    { text: "A jacket costs $120. A 25% discount is given. Find the sale price.", answer: 90, xp: 30, type: 'Aptitude' },
    { text: "The price of a product rises from $80 to $100. Find the percentage increase.", answer: 25, xp: 30, type: 'Aptitude' },
    { text: "A number is decreased by 15% and becomes 85. Find the original number.", answer: 100, xp: 35, type: 'Aptitude' },

    // Profit & Loss
    { text: "A watch is bought for $450 and sold for $540. Find profit %.", answer: 20, xp: 35, type: 'Aptitude' },
    { text: "An item bought for $300 is sold for $270. Find loss %.", answer: 10, xp: 35, type: 'Aptitude' },

    // Simple Interest
    { text: "SI on $1000 at 8% p.a. for 3 years?", answer: 240, xp: 30, type: 'Aptitude' },
    { text: "If SI = $150 on $1000 for 5 years, find rate of interest.", answer: 3, xp: 35, type: 'Aptitude' },

    // Time, Speed & Distance
    { text: "A person walks 20 km in 4 hours. Find speed.", answer: 5, xp: 30, type: 'Aptitude' },
    { text: "A train travels 180 km in 3 hours. Find speed.", answer: 60, xp: 30, type: 'Aptitude' },

    // Ratio & Proportion
    { text: "Divide $700 in the ratio 3:4.", answer: "300,400", xp: 35, type: 'Aptitude' },
    { text: "Two numbers in ratio 9:11. Smaller number is 27. Find larger.", answer: 33, xp: 30, type: 'Aptitude' },

    // Averages
    { text: "Average of 20, 25, 30, 35?", answer: 27.5, xp: 25, type: 'Aptitude' },
    { text: "Average of 6 numbers is 18. Find sum.", answer: 108, xp: 25, type: 'Aptitude' },

    // === Logical Reasoning ===
    // Number Series
    { text: "Next in series: 1, 3, 6, 10, 15, ...?", answer: 21, xp: 35, type: 'Logical Reasoning' },
    { text: "Next number: 5, 11, 17, 23, ...?", answer: 29, xp: 40, type: 'Logical Reasoning' },
    { text: "Next number: 2, 6, 12, 20, 30, ...?", answer: 42, xp: 40, type: 'Logical Reasoning' },

    // Analogies
    { text: "Knife is to Cut as Pen is to ...?", answer: "Write", xp: 30, type: 'Logical Reasoning' },
    { text: "Bird is to Fly as Fish is to ...?", answer: "Swim", xp: 35, type: 'Logical Reasoning' },

    // Odd One Out
    { text: "Odd one out: 5, 10, 15, 21", answer: 21, xp: 35, type: 'Logical Reasoning' },
    { text: "Odd one out: Apple, Mango, Banana, Carrot", answer: "Carrot", xp: 35, type: 'Logical Reasoning' },

    // Coding-Decoding
    { text: "If CAT = 312, then DOG = ?", answer: 415, xp: 40, type: 'Logical Reasoning' },
    { text: "If ABC = 123, then XYZ = ?", answer: 242526, xp: 40, type: 'Logical Reasoning' },

    // Blood Relations
    { text: "Pointing to a boy, a woman says 'He is my brother’s son.' Who is he?", answer: "nephew", xp: 40, type: 'Logical Reasoning' },
    { text: "X is the father of Y. Y is the daughter of Z. How is Z related to X?", answer: "spouse", xp: 35, type: 'Logical Reasoning' },

    // Directions
    { text: "A person walks 7 km west, then 24 km north. Distance from start?", answer: 25, xp: 45, type: 'Logical Reasoning' },
    { text: "If you face east and turn left, which direction?", answer: "north", xp: 30, type: 'Logical Reasoning' },

    // Puzzles & Logic
    { text: "I am not alive, but I grow. I don’t have lungs, but I need air. What am I?", answer: "fire", xp: 50, type: 'Logical Reasoning' },
    { text: "The more you take away from me, the bigger I get. What am I?", answer: "hole", xp: 45, type: 'Logical Reasoning' },

    // Algebra
    { text: "Solve: 3x - 7 = 14.", answer: 7, xp: 35, type: 'Aptitude' },
    { text: "Solve: 5x + 8 = 33.", answer: 5, xp: 35, type: 'Aptitude' },

    // Time & Work
    { text: "If 8 men can do a work in 10 days, 4 men can do it in?", answer: 20, xp: 35, type: 'Aptitude' },
    { text: "A can do a job in 6 days, B in 9 days. Days together?", answer: 3.43, xp: 40, type: 'Aptitude' },

    // Probability
    { text: "Probability of picking a king from deck of 52 cards?", answer: 1/13, xp: 35, type: 'Aptitude' },
    { text: "Probability of getting a tail when a coin is tossed?", answer: 0.5, xp: 30, type: 'Aptitude' },

    // Mixed Logic
    { text: "What has a neck but no head?", answer: "bottle", xp: 50, type: 'Logical Reasoning' },
    { text: "What can travel around the world while staying in a corner?", answer: "stamp", xp: 45, type: 'Logical Reasoning' },

    // Number Series
    { text: "Next number: 2, 3, 5, 7, 11, ...?", answer: 13, xp: 35, type: 'Logical Reasoning' },
    { text: "Next number: 1, 2, 6, 24, 120, ...?", answer: 720, xp: 40, type: 'Logical Reasoning' },

    // Simple Algebra
    { text: "If x + 15 = 40, find x.", answer: 25, xp: 35, type: 'Aptitude' },
    { text: "If 6x - 9 = 21, find x.", answer: 5, xp: 35, type: 'Aptitude' },

    // Percentages
    { text: "Price $500 increased by 12%. Find final price.", answer: 560, xp: 30, type: 'Aptitude' },
    { text: "Price $600 decreased by 20%. Find final price.", answer: 480, xp: 30, type: 'Aptitude' },

    // Profit & Loss
    { text: "CP $350, SP $420. Profit %?", answer: 20, xp: 35, type: 'Aptitude' },
    { text: "CP $500, SP $450. Loss %?", answer: 10, xp: 35, type: 'Aptitude' }

];

// Placeholder for adding 450+ more problems
const addMoreProblems = (bank: MathProblem[]) => {
    // This is a placeholder function. In a real implementation, this would involve
    // generating hundreds of additional aptitude and logical reasoning problems.
    return bank;
};

addMoreProblems(problemBank);
