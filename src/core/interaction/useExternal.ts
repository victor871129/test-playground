import { useEffect, useState } from "react";
import { SingleAnswer } from "./baseTypes";
import useDataApi from "../transport/useDataApi";

const urlPath = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

const useExternal = () => {
  const [answerList, SetAnswerList] = useState([] as SingleAnswer[]);
  const [cardIndex, SetCardIndex] = useState(-1);
  const [isUrlEnabled, SetIsUrlEnabled] = useState(false);
  const { dataValue, isLoading, errorValue } = useDataApi(
    urlPath,
    undefined,
    isUrlEnabled
  );

  useEffect(() => {
    if (
      dataValue != null &&
      dataValue.results != null &&
      dataValue.results.length > 0
    ) {
      SetAnswerList(dataValue.results);
    }
  }, [dataValue]);

  return {
    isLoading,
    SetIsUrlEnabled,
    errorValue,
    answerList,
    SetAnswerList,
    cardIndex,
    SetCardIndex,
  };
};

export default useExternal;
