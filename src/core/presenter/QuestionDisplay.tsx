import React from "react";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const { currentCategory, currentQuestion, goToNext } = useQuestion();

  return (
    <>
      <header>{currentCategory}</header>
      <section>{currentQuestion}</section>
      <footer>
        <button onClick={() => goToNext(true)}>True</button>
        <button onClick={() => goToNext(false)}>False</button>
      </footer>
    </>
  );
};

export default QuestionDisplay;
