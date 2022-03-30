import React, { ErrorInfo } from "react";
import "../styles/styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import RouteDisplay from "./RouteDisplay";

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
      <BrowserRouter>
        <RouteDisplay />
      </BrowserRouter>
    );
  }
}

export default MainDisplay;
