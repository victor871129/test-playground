import React from "react";
import useTriviaResult from "../container/useTriviaResult";

const ResultDisplay = () => {
  const { answerList } = useTriviaResult();

  return (
    <>
      <header>sdf sdfs</header>
      <section>{JSON.stringify({ answerList })}</section>
      <footer>sdf sdf</footer>
    </>
  );
};

export default ResultDisplay;
