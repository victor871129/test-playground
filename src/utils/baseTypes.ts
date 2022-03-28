import { AxiosError } from "axios";

export interface SingleAnswer {
  category: string;
  question: string;
  correct_answer: string;
  isCorrect: boolean;
}

export interface ErrorProps {
  errorStatus: string | undefined;
  errorValue: AxiosError | string;
}