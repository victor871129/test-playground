import React from "react";
import { useParams } from "react-router-dom";
import ErrorDisplay from "./ErrorDisplay";

const ErrorRouteDisplay = () => {
  const routerParams = useParams();
  return (
    <ErrorDisplay
      errorStatus={routerParams.errorStatus}
      errorValue={
        routerParams.errorReason == null
          ? ""
          : routerParams.errorReason.toString()
      }
    />
  );
};

export default ErrorRouteDisplay;
