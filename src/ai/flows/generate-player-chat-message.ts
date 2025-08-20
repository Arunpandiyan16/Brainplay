'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating realistic player chat messages.
 *
 * - generatePlayerChatMessage - A function that generates a player chat message.
 * - GeneratePlayerChatMessageInput - The input type for the generatePlayerChatMessage function.
 * - GeneratePlayerChatMessageOutput - The return type for the generatePlayerChatMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GeneratePlayerChatMessageInputSchema = z.object({
  previousMessages: z.array(z.string()).describe('A list of recent messages in the chat to provide context.'),
});
export type GeneratePlayerChatMessageInput = z.infer<typeof GeneratePlayerChatMessageInputSchema>;

const GeneratePlayerChatMessageOutputSchema = z.object({
  author: z.string().describe("The fictional player's username. Should be creative and sound like a real cyberpunk username."),
  text: z.string().describe("The chat message content. Should be informal and relevant to a sci-fi game like 'Chrono-Cortex', using tech slang."),
});
export type GeneratePlayerChatMessageOutput = z.infer<typeof GeneratePlayerChatMessageOutputSchema>;


export async function generatePlayerChatMessage(input: GeneratePlayerChatMessageInput): Promise<GeneratePlayerChatMessageOutput> {
    return generatePlayerChatMessageFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generatePlayerChatMessagePrompt',
  input: { schema: GeneratePlayerChatMessageInputSchema },
  output: { schema: GeneratePlayerChatMessageOutputSchema },
  prompt: `You are an AI that generates realistic chat messages from players in a cyberpunk game called 'Chrono-Cortex'.

Generate a new, unique chat message from a fictional player. The message should feel authentic to a real player, using tech slang, reacting to in-game corporations, or talking about cyberware.

Here are the last few messages in the chat for context:
{{#each previousMessages}}
- {{this}}
{{/each}}

Do not just repeat or slightly modify the previous messages. Create a completely new and plausible message. Make the author's name creative.`,
});


const generatePlayerChatMessageFlow = ai.defineFlow(
  {
    name: 'generatePlayerChatMessageFlow',
    inputSchema: GeneratePlayerChatMessageInputSchema,
    outputSchema: GeneratePlayerChatMessageOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
