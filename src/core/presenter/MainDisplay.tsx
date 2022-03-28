import React, { ErrorInfo } from "react";
import "../styles/styles.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeDisplay from "../../home/presenter/HomeDisplay";
import QuestionDisplay from "../../question/presenter/QuestionDisplay";
import ResultDisplay from "../../result/presenter/ResultDisplay";
import { TriviaProvider } from "../persistence/triviaContext";
import ErrorDisplay from "../../error/presenter/ErrorDisplay";
import ErrorRouteDisplay from "../../error/presenter/ErrorRouteDisplay";

interface MainState {
  error: Error | undefined;
  errorInfo: ErrorInfo | undefined;
}

class MainDisplay extends React.Component<unknown, MainState> {
  constructor(props: unknown) {
    super(props);
    this.state = { error: undefined, errorInfo: undefined };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  // Error boundary
  render() {
    if (this.state.errorInfo) {
      return (
        <>
          An error has ocurred. <Link to="/">Go to Home</Link>
        </>
      );
    }

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
              <Route
                path="error/:errorStatus"
                element={<ErrorRouteDisplay />}
              />
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
  }
}

export default MainDisplay;
