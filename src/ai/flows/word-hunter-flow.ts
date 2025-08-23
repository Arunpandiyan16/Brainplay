'use server';
/**
 * @fileOverview A flow for generating words for the Word Hunter game.
 * 
 * - generateWord - A function that generates a word puzzle.
 * - WordHunterInput - The type for the word generation input.
 * - WordHunterOutput - The type for the word generation output.
 */

import { ai } from '../genkit';
import { z } from 'zod';

const WordHunterInputSchema = z.object({
  language: z.enum(['English', 'Tamil']).describe('The language of the word.'),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe('The difficulty level, which influences word length and complexity.'),
});
export type WordHunterInput = z.infer<typeof WordHunterInputSchema>;

const WordHunterOutputSchema = z.object({
  word: z.string().describe('The original, unscrambled word.'),
  scrambled: z.string().describe('The word with its letters scrambled.'),
  hint: z.string().describe('A hint or clue for the word.'),
});
export type WordHunterOutput = z.infer<typeof WordHunterOutputSchema>;

const wordHunterPrompt = ai.definePrompt({
  name: 'wordHunterPrompt',
  input: { schema: WordHunterInputSchema },
  output: { schema: WordHunterOutputSchema },
  config: {
    model: 'gemini-pro',
    temperature: 0.8,
  },
  prompt: `
    You are a word game creator. Your task is to generate a word puzzle based on the specified language and difficulty.

    Language: {{{language}}}
    Difficulty: {{{difficulty}}}

    Rules:
    - For 'Easy' difficulty, the word should be 4-5 letters long.
    - For 'Medium' difficulty, the word should be 6-7 letters long.
    - For 'Hard' difficulty, the word should be 8+ letters long.
    - The 'scrambled' field must contain the exact same letters as the 'word' field, just in a different order.
    - The 'hint' should be a simple, clear clue for the word.
    - For Tamil words, ensure the output is in Tamil script.

    Generate a puzzle now.
  `,
});

const wordHunterFlow = ai.defineFlow(
  {
    name: 'wordHunterFlow',
    inputSchema: WordHunterInputSchema,
    outputSchema: WordHunterOutputSchema,
  },
  async (input) => {
    const { output } = await wordHunterPrompt(input);
    return output!;
  }
);

export async function generateWord(input: WordHunterInput): Promise<WordHunterOutput> {
  return wordHunterFlow(input);
}
