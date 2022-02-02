import React from "react";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const {
    isLoading,
    currentCategory,
    currentQuestion,
    questionProgress,
    goToNext,
  } = useQuestion();

  if (isLoading) {
    return <>Loading...</>;
  }

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
