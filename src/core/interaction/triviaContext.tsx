/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import React, { useEffect } from "react";
import { SingleAnswer, TriviaProps } from "../../baseTypes";
import useDataApi from "../transport/useDataApi";
import useStorage from "../transport/useStorage";

const TriviaContext = React.createContext({
  isLoading: false,
  errorValue: undefined as AxiosError | undefined,
  answerList: [] as SingleAnswer[],
  SetAnswerList: (answerList: SingleAnswer[]) => {
    return;
  },
  answerIndex: 0,
  SetAnswerIndex: (answerIndex: number) => {
    return;
  },
});

export const TriviaProvider = ({ children }: TriviaProps) => {
  const [answerList, SetAnswerList] = useStorage("answerList", []);
  const [answerIndex, SetAnswerIndex] = useStorage("answerIndex", 0);

  const urlPath =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"; //TODO generalize
  const { dataValue, isLoading, errorValue } = useDataApi(urlPath, undefined);

  useEffect(() => {
    console.log(dataValue.results);
    SetAnswerList(dataValue.results);
  }, [dataValue]);

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
