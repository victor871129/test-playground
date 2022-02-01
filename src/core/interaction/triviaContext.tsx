/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { SingleAnswer, TriviaProps } from "../../utils/baseTypes";
import useDataApi from "../transport/useDataApi";
import useStorage from "../persistence/useStorage";

const urlPath = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

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
  const [answerList, SetAnswerList] = useStorage("answerList", []);
  const [answerIndex, SetAnswerIndex] = useState(-1);

  const { dataValue, isLoading, errorValue } = useDataApi(
    urlPath,
    undefined,
    answerIndex === 0
  );

  useEffect(() => {
    if (answerIndex === 0 && dataValue != null) {
      SetAnswerList(dataValue.results);
    }
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
