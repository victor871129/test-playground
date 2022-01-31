import React from "react";

export interface SingleAnswer {
  category: string;
  question: string;
  correct_answer: string;
  isCorrect?: boolean;
}

export interface WithTriviaProps {
  answerList: SingleAnswer[];
  setAnswerList: (answerValues: SingleAnswer[]) => void;
  addAnswer: (isCorrect: boolean) => void;
}

export interface TriviaProps {
  children: React.ReactNode;
}
