'use server';

import { npcChat } from '@/ai/flows/npc-chat';
import type { NPCChatInput } from '@/ai/flows/npc-chat';

export async function handleNpcChat(input: NPCChatInput) {
  try {
    const result = await npcChat(input);
    if (!result.npcResponse) {
      throw new Error('Received an empty response from AI.');
    }
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in NPC chat flow:', error);
    return { success: false, error: 'The spirits are silent right now.' };
  }
}
