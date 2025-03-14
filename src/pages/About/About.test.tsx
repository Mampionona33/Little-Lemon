import { describe, expect, it } from "vitest";
import About from "./About";
import { render } from "../../../tests/test-utilities";

describe("About", () => {
  it("should render", () => {
    const { container } = render(<About />);
    expect(container).toBeInTheDocument();
  });
});
