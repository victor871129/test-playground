import { useTrivia } from "../../core/persistence/triviaContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { htmlDecode } from "../../core/presenter/htmlDecode";

const useTriviaResult = () => {
  const { answerList, SetAnswerList, SetIsUrlEnabled } = useTrivia();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      answerList == null ||
      answerList.length === 0 ||
      answerList.filter((actualItem) => actualItem.isCorrect != null).length !==
        answerList.length
    ) {
      navigate("/error/400", {
        state: { errorValue: "Please answer the questions" },
      });
    }
  }, []);

  return {
    correctScore: `${
      answerList.filter((actualItem) => actualItem.isCorrect).length
    }/${answerList.length}`,
    answerValues: answerList.map((actualItem) => ({
      answerKey: actualItem.question,
      questionValue: `${actualItem.isCorrect ? "✔️" : "❌"} ${htmlDecode(
        actualItem.question
      )} The answer is ${actualItem.correct_answer}.`,
    })),
    goHome: () => {
      SetIsUrlEnabled(false);
      SetAnswerList([]);
      navigate(`/`);
    },
  };
};

export default useTriviaResult;
