import React from "react";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const { currentCategory, currentQuestion, questionProgress, goToNext } =
    useQuestion();

  return (
    <>
      <header>{currentCategory}</header>
      <section>{currentQuestion}</section>
      <footer>
        <button onClick={() => goToNext(true)}>True</button>
        <button onClick={() => goToNext(false)}>False</button>
        <p>{questionProgress}</p>
      </footer>
    </>
  );
};

export default QuestionDisplay;
