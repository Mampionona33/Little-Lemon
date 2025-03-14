import { describe, expect, it } from "vitest";
import Header from "./Header";
import { render } from "../../../tests/test-utilities";

describe("Header", () => {
  it("should render Header", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it("should render navigation links : Home, About, Booking, Order online, Log in", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Booking")).toBeInTheDocument();
    expect(getByText("Order online")).toBeInTheDocument();
    expect(getByText("Log in")).toBeInTheDocument();
  });
});
