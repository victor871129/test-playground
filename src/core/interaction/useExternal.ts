import { useEffect, useState } from "react";
import useDataApi from "../transport/useDataApi";
import useStorage from "../persistence/useStorage";

const urlPath = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

const useExternal = () => {
  const [answerList, SetAnswerList] = useStorage("answerList", []);
  const [answerIndex, SetAnswerIndex] = useState(-1);
  const { dataValue, isLoading, errorValue } = useDataApi(
    urlPath,
    undefined,
    answerIndex === 0
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
    errorValue,
    answerList,
    SetAnswerList,
    answerIndex,
    SetAnswerIndex,
  };
};

export default useExternal;
