/**
 * @fileoverview This file is used to configure and start the Genkit development server.
 *
 * It imports the necessary plugins and flows, and then starts the server.
 * When you run `npm run genkit:dev`, this file is executed.
 */
import {googleAI} from '@genkit-ai/googleai';
import {genkit} from 'genkit';
import {start} from 'genkit-cli';

import './flows/quiz-flow';

genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

start();
