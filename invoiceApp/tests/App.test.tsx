import { render, screen } from "@testing-library/react";
import App from "../src/App";
import { it,expect } from "vitest";
import React from "react";

it("renders without crashing", () => {
  render(<App />);
});
