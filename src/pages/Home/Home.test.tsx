import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("should render", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
