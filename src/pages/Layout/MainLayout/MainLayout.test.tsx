import { describe, it } from "vitest";
import MainLayout from "./MainLayout";
import { render } from "../../../../tests/test-utilities";

describe("MainLayout", () => {
  it("should render MainLayout", () => {
    const { container } = render(<MainLayout />);
    expect(container).toBeInTheDocument();
  });
});
