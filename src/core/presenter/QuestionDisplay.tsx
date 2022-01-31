import React from "react";
import { Link } from "react-router-dom";
import useQuestion from "../container/useQuestion";

const QuestionDisplay = () => {
  const {
    isLoading,
    errorStatus,
    errorValue,
    currentCategory,
    currentQuestion,
    goToNext,
  } = useQuestion();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (errorValue != null) {
    return (
      // TODO move to file apart
      <>
        {errorStatus === 401 && <header>400 Bad Request</header>}
        {errorStatus === 401 && <header>401 Unauthorized</header>}
        {errorStatus === 403 && <header>403 Forbidden</header>}
        {errorStatus === 404 && <header>404 Not Found</header>}
        {errorStatus === 500 && <header>500 Internal Server Error</header>}
        An error{errorStatus != null ? ` ${errorStatus}` : ""} has ocurred.{" "}
        <Link to="/">Go to Home</Link>
        <pre>{JSON.stringify(errorValue)}</pre>
      </>
    );
  }

  return (
    <>
      <header>{currentCategory}</header>
      <section>{currentQuestion}</section>
      <footer>
        <button onClick={() => goToNext(true)}>True</button>
        <button onClick={() => goToNext(false)}>False</button>
      </footer>
    </>
  );
};

export default QuestionDisplay;
