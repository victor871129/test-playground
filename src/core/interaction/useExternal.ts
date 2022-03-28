import { useEffect, useState } from "react";
import useDataApi from "../transport/useDataApi";

const urlPath = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

const useExternal = () => {
  const [answerList, SetAnswerList] = useState([]);
  const [cardIndex, SetCardIndex] = useState(-1);
  const { dataValue, isLoading, errorValue } = useDataApi(
    urlPath,
    undefined,
    cardIndex === 0
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
    cardIndex,
    SetCardIndex,
  };
};

export default useExternal;
