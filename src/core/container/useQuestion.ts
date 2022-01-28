import { useNavigate, useParams } from "react-router-dom";
import { useTrivia } from "../transport/triviaContext";

const useQuestion = () => {
  const { answerList, SetAnswerList } = useTrivia();
  const navigate = useNavigate();
  const routerParams = useParams();

  const goToNext = (answerValue: boolean) => {
    const lastAnswer = answerList[answerList.length - 1];

    SetAnswerList([
      ...answerList.slice(-1),
      {
        category: lastAnswer.category,
        question: lastAnswer.question,
        isCorrect: true,
      }, // TODO check isCorrect using answerValue
    ]);

    navigate(
      `/question/${
        routerParams.questionNumber == null
          ? 0
          : routerParams.questionNumber + 1
      }`
    );
  };

  return {
    currentQuestion:
      answerList == null || answerList.length === 0
        ? "(Empty list)"
        : answerList[answerList.length - 1].questionValue,
    goToNext,
  };
};

export default useQuestion;
