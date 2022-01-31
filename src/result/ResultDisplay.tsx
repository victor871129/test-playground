import React from "react";
import { Link } from "react-router-dom";
import { useTrivia } from "../core/interaction/triviaContext";

const QuestionDisplay = () => {
  const { isLoading, errorValue, answerList, answerIndex } = useTrivia();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (errorValue != null) {
    return (
      // TODO move to file apart
      <>
        An error has ocurred. <Link to="/">Go to Home</Link>
        <pre>{JSON.stringify(errorValue)}</pre>
      </>
    );
  }

  return (
    <>
      <header>sdf sdfs</header>
      <section>{JSON.stringify(answerList)}</section>
      <footer>{JSON.stringify(answerIndex)}</footer>
    </>
  );
};

export default QuestionDisplay;
