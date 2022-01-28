import React from "react";
import { TriviaProps } from "./baseTypes";
import useStorage from "./useStorage";

const TriviaContext = React.createContext(null);

export const TriviaProvider = ({ children }: TriviaProps) => {
  const [answerList, SetAnswerList] = useStorage("answerList", []);

  return (
    <TriviaContext.Provider value={{ answerList, SetAnswerList }}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => React.useContext(TriviaContext);
