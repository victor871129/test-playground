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

  test("Render from home to question page", async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Begin"));
    const textElement = await screen.findByText("True");
    const falseElement = await screen.findByText("False");
    screen.debug();
    expect(textElement).toBeInTheDocument();
    expect(falseElement).toBeInTheDocument();
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
