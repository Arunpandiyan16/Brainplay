export type Game = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

// This type is now defined in the flow file (src/ai/flows/quiz-flow.ts)
// and is exported from there. We keep it here to avoid breaking other components
// that might be using it, but the flow is the source of truth.
export type QuizQuestion = {
    question: string;
    choices: string[];
    answerIndex: number;
    explanation: string;
    category: string;
};
