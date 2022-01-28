export interface SingleAnswer {
  questionValue: string;
  isCorrect?: boolean;
}

export interface WithTriviaProps {
  answerList: SingleAnswer[];
  setAnswerList: (answerValues: SingleAnswer[]) => void;
  addAnswer: (isCorrect: boolean) => void;
}

export interface TriviaProps {
  children: any; // TODO any
}