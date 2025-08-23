'use server';
/**
 * @fileOverview A flow for generating trivia facts.
 * 
 * - generateTrivia - A function that generates a fun fact for a given topic.
 * - TriviaInput - The type for the trivia generation input.
 * - TriviaOutput - The type for the trivia generation output.
 */

import { ai } from '../genkit';
import { z } from 'zod';

const TriviaInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate a trivia fact. e.g., "Dog", "Sun", "Pizza"'),
});
export type TriviaInput = z.infer<typeof TriviaInputSchema>;

const TriviaOutputSchema = z.object({
  fact: z.string().describe('A short, interesting, and fun trivia fact about the given topic.'),
});
export type TriviaOutput = z.infer<typeof TriviaOutputSchema>;

const triviaFlow = ai.defineFlow(
  {
    name: 'triviaFlow',
    inputSchema: TriviaInputSchema,
    outputSchema: TriviaOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      prompt: `
        Generate a single, short, fun, and interesting trivia fact about the following topic.
        The fact should be easy to understand for a general audience.
        Topic: ${input.topic}
      `,
      output: {
        format: 'json',
        schema: TriviaOutputSchema,
      },
      config: {
        temperature: 0.9,
      }
    });
    return response.output!;
  }
);

export async function generateTrivia(input: TriviaInput): Promise<TriviaOutput> {
  return triviaFlow(input);
}
