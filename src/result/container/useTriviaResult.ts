import { useTrivia } from "../../core/interaction/triviaContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useTriviaResult = () => {
  const { answerList } = useTrivia();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      answerList.filter((actualItem) => actualItem.isCorrect != null).length !==
      answerList.length
    ) {
      navigate(`/400/Questions_not_answered`);
    }
  }, []);

  return {
    answerList,
  };
};

export default useTriviaResult;
