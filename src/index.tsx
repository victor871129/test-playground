import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "./InitialDisplay";
import QuestionDisplay from "./question/presenter/QuestionDisplay";
import { TriviaProvider } from "./core/interaction/triviaContext";
import ResultDisplay from "./result/presenter/ResultDisplay";
import BadRequestDisplay from "./BadRequestDisplay";
import ErrorDisplay from "./ErrorDisplay";

//TODO
// `any` typescript
//Tests
//Include clear instructions and requirements for how to run the app in a Development environment.

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
