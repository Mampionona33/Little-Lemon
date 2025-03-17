import { describe } from "vitest";
import { render } from "../../../tests/test-utilities";
import Login from "./Login";

describe("Login", () => {
  it("should render", () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });
});
