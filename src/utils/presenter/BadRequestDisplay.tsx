import React from "react";
import { useParams } from "react-router-dom";
import ErrorDisplay from "./ErrorDisplay";

const BadRequestDisplay = () => {
  const routerParams = useParams();
  return (
    <ErrorDisplay
      errorStatus={400}
      errorValue={
        routerParams.errorReason == null
          ? ""
          : routerParams.errorReason.toString()
      }
    />
  );
};

export default BadRequestDisplay;
