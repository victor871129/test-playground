import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { htmlDecode } from "../../utils/mainBase";
import { useTrivia } from "../../core/persistence/triviaContext";

const useQuestion = () => {
  const {
    isLoading,
    errorValue,
    answerList,
    SetAnswerList,
    cardIndex,
    SetCardIndex,
  } = useTrivia();
  const navigate = useNavigate();
  const routerParams = useParams();

  useEffect(() => {
    const questionNumber = routerParams.questionNumber;

    //Checking if string has an integer
    if (questionNumber != null && /^-?\d+$/.test(questionNumber)) {
      const theIndex = parseInt(questionNumber) - 1;
      SetCardIndex(theIndex);
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
    const currentAnswer = answerList[cardIndex];
    const isCurrentAnswered = currentAnswer.isCorrect;

    const theAnswers = [...answerList];
    theAnswers[cardIndex] = {
      category: currentAnswer.category,
      question: currentAnswer.question,
      correct_answer: currentAnswer.correct_answer,
      isCorrect:
        currentAnswer.correct_answer === (answerValue ? "True" : "False"),
    };

    SetAnswerList(theAnswers);

    if (isCurrentAnswered == null) {
      if (cardIndex + 1 < answerList.length) {
        navigate(`/question/${cardIndex + 2}`);
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
      answerList.length > 0 && cardIndex >= 0
        ? answerList[cardIndex].category
        : "",
    currentQuestion:
      answerList.length > 0 && cardIndex >= 0
        ? htmlDecode(answerList[cardIndex].question)
        : "(Empty list)",
    questionProgress: `${cardIndex + 1} of ${answerList.length}`,
    goToNext,
  };
};

export default useQuestion;
