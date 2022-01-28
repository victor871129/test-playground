import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SingleAnswer, TriviaProps } from "../../baseTypes";
import useDataApi from "./useDataApi";
import useStorage from "./useStorage";

const TriviaContext = React.createContext({
  answerList: [] as SingleAnswer[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SetAnswerList: (answerList: SingleAnswer[]) => {
    return;
  },
});

export const TriviaProvider = ({ children }: TriviaProps) => {
  const [answerList, SetAnswerList] = useStorage("answerList", []);

  const urlPath =
    "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"; //TODO generalize
  const { dataValue, isLoading, isError } = useDataApi(urlPath, {}); // TODO initialData

  useEffect(() => {
    console.log(dataValue.results);
    SetAnswerList(dataValue.results);
  }, [dataValue]);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return (
      <>
        An error has ocurred. <Link to="/">Go to Home</Link>
      </>
    );
  }

  return (
    <TriviaContext.Provider value={{ answerList, SetAnswerList }}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
