import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTrivia } from "../../core/persistence/triviaContext";

const useHome = () => {
  const { isLoading, answerList, SetIsUrlEnabled } = useTrivia();
  const navigate = useNavigate();

  useEffect(() => {
    if (answerList == null || answerList.length === 0) {
      return;
    }

    navigate("/question/1");
  }, [answerList]);

  return {
    isLoading,
    goNext: () => SetIsUrlEnabled(true),
  };
};

export default useHome;
