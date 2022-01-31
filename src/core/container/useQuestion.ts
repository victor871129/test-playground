import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTrivia } from "../interaction/triviaContext";

const useQuestion = () => {
  const { isLoading, errorValue, answerList, SetAnswerList } = useTrivia();
  const navigate = useNavigate();
  const routerParams = useParams();
  const [answerIndex, SetAnswerIndex] = useState(-1);

  useEffect(() => {
    const questionNumber = routerParams.questionNumber;

    console.log(questionNumber);
    //Checking if string has an integer
    if (
      questionNumber != null &&
      /^-?\d+$/.test(questionNumber) &&
      parseInt(questionNumber) <= answerList.length
    ) {
      SetAnswerIndex(parseInt(questionNumber) - 1);
    } else {
      navigate(`/404`);
    }
  }, [routerParams.questionNumber]);

  const goToNext = (answerValue: boolean) => {
    const currentAnswer = answerList[answerIndex];

    const theAnswers = [...answerList];
    theAnswers[answerIndex] = {
      category: currentAnswer.category,
      question: currentAnswer.question,
      correct_answer: currentAnswer.correct_answer,
      isCorrect:
        currentAnswer.correct_answer === (answerValue ? "True" : "False"),
    };

    console.log(
      "sderwr",
      currentAnswer.correct_answer,
      answerValue,
      answerIndex,
      theAnswers
    );
    SetAnswerList(theAnswers);

    navigate(`/question/${answerIndex + 2}`);
  };

  return {
    isLoading,
    errorStatus: errorValue?.request?.status,
    errorValue,
    currentCategory:
      answerList.length > 0 && answerIndex >= 0
        ? answerList[answerIndex].category
        : "",
    currentQuestion:
      answerList.length > 0 && answerIndex >= 0
        ? answerList[answerIndex].question
        : "(Empty list)",
    goToNext,
  };
};

export default useQuestion;
