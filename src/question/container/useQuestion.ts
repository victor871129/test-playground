import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { htmlDecode } from "../../utils/mainBase";
import { useTrivia } from "../../core/transport/triviaContext";

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

  useEffect(() => {
    const questionNumber = routerParams.questionNumber;

    //Checking if string has an integer
    if (
      questionNumber != null &&
      /^-?\d+$/.test(questionNumber) &&
      parseInt(questionNumber) <= answerList.length
    ) {
      const theIndex = parseInt(questionNumber) - 1;
      SetAnswerIndex(theIndex);
    } else {
      navigate("/error/400", {
        state: { errorValue: "Invalid question number" },
      });
    }
  }, [routerParams.questionNumber]);

  useEffect(() => {
    if (errorValue != null) {
      const statusValue = errorValue?.request?.status;
      const errorStatus = parseInt(statusValue) > 0 ? statusValue : "500";
      navigate(`/error/${errorStatus}`, { state: { errorValue } });
    }
  }, [errorValue]);

  const goToNext = (answerValue: boolean) => {
    const currentAnswer = answerList[answerIndex];
    const isCurrentAnswered = currentAnswer.isCorrect;

    const theAnswers = [...answerList];
    theAnswers[answerIndex] = {
      category: currentAnswer.category,
      question: currentAnswer.question,
      correct_answer: currentAnswer.correct_answer,
      isCorrect:
        currentAnswer.correct_answer === (answerValue ? "True" : "False"),
    };

    SetAnswerList(theAnswers);

    if (isCurrentAnswered == null) {
      if (answerIndex + 1 < answerList.length) {
        navigate(`/question/${answerIndex + 2}`);
      } else {
        navigate("/result");
      }
    } else {
      navigate("/error/400", {
        state: { errorValue: "Question already answered" },
      });
    }
  };

  return {
    isLoading,
    errorValue,
    currentCategory:
      answerList.length > 0 && answerIndex >= 0
        ? answerList[answerIndex].category
        : "",
    currentQuestion:
      answerList.length > 0 && answerIndex >= 0
        ? htmlDecode(answerList[answerIndex].question)
        : "(Empty list)",
    questionProgress: `${answerIndex + 1} of ${answerList.length}`,
    goToNext,
  };
};

export default useQuestion;
