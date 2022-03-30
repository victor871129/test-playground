/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import React from "react";
import { SingleAnswer } from "../interaction/baseTypes";
import useExternal from "../interaction/useExternal";

const TriviaContext = React.createContext({
  isLoading: true,
  SetIsUrlEnabled: (_: boolean) => {
    return;
  },
  errorValue: undefined as AxiosError | undefined,
  answerList: [] as SingleAnswer[],
  SetAnswerList: (_: SingleAnswer[]) => {
    return;
  },
  cardIndex: -1,
  SetCardIndex: (_: number) => {
    return;
  },
});

export const TriviaProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TriviaContext.Provider value={useExternal()}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
