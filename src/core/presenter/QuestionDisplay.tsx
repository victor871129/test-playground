import React from "react";
import ErrorDisplay from "../../ErrorDisplay";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const {
    isLoading,
    errorStatus,
    errorValue,
    currentCategory,
    currentQuestion,
    goToNext,
  } = useQuestion();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (errorValue != null) {
    return <ErrorDisplay errorStatus={errorStatus} errorValue={errorValue} />;
  }

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
