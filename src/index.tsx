import React from "react";
import ReactDOM from "react-dom";
import "./core/presenter/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./home/presenter/HomeDisplay";
import QuestionDisplay from "./question/presenter/QuestionDisplay";
import { TriviaProvider } from "./core/interaction/triviaContext";
import ResultDisplay from "./result/presenter/ResultDisplay";
import BadRequestDisplay from "./core/presenter/BadRequestDisplay";
import ErrorDisplay from "./core/presenter/ErrorDisplay";

//TODO
// `any` typescript
//Tests
// Comments

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
          <Route path="/result" element={<ResultDisplay />} />
          <Route path="400/:errorReason" element={<BadRequestDisplay />} />
          <Route
            path="*"
            element={
              <ErrorDisplay
                errorStatus={404}
                errorValue={"React route not found"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
