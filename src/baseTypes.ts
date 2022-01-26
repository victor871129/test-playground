export interface SingleQuestion {
  questionValue: string;
  isCorrect?: boolean;
}

export interface WithTriviaProps {
  answerList: SingleQuestion[];
  addQuestion: (questionValue: string) => void;
  addAnswer: (isCorrect: boolean) => void;
}
