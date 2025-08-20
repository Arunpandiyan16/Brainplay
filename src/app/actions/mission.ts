'use server';

import {
  generateMissionBriefing,
  type GenerateMissionBriefingInput,
} from '@/ai/flows/generate-mission-briefing';

export async function getMissionBriefing(input: GenerateMissionBriefingInput) {
  try {
    const result = await generateMissionBriefing(input);
    if (!result.briefing || !result.objectives) {
      throw new Error('Received an empty response from AI.');
    }
    return { success: true, data: result };
  } catch (error) {
    console.error('Error in mission briefing flow:', error);
    return {
      success: false,
      error: 'Sorry, I am unable to generate a briefing right now.',
    };
  }
}
