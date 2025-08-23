/**
 * @fileoverview This file initializes and a global AI instance.
 *
 * It sets up the necessary plugins for the application and exports a singleton
 * `ai` object that can be used across the application to define and run
 * AI flows and other Genkit functionalities.
 */
import {googleAI} from '@genkit-ai/googleai';
import {genkit} from 'genkit';

export const ai = genkit({
  plugins: [googleAI()],
});
