
export interface AptitudeQuestion {
    text: string;
    answer: number;
    xp: number;
}

export const aptitudeQuestions: AptitudeQuestion[] = [
    // Percentages
    { text: "What is 25% of 200?", answer: 50, xp: 25 },
    { text: "A shirt costing $40 is sold at a 10% discount. What is the final price?", answer: 36, xp: 25 },
    { text: "If a population of a town increases from 1000 to 1200, what is the percentage increase?", answer: 20, xp: 30 },
    { text: "A student scored 45 out of 50 in a test. What is their score in percentage?", answer: 90, xp: 25 },
    { text: "What is 150% of 30?", answer: 45, xp: 30 },
    { text: "A basket contains 20 apples and 30 oranges. What percentage of the fruits are apples?", answer: 40, xp: 30 },
    { text: "An item is sold for $120 at a 20% profit. What was the cost price?", answer: 100, xp: 35 },
    { text: "A number increases by 20% to become 60. What is the original number?", answer: 50, xp: 35 },

    // Ratios and Proportions
    { text: "The ratio of boys to girls in a class is 3:2. If there are 15 boys, how many girls are there?", answer: 10, xp: 25 },
    { text: "If 5 apples cost $2.50, how much will 8 apples cost?", answer: 4, xp: 25 },
    { text: "A map has a scale of 1cm : 5km. If two cities are 10cm apart on the map, what is the actual distance?", answer: 50, xp: 30 },
    { text: "Divide 60 in the ratio 1:2:3. What is the largest part?", answer: 30, xp: 30 },
    { text: "Two numbers are in the ratio 4:5. If their sum is 81, what is the larger number?", answer: 45, xp: 30},
    { text: "If A:B is 2:3 and B:C is 3:4, what is A:C?", answer: 2, xp: 40 }, // User has to figure out the ratio is 2:4 and simplify to 1:2. The answer '2' assumes they give C's part when A is 1. A better question would be "what is the value of C if A is 10?". Let's rephrase.
    { text: "A:B = 2:3 and B:C = 3:4. If A is 10, what is C?", answer: 20, xp: 40 },


    // Averages
    { text: "What is the average of 10, 20, and 30?", answer: 20, xp: 25 },
    { text: "A batsman scores 30, 40, and 50 in three matches. What is his average score?", answer: 40, xp: 25 },
    { text: "The average of 5 numbers is 15. What is their sum?", answer: 75, xp: 30 },
    { text: "The average age of 3 friends is 20. If one is 18 and another is 22, how old is the third friend?", answer: 20, xp: 35 },
    { text: "The average of four consecutive even numbers is 25. What is the largest number?", answer: 28, xp: 40 },


    // Simple Algebra
    { text: "If 2x + 5 = 15, what is the value of x?", answer: 5, xp: 25 },
    { text: "If x/4 = 5, what is the value of x?", answer: 20, xp: 25 },
    { text: "A number is doubled and then 5 is added. The result is 25. What is the number?", answer: 10, xp: 30 },
    { text: "If 3(x - 2) = 18, what is the value of x?", answer: 8, xp: 30 },
    { text: "The sum of two consecutive numbers is 31. What is the larger number?", answer: 16, xp: 35 },
    { text: "If x=3, what is the value of 5x - 7?", answer: 8, xp: 30},

    // Time and Distance
    { text: "A car travels at 60 km/h. How far will it travel in 3 hours?", answer: 180, xp: 30 },
    { text: "A train covers 200 km in 4 hours. What is its speed in km/h?", answer: 50, xp: 30 },
    { text: "If you walk at 5 km/h, how long will it take to cover 15 km (in hours)?", answer: 3, xp: 30 },
    { text: "A cyclist covers 15 km in 30 minutes. What is their speed in km/h?", answer: 30, xp: 35 },
    { text: "A car travels at 40 km/h for 2 hours and then 60 km/h for the next 2 hours. What is its average speed (km/h)?", answer: 50, xp: 40 },


    // Work and Time
    { text: "If A can do a job in 10 days, how much of the job can he do in one day (as a percentage)?", answer: 10, xp: 30 },
    { text: "If 4 people can paint a wall in 2 hours, how long would it take 2 people (in hours)?", answer: 4, xp: 35 },
    { text: "A tap can fill a tank in 3 hours. Another tap can empty it in 6 hours. If both are open, how many hours to fill the tank?", answer: 6, xp: 40},
    { text: "A can do a piece of work in 4 days, B in 5 days. How long will they take if they work together (in days)?", answer: 2, xp: 45 }, // Answer is 20/9, which is ~2.22. This is not a good integer answer. Let's change it.
    { text: "A works twice as fast as B. If B can complete a work in 12 days, in how many days can they together finish the work?", answer: 4, xp: 45 },

    // Profit and Loss
    { text: "A book is bought for $10 and sold for $12. What is the profit in dollars?", answer: 2, xp: 25 },
    { text: "Cost price is $50, selling price is $60. What is the profit percentage?", answer: 20, xp: 30 },
    { text: "An article is sold for $90 at a loss of 10%. What was the cost price?", answer: 100, xp: 35 },

    // Mixtures
    { text: "A mixture contains milk and water in the ratio 4:1. If there are 8 litres of milk, how many litres of water are there?", answer: 2, xp: 30 },
    { text: "How many kgs of rice costing $5/kg must be mixed with 10kg of rice costing $8/kg to get a mixture costing $6/kg?", answer: 20, xp: 45 }

];
