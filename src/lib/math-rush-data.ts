
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

    // Ratios and Proportions
    { text: "The ratio of boys to girls in a class is 3:2. If there are 15 boys, how many girls are there?", answer: 10, xp: 25 },
    { text: "If 5 apples cost $2.50, how much will 8 apples cost?", answer: 4, xp: 25 },
    { text: "A map has a scale of 1cm : 5km. If two cities are 10cm apart on the map, what is the actual distance?", answer: 50, xp: 30 },
    { text: "Divide 60 in the ratio 1:2:3. What is the largest part?", answer: 30, xp: 30 },

    // Averages
    { text: "What is the average of 10, 20, and 30?", answer: 20, xp: 25 },
    { text: "A batsman scores 30, 40, and 50 in three matches. What is his average score?", answer: 40, xp: 25 },
    { text: "The average of 5 numbers is 15. What is their sum?", answer: 75, xp: 30 },

    // Simple Algebra
    { text: "If 2x + 5 = 15, what is the value of x?", answer: 5, xp: 25 },
    { text: "If x/4 = 5, what is the value of x?", answer: 20, xp: 25 },
    { text: "A number is doubled and then 5 is added. The result is 25. What is the number?", answer: 10, xp: 30 },
    { text: "If 3(x - 2) = 18, what is the value of x?", answer: 8, xp: 30 },

    // Time and Distance
    { text: "A car travels at 60 km/h. How far will it travel in 3 hours?", answer: 180, xp: 30 },
    { text: "A train covers 200 km in 4 hours. What is its speed in km/h?", answer: 50, xp: 30 },
    { text: "If you walk at 5 km/h, how long will it take to cover 15 km (in hours)?", answer: 3, xp: 30 },

    // Work and Time
    { text: "If A can do a job in 10 days, what fraction of the job can he do in 1 day?", answer: 10, xp: 30 }
];

    