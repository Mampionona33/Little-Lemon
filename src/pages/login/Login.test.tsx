import { describe } from "vitest";
import { render } from "../../../tests/test-utilities";
import Booking from "./Booking";

describe("Booking", () => {
  it("should render", () => {
    const { container } = render(<Booking />);
    expect(container).toBeInTheDocument();
  });
});
