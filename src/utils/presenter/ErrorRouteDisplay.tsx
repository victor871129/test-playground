import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ErrorDisplay from "./ErrorDisplay";

const ErrorRouteDisplay = () => {
  const routerParams = useParams();
  const { state } = useLocation() as { state: { errorValue: string } };
  return (
    <>
      <ErrorDisplay
        errorStatus={routerParams.errorStatus}
        errorValue={state.errorValue != null ? state.errorValue.toString() : ""}
      />
    </>
  );
};

export default ErrorRouteDisplay;
