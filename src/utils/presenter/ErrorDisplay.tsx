import React from "react";
import { Link } from "react-router-dom";
import { ErrorProps } from "../baseTypes";

const ErrorDisplay = ({ errorStatus, errorValue }: ErrorProps) => (
  <>
    {errorStatus === 400 && <header>400 Bad Request</header>}
    {errorStatus === 401 && <header>401 Unauthorized</header>}
    {errorStatus === 403 && <header>403 Forbidden</header>}
    {errorStatus === 404 && <header>404 Not Found</header>}
    {errorStatus === 500 && <header>500 Internal Server Error</header>}
    An {errorStatus != null ? ` ${errorStatus} status` : ""} error has ocurred.{" "}
    <Link to="/">Go to Home</Link>
    <pre>{JSON.stringify(errorValue)}</pre>
  </>
);

export default ErrorDisplay;
