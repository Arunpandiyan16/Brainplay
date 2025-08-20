'use server';

import { generateAvatar } from '@/ai/flows/generate-avatar-flow';

const prompts = {
    face: [
      'a stoic male face', 
      'a smiling female face with sunglasses',
      'a face with a large beard',
      'a face with a cybernetic eye',
    ],
    clothes: [
        'a futuristic jacket',
        'a traditional vest',
        'a rugged leather jacket',
        'a simple t-shirt',
    ],
    accessories: [
        'a pair of gold earrings',
        'a futuristic headset',
        'a traditional headscarf',
        'a pair of aviator sunglasses',
    ],
};

function getRandomPrompt(category: keyof typeof prompts) {
    const categoryPrompts = prompts[category];
    return categoryPrompts[Math.floor(Math.random() * categoryPrompts.length)];
}


export async function randomizeAvatar() {
  try {
    const [faceResult, clothesResult, accessoryResult] = await Promise.all([
      generateAvatar({ prompt: getRandomPrompt('face') }),
      generateAvatar({ prompt: getRandomPrompt('clothes') }),
      generateAvatar({ prompt: getRandomPrompt('accessories') }),
    ]);

    if (!faceResult.imageUrl || !clothesResult.imageUrl || !accessoryResult.imageUrl) {
        throw new Error('One or more images failed to generate.');
    }

    return { 
        success: true, 
        data: {
            face: { id: 'ai-face', url: faceResult.imageUrl, hint: 'ai generated face' },
            clothes: { id: 'ai-clothes', url: clothesResult.imageUrl, hint: 'ai generated clothes' },
            accessory: { id: 'ai-accessory', url: accessoryResult.imageUrl, hint: 'ai generated accessory' },
        } 
    };
  } catch (error) {
    console.error('Error in avatar randomization flow:', error);
    return { success: false, error: 'Sorry, I am unable to generate an avatar right now.' };
  }
}
