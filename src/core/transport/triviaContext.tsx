/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import React from "react";
import { SingleAnswer, TriviaProps } from "../../utils/baseTypes";
import useExternal from "../interaction/useExternal";

const TriviaContext = React.createContext({
  isLoading: true,
  errorValue: undefined as AxiosError | undefined,
  answerList: [] as SingleAnswer[],
  SetAnswerList: (answerList: SingleAnswer[]) => {
    return;
  },
  answerIndex: -1,
  SetAnswerIndex: (answerIndex: number) => {
    return;
  },
});

export const TriviaProvider = ({ children }: TriviaProps) => {
  const {
    isLoading,
    errorValue,
    answerList,
    SetAnswerList,
    answerIndex,
    SetAnswerIndex,
  } = useExternal();

  return (
    <TriviaContext.Provider
      value={{
        isLoading,
        errorValue,
        answerList,
        SetAnswerList,
        answerIndex,
        SetAnswerIndex,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
