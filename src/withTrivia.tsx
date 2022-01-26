import React, { useState } from "react";
import { WithTriviaProps, SingleAnswer } from "./baseTypes";

const withTrivia = (WrappedComponent: React.ComponentType<WithTriviaProps>) => {
  const theComponent = () => {
    const [answerList, SetAnswerList] = useState<SingleAnswer[]>([]);

    const addAnswer = (isCorrect: boolean) => {
      const questionValue = answerList[answerList.length - 1].questionValue;
      SetAnswerList([...answerList.slice(-1), { questionValue, isCorrect }]);
    };

    return (
      <WrappedComponent
        answerList={answerList}
        setAnswerList={SetAnswerList}
        addAnswer={addAnswer}
      />
    );
  };

  theComponent.displayName = "withTrivia";
  return theComponent;
};

export default withTrivia;
