import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>Welcome to the Trivia Challenge!</header>
      <p>You will be presented with 10 True or False questions</p>
      <p>Can you score 100%?</p>
      <footer>
        <button onClick={() => navigate("/question/1")}>Begin</button>
      </footer>
    </>
  );
};

export default InitialPage;
