'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating mission briefings.
 *
 * - generateMissionBriefing - A function that generates a mission briefing.
 * - GenerateMissionBriefingInput - The input type for the generateMissionBriefing function.
 * - GenerateMissionBriefingOutput - The return type for the generateMissionBriefing function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateMissionBriefingInputSchema = z.object({
  missionTitle: z.string().describe('The title of the location or echo.'),
  missionDescription: z.string().describe('The short description of the location or echo.'),
});
export type GenerateMissionBriefingInput = z.infer<typeof GenerateMissionBriefingInputSchema>;

const GenerateMissionBriefingOutputSchema = z.object({
  briefing: z.string().describe("A detailed, narrative-style memory or vision from the perspective of an ancient spirit. This should be engaging, cryptic, and fit a mystical, fantasy theme. It should evoke a sense of loss and hope."),
  objectives: z.array(z.string()).describe('A list of clear, actionable trials or tasks for the player to complete to restore the location.'),
});
export type GenerateMissionBriefingOutput = z.infer<typeof GenerateMissionBriefingOutputSchema>;

export async function generateMissionBriefing(
  input: GenerateMissionBriefingInput
): Promise<GenerateMissionBriefingOutput> {
  return generateMissionBriefingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMissionBriefingPrompt',
  input: { schema: GenerateMissionBriefingInputSchema },
  output: { schema: GenerateMissionBriefingOutputSchema },
  prompt: `You are the "Voice of Aetherium", an ancient, ethereal entity in the world of "Aetherium: The Last Signal".
Your task is to provide a memory fragment (an "Echo") to the player, the Signal Tender. The echo should be immersive, detailed, and fit the mystical fantasy theme of a world slowly being lost to a corrupting "Static".
Expand on the provided location title and description to create a compelling narrative. Use poetic, evocative language.
Conclude with a clear, numbered list of trials the player must undertake to restore the signal at this location.

Location: {{missionTitle}}
Description: {{missionDescription}}

Generate the echo now.`,
});

const generateMissionBriefingFlow = ai.defineFlow(
  {
    name: 'generateMissionBriefingFlow',
    inputSchema: GenerateMissionBriefingInputSchema,
    outputSchema: GenerateMissionBriefingOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
