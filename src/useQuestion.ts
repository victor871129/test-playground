import { useNavigate, useParams } from "react-router-dom";
import { useTrivia } from "./context";

const useQuestion = () => {
  const [answerList, SetAnswerList] = useTrivia() as any; // TODO
  const navigate = useNavigate();
  const routerParams = useParams();

  const goToNext = (isAnswerCorrect: boolean) => {
    const questionValue = answerList[answerList.length - 1].questionValue;
    SetAnswerList([
      ...answerList.slice(-1),
      { questionValue, isCorrect: isAnswerCorrect },
    ]);

    navigate(
      `/question/${
        routerParams.questionNumber == null
          ? 0
          : routerParams.questionNumber + 1
      }`
    );
  };

  return [
    answerList.length > 0,
    answerList[answerList.length - 1].questionValue,
    goToNext,
  ];
};

export default useQuestion;
