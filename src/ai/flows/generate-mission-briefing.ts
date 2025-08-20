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
  missionTitle: z.string().describe('The title of the mission.'),
  missionDescription: z.string().describe('The short description of the mission.'),
});
export type GenerateMissionBriefingInput = z.infer<typeof GenerateMissionBriefingInputSchema>;

const GenerateMissionBriefingOutputSchema = z.object({
  briefing: z.string().describe("A detailed, narrative-style mission briefing from the perspective of an AI fixer. This should be engaging, cryptic, and fit a cyberpunk theme."),
  objectives: z.array(z.string()).describe('A list of clear, actionable objectives for the player to complete.'),
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
  prompt: `You are "Silas", a grizzled information broker in the cyberpunk game 'Chrono-Cortex'.
Your task is to provide a mission briefing to the player (an operative). The briefing should be immersive, detailed, and fit the sci-fi corporate espionage theme.
Expand on the provided mission title and description to create a compelling narrative. Use tech-heavy slang.
Conclude with a clear, numbered list of objectives for the player.

Contract Title: {{missionTitle}}
Contract Description: {{missionDescription}}

Generate the mission briefing now.`,
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
