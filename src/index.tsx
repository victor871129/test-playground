import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import InitialPage from "./InitialDisplay";
import QuestionDisplay from "./core/presenter/QuestionDisplay";
import { TriviaProvider } from "./core/interaction/triviaContext";

//TODO
//Must not answer again the question, block that
//Qusestions have encoding, remove it

ReactDOM.render(
  <React.StrictMode>
    <TriviaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route
            path="question/:questionNumber"
            element={<QuestionDisplay />}
          />
          <Route
            path="*"
            element={
              <>
                Route not found. <Link to="/">Go to Home</Link>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
