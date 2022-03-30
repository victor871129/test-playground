import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { htmlDecode } from "../../core/presenter/htmlDecode";
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
    if (
      answerList != null &&
      answerList.length > 0 &&
      questionNumber != null &&
      /^-?\d+$/.test(questionNumber) && //Validate if string has an integer
      parseInt(questionNumber) <= 10 &&
      parseInt(questionNumber) > 0 // Validate number range
    ) {
      SetCardIndex(parseInt(questionNumber) - 1);
    } else {
      navigate("/error/400", {
        state: { errorValue: "Invalid page call" },
      });
    }
  }, [answerList, routerParams.questionNumber]);

  useEffect(() => {
    if (errorValue != null) {
      const statusValue = errorValue?.request?.status;
      const errorStatus = statusValue != null ? statusValue.toString() : "500";
      navigate(`/error/${errorStatus}`, { state: { errorValue } });
    }
  }, [errorValue]);

  const goToNext = (answerValue: boolean) => {
    const currentAnswer = answerList[cardIndex];
    const notAnswered = currentAnswer.isCorrect == null;

    const theAnswers = [...answerList];
    theAnswers[cardIndex] = {
      ...currentAnswer,
      isCorrect:
        currentAnswer.correct_answer === (answerValue ? "True" : "False"),
    };

    SetAnswerList(theAnswers);

    if (notAnswered) {
      if (cardIndex + 1 < answerList.length) {
        navigate(`/question/${cardIndex + 2}`);
      } else {
        navigate("/result");
      }
    } else {
      navigate("/error/400", {
        state: { errorValue: "Please answer next question" },
      });
    }
  };

  const hasAnswer = answerList.length > 0 && cardIndex >= 0;

  return {
    isLoading,
    errorValue,
    currentCategory: hasAnswer ? answerList[cardIndex].category : "",
    currentQuestion: hasAnswer
      ? htmlDecode(answerList[cardIndex].question)
      : "",
    questionProgress: `${cardIndex + 1} of ${answerList.length}`,
    goToNext,
  };
};

export default useQuestion;
