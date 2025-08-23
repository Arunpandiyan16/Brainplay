'use server';
/**
 * @fileOverview A flow for generating quiz questions.
 * 
 * - generateQuizQuestion - A function that generates a quiz question.
 * - QuizQuestion - The type for a quiz question.
 */

import { ai } from '../genkit';
import { z } from 'zod';

const QuizQuestionInputSchema = z.object({
  category: z.string().describe('The category of the quiz question. Examples: General Knowledge, Movies, Cricket, Tech, Tamil Nadu GK'),
});

const QuizQuestionSchema = z.object({
  question: z.string().describe('The quiz question.'),
  choices: z.array(z.string()).length(4).describe('An array of 4 possible answers.'),
  answerIndex: z.number().min(0).max(3).describe('The index of the correct answer in the choices array.'),
  explanation: z.string().describe('A brief explanation of the correct answer.'),
  category: z.string().describe('The category of the question, which should match the input category.'),
});
export type QuizQuestion = z.infer<typeof QuizQuestionSchema>;

const quizPrompt = ai.definePrompt({
  name: 'quizPrompt',
  input: { schema: QuizQuestionInputSchema },
  output: { schema: QuizQuestionSchema },
  config: {
    model: 'gemini-pro',
    temperature: 1, // Increase creativity for more varied questions
  },
  prompt: `
    You are a quiz master. Generate a challenging and interesting quiz question for the given category.
    The question should have 4 choices, with one clear correct answer.
    Provide a brief explanation for the correct answer.
    Ensure the generated question and the category field in the output matches the specified input category.

    Category: {{{category}}}
  `,
});

const quizFlow = ai.defineFlow(
  {
    name: 'quizFlow',
    inputSchema: QuizQuestionInputSchema,
    outputSchema: QuizQuestionSchema,
  },
  async (input) => {
    const { output } = await quizPrompt(input);
    return output!;
  }
);

export async function generateQuizQuestion(input: z.infer<typeof QuizQuestionInputSchema>): Promise<QuizQuestion> {
  return quizFlow(input);
}
