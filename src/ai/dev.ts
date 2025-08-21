/**
 * @fileoverview This file is used to configure and start the Genkit development server.
 *
 * It imports the necessary plugins and flows, and then starts the server.
 * When you run `npm run genkit:dev`, this file is executed.
 */
import { start } from 'genkit-cli';
import { ai } from './genkit'; // This ensures the AI object is configured.

import './flows/quiz-flow';

// The AI object is already configured in `genkit.ts`,
// so we just need to start the server here.
start();
