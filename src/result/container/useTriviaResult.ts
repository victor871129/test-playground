import { useTrivia } from "../../core/transport/triviaContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { htmlDecode } from "../../utils/mainBase";

const useTriviaResult = () => {
  const { answerList } = useTrivia();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      answerList.filter((actualItem) => actualItem.isCorrect != null).length !==
      answerList.length
    ) {
      navigate("/error/400", {
        state: { errorValue: "Questions not answered" },
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
    goHome: () => navigate(`/`),
  };
};

export default useTriviaResult;
