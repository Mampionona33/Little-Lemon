import { describe } from "vitest";
import { render } from "../../../tests/test-utilities";
import OrderOnline from "./OrderOnline";

describe("OrderOnline", () => {
  it("should render", () => {
    const { container } = render(<OrderOnline />);
    expect(container).toBeInTheDocument();
  });
});
