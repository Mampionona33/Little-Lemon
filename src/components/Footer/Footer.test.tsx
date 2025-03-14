import { describe } from "vitest";
import { render } from "../../../tests/test-utilities";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render Footer", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
