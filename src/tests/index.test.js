/*global describe test expect*/

import { htmlDecode } from "../core/presenter/htmlDecode";

describe("G2i Tests", () => {
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

  test("Check htmlDecode with string", () => {
    expect(htmlDecode("&lt;&gt;")).toBe("<>");
  });
});
