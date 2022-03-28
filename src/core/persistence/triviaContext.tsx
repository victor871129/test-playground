/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import React from "react";
import { SingleAnswer, TriviaProps } from "../../utils/baseTypes";
import useExternal from "../interaction/useExternal";

const TriviaContext = React.createContext({
  isLoading: true,
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

export const TriviaProvider = ({ children }: TriviaProps) => {
  return (
    <TriviaContext.Provider value={useExternal()}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
