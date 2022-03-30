import React from "react";
import useHome from "../container/useHome";

const HomeDisplay = () => {
  const { isLoading, goNext } = useHome();

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <header>Welcome to the Trivia Challenge!</header>
      <p>You will be presented with 10 True or False questions</p>
      <p>Can you score 100%?</p>
      <footer>
        <button onClick={goNext}>Begin</button>
      </footer>
    </>
  );
};

export default HomeDisplay;
