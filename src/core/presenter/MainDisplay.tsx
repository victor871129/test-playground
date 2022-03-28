import React from "react";
import "../styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeDisplay from "../../home/presenter/HomeDisplay";
import QuestionDisplay from "../../question/presenter/QuestionDisplay";
import ResultDisplay from "../../result/presenter/ResultDisplay";
import { TriviaProvider } from "../persistence/triviaContext";
import ErrorDisplay from "../../error/presenter/ErrorDisplay";
import ErrorRouteDisplay from "../../error/presenter/ErrorRouteDisplay";

const MainDisplay = () => {
  return (
    <React.StrictMode>
      <TriviaProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeDisplay />} />
            <Route
              path="question/:questionNumber"
              element={<QuestionDisplay />}
            />
            <Route path="/result" element={<ResultDisplay />} />
            <Route path="error/:errorStatus" element={<ErrorRouteDisplay />} />
            <Route
              path="*"
              element={
                <ErrorDisplay
                  errorStatus={"404"}
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
