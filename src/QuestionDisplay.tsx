import React from "react";
import useQuestion from "./useQuestion";

const QuestionDisplay = () => {
  const [hasQuestions, currentQuestion, goToNext] = useQuestion();

  return (
    <>
      <header>dfs df</header>
      {hasQuestions && (
        <>
          <section>
            <p>{currentQuestion}</p>
          </section>
          <p></p>
          <footer>
            <button onClick={() => goToNext(true)}>True</button>
          </footer>
        </>
      )}
    </>
  );
};

export default QuestionDisplay;
