import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import InitialPage from "./InitialDisplay";
import QuestionDisplay from "./core/presenter/QuestionDisplay";
import { TriviaProvider } from "./core/interaction/triviaContext";
import ResultDisplay from "./result/presenter/ResultDisplay";
import ErrorDisplay from "./ErrorDisplay";
import BadRequestDisplay from "./BadRequestDisplay";

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
          <Route path="400/:errorReason" element={<BadRequestDisplay />} />
          {/* <Route path="*" element={<ErrorDisplay errorStatus={404} />} /> */}
        </Routes>
      </BrowserRouter>
    </TriviaProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
