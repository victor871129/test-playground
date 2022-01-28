import React from "react";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const { currentQuestion, goToNext } = useQuestion();

  return (
    <>
      <header>dfs df</header>
      <section>
            <p>{currentQuestion}</p>
      </section>
      <p></p>
      <footer>
        <button onClick={() => goToNext(true)}>True</button>
      </footer>
    </>
  );
};

export default QuestionDisplay;
