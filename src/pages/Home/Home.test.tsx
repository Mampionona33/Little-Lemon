import { describe, expect, it } from "vitest";
import Home from "./Home";
import { render } from "../../../tests/test-utilities";

describe("Home", () => {
  it("should render", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});
