import React from "react";
import ErrorDisplay from "../../utils/presenter/ErrorDisplay";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const {
    isLoading,
    errorStatus,
    errorValue,
    currentCategory,
    currentQuestion,
    questionProgress,
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
        <p>{questionProgress}</p>
      </footer>
    </>
  );
};

export default QuestionDisplay;
