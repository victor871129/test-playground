/*global describe test expect*/

import React from "react";
import { htmlDecode } from "./core/presenter/htmlDecode";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./core/presenter/App";
import RouteDisplay from "./core/presenter/RouteDisplay";

describe("G2i Tests", () => {
  test("Check htmlDecode with string", () => {
    expect(htmlDecode("&lt;&gt;")).toBe("<>");
  });

  test("Render home page", () => {
    render(<App />);
    const textElement = screen.getByText("Can you score 100%?");
    expect(textElement).toBeInTheDocument();
  });

  test("Render from home to questions to result page", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Begin"));
    for (let i = 0; i < 10 - 1; i++) {
      const textElement = await screen.findByText("False");

      expect(textElement).toBeInTheDocument();

      fireEvent.click(screen.getByText("True"));
    }
    const finalQuestionElement = await screen.findByText("10 of 10");

    expect(finalQuestionElement).toBeInTheDocument();

    fireEvent.click(screen.getByText("False"));
    const resultElement = await screen.findByText("Play again?");

    expect(resultElement).toBeInTheDocument();
  });

  test("Render question page", async () => {
    render(
      <MemoryRouter initialEntries={["/question/1"]}>
        <RouteDisplay />
      </MemoryRouter>
    );

    const textElement = await screen.findByText('"Invalid page call"');
    expect(textElement).toBeInTheDocument();
  });

  test("Render result page", async () => {
    render(
      <MemoryRouter initialEntries={["/result"]}>
        <RouteDisplay />
      </MemoryRouter>
    );

    const textElement = await screen.findByText(
      '"Please answer the questions"'
    );
    expect(textElement).toBeInTheDocument();
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
