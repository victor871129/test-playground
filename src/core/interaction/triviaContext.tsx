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
});

export const TriviaProvider = ({ children }: TriviaProps) => {
  const [answerList, SetAnswerList] = useStorage("answerList", []);

  const urlPath =
    answerList.length > 0
      ? ""
      : "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"; //TODO generalize in .env
  const { dataValue, isLoading, errorValue } = useDataApi(urlPath, undefined);

  useEffect(() => {
    if (dataValue != null) {
      console.log(dataValue.results);
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
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
