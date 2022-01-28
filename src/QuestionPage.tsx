import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();
  const routerParams = useParams();

  return (
    <>
      <header>dfs df</header>
      {answerList.length > 0 && (
        <>
          <section>
            <p>{answerList[answerList.length - 1].questionValue}</p>
          </section>
          <p></p>
          <footer>
            <button
              onClick={() =>
                navigate(
                  `/question/${
                    routerParams.questionNumber == null
                      ? 0
                      : routerParams.questionNumber + 1
                  }`
                )
              }
            >
              True
            </button>
          </footer>
        </>
      )}
    </>
  );
};

export default QuestionPage;
