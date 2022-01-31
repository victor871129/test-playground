/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { SingleAnswer, TriviaProps } from "../../baseTypes";
import useDataApi from "../transport/useDataApi";
import useStorage from "../transport/useStorage";

const urlPath = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

const TriviaContext = React.createContext({
  newData: () => {
    return;
  },
  isLoading: true,
  errorValue: undefined as AxiosError | undefined,
  answerList: [] as SingleAnswer[],
  SetAnswerList: (answerList: SingleAnswer[]) => {
    return;
  },
});

export const TriviaProvider = ({ children }: TriviaProps) => {
  const [answerList, SetAnswerList] = useStorage("answerList", []);
  const [dataLoad, SetDataLoad] = useState(0);

  const { dataValue, isLoading, errorValue } = useDataApi(
    urlPath,
    undefined,
    dataLoad
  );

  useEffect(() => {
    if (dataValue != null) {
      console.log(dataValue.results);
      SetAnswerList(dataValue.results);
    }
  }, [dataValue]);

  const newData = () => SetDataLoad(dataLoad + 1);

  return (
    <TriviaContext.Provider
      value={{
        newData,
        isLoading,
        errorValue,
        answerList,
        SetAnswerList,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
