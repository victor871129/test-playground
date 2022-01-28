import React from "react";
import { SingleAnswer, TriviaProps } from "./baseTypes";
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

  return (
    <TriviaContext.Provider value={{ answerList, SetAnswerList }}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
