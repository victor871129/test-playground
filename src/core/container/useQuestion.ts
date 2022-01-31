import { useNavigate, useParams } from "react-router-dom";
import { useTrivia } from "../interaction/triviaContext";

const useQuestion = () => {
  const {
    isLoading,
    errorValue,
    answerList,
    SetAnswerList,
    answerIndex,
    SetAnswerIndex,
  } = useTrivia();
  const navigate = useNavigate();
  const routerParams = useParams();

  const goToNext = (answerValue: boolean) => {
    const currentAnswer = answerList[answerIndex];

    const theAnswers = [...answerList];
    theAnswers[answerIndex] = {
      category: currentAnswer.category,
      question: currentAnswer.question,
      isCorrect: true,
    }; // TODO check isCorrect using answerValue
    SetAnswerList(theAnswers);
    SetAnswerIndex(answerIndex + 1);

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
    isLoading,
    errorStatus: errorValue?.request?.status,
    errorValue,
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
