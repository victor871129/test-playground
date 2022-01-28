import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import InitialPage from "./InitialPage";
import QuestionPage from "./QuestionDisplay";
import { TriviaProvider } from "./context";

//One HOOK for handling context
//One HOC for retrieving data
//Must not answer again the questions, block that

ReactDOM.render(
  <React.StrictMode>
    <TriviaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="question/:questionNumber" element={<QuestionPage />} />
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
