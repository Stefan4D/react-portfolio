import { render, screen } from "@testing-library/react";

import App from "../App";
import { expect } from "vitest";

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello, world!"
    );
  });
});
