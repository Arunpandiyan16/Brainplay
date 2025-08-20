'use server';
/**
 * @fileOverview This file defines a Genkit flow for interactive conversations with NPCs in a virtual game world.
 *
 * - npcChat - A function that initiates and manages the NPC chat flow.
 * - NPCChatInput - The input type for the npcChat function.
 * - NPCChatOutput - The return type for the npcChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NPCChatInputSchema = z.object({
  userInput: z.string().describe('The user input message to the NPC.'),
  npcName: z.string().describe('The name of the NPC.'),
  npcPersonality: z.string().describe('The personality of the NPC.'),
  gameContext: z.string().describe('The current context of the game.'),
});
export type NPCChatInput = z.infer<typeof NPCChatInputSchema>;

const NPCChatOutputSchema = z.object({
  npcResponse: z.string().describe('The NPC response to the user input.'),
});
export type NPCChatOutput = z.infer<typeof NPCChatOutputSchema>;

export async function npcChat(input: NPCChatInput): Promise<NPCChatOutput> {
  return npcChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'npcChatPrompt',
  input: {schema: NPCChatInputSchema},
  output: {schema: NPCChatOutputSchema},
  prompt: `You are roleplaying as {{npcName}}, an NPC in a virtual game world. Your personality is {{npcPersonality}}. The current game context is {{gameContext}}.

User input: {{userInput}}

Respond as {{npcName}} would, given your personality and the game context. Keep your response concise and relevant to the conversation.`,
});

const npcChatFlow = ai.defineFlow(
  {
    name: 'npcChatFlow',
    inputSchema: NPCChatInputSchema,
    outputSchema: NPCChatOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
