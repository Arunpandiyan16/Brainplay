'use server';
/**
 * @fileOverview A flow for the Spot the Fake News game.
 * 
 * - generateNewsHeadline - Generates a news headline which is either real or fake.
 * - NewsHeadlineInput - The type for the headline generation input.
 * - NewsHeadlineOutput - The type for the headline generation output.
 */

import { ai } from '../genkit';
import { z } from 'zod';

const NewsHeadlineInputSchema = z.object({
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe('The difficulty level, which influences the subtlety of the headline.'),
});
export type NewsHeadlineInput = z.infer<typeof NewsHeadlineInputSchema>;

const NewsHeadlineOutputSchema = z.object({
  headline: z.string().describe('A news headline that sounds plausible but could be real or fake.'),
  isReal: z.boolean().describe('A boolean indicating whether the headline is based on a real event.'),
  explanation: z.string().describe('A brief explanation of why the story is real or fake. If fake, it should explain the fabrication. If real, it should provide some context.'),
  source: z.string().describe('A plausible-sounding but fake news source name, e.g., "The Daily Chronicle", "Global News Today".')
});
export type NewsHeadlineOutput = z.infer<typeof NewsHeadlineOutputSchema>;

const newsFlow = ai.defineFlow(
  {
    name: 'newsFlow',
    inputSchema: NewsHeadlineInputSchema,
    outputSchema: NewsHeadlineOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-1.5-flash-latest',
      prompt: `
        You are a content creator for a "Spot the Fake News" game.
        Your task is to generate a single news headline based on the given difficulty.
        The headline should be for a general audience, covering topics like science, tech, world events, or weird news.
        About half the time, the headline should be FAKE, and half the time it should be REAL.

        - For a REAL headline, base it on a real, verifiable, and interesting news event. The explanation should confirm its validity with a brief context.
        - For a FAKE headline, create a plausible but entirely fictional story. The explanation must clearly state it's fake and explain why it might sound believable.
        - The 'source' field should always be a fabricated, generic-sounding news source name.
        - Difficulty ${input.difficulty}:
          - Easy: The fake news should be quite obvious or absurd. The real news should be easily recognizable.
          - Medium: The fake news should be more subtle and believable. Real news could be slightly obscure.
          - Hard: The fake news should be very hard to distinguish from reality, often based on a kernel of truth. Real news should be surprising and sound like it could be fake.

        Generate one headline now.
      `,
      output: {
        format: 'json',
        schema: NewsHeadlineOutputSchema,
      },
      config: {
        temperature: 1.2,
      }
    });
    return response.output!;
  }
);

export async function generateNewsHeadline(input: NewsHeadlineInput): Promise<NewsHeadlineOutput> {
  return newsFlow(input);
}
