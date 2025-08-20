'use server';

import { generatePlayerChatMessage } from '@/ai/flows/generate-player-chat-message';
import type { GeneratePlayerChatMessageInput } from '@/ai/flows/generate-player-chat-message';

export async function getPlayerChatMessage(input: GeneratePlayerChatMessageInput) {
  try {
    const result = await generatePlayerChatMessage(input);
    if (!result.author || !result.text) {
      throw new Error('Received an empty response from AI.');
    }
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in player chat message flow:', error);
    return {
      success: false,
      error: 'Sorry, I am unable to generate a message right now.',
    };
  }
}
