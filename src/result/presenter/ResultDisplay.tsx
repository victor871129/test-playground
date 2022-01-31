import React from "react";
import useTriviaResult from "../container/useTriviaResult";

const ResultDisplay = () => {
  const { correctScore, answerValues, goHome } = useTriviaResult();

  return (
    <>
      <header>You scored {correctScore}</header>
      <section>
        {answerValues.map((actualItem) => (
          <p key={actualItem.answerKey}>{actualItem.questionValue}</p>
        ))}
      </section>
      <footer>
        <button onClick={goHome}>Play again?</button>
      </footer>
    </>
  );
};

export default ResultDisplay;
