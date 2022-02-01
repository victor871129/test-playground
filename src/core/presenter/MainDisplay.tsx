import React from "react";
import "../styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from "../../home/presenter/HomeDisplay";
import QuestionDisplay from "../../question/presenter/QuestionDisplay";
import ResultDisplay from "../../result/presenter/ResultDisplay";
import { TriviaProvider } from "../transport/triviaContext";
import ErrorDisplay from "../../utils/presenter/ErrorDisplay";
import BadRequestDisplay from "../../utils/presenter/BadRequestDisplay";

const MainDisplay = () => {
  return (
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
    </React.StrictMode>
  );
};

export default MainDisplay;
