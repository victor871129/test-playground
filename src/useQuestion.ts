import { useNavigate, useParams } from "react-router-dom";
import { useTrivia } from "./triviaContext";

const useQuestion = () => {
  const { answerList, SetAnswerList } = useTrivia();
  const navigate = useNavigate();
  const routerParams = useParams();

  const goToNext = (answerValue: boolean) => {
    const questionValue = answerList[answerList.length - 1].questionValue;

    SetAnswerList([
      ...answerList.slice(-1),
      { questionValue, isCorrect: true }, // TODO check isCorrect using answerValue
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
      answerList == null ? "" : answerList[answerList.length - 1].questionValue,
    goToNext,
  };
};

export default useQuestion;
