import { useNavigate, useParams } from "react-router-dom";
import { useTrivia } from "../interaction/triviaContext";

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

    const questionNumber = routerParams.questionNumber;

    navigate(
      `/question/${
        questionNumber != null && /^-?\d+$/.test(questionNumber) //Checking if string has an integer
          ? parseInt(questionNumber) + 1
          : 0
      }`
    );
  };

  return {
    currentCategory:
      answerList != null && answerList.length > 0
        ? answerList[answerList.length - 1].category
        : "",
    currentQuestion:
      answerList != null && answerList.length > 0
        ? answerList[answerList.length - 1].question
        : "(Empty list)",
    goToNext,
  };
};

export default useQuestion;
