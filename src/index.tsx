import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import InitialPage from "./InitialDisplay";
import QuestionDisplay from "./core/presenter/QuestionDisplay";
import { TriviaProvider } from "./core/interaction/triviaContext";
import ResultDisplay from "./result/presenter/ResultDisplay";
import ErrorDisplay from "./ErrorDisplay";

//TODO
// any typescript
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
          <Route path="/result" element={<ResultDisplay />} />
          <Route
            path="400"
            element={() => {
              return <ErrorDisplay errorStatus={400} errorValue={} />;
            }}
          />
          <Route
            path="*"
            element={
              <>
                <header>404 Not Found</header>
                Route not found. <Link to="/">Go to Home</Link>
                {/* TODO */}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
