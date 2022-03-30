/*global describe test expect*/

import React from "react";
import { htmlDecode } from "../core/presenter/htmlDecode";
import { render, screen, waitFor } from "@testing-library/react";
//import { createMemoryHistory } from "history";
import { MemoryRouter } from "react-router-dom";
import App from "../core/presenter/App";
import RouteDisplay from "../core/presenter/RouteDisplay";

describe("G2i Tests", () => {
  test("Check htmlDecode with string", () => {
    expect(htmlDecode("&lt;&gt;")).toBe("<>");
  });

  test("Render home page", () => {
    render(<App />);
    const linkElement = screen.getByText("Can you score 100%?");
    expect(linkElement).toBeInTheDocument();
  });

  test("Render question page", async () => {
    //const history = createMemoryHistory({ initialEntries: ["/question/1"] });
    render(
      <MemoryRouter initialEntries={["/question/1"]}>
        <RouteDisplay />
      </MemoryRouter>
    );

    await waitFor(() => {
      screen.debug();
      expect(screen.getByText("True")).toBeInTheDocument();
    });

    //const movie = await screen.findByText('True')
    //
    //const linkElement = screen.getByText("Can you score 100%?");
    //expect(movie).toBe(1);
  });

  test("it can pass", () => {
    expect(true).toBe(true);
  });

  test("Object is a function", () => {
    expect(typeof Object).toBe("function");
  });

  test("Array is a function", () => {
    expect(typeof Array).toBe("function");
  });

  test("My Name is John", () => {
    expect("John").toBe("John");
  });
});
