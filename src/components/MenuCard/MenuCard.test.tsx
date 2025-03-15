import { describe } from "vitest";
import { render } from "../../../tests/test-utilities";
import MenuCard, { MenuItem } from "./MenuCard";
import shuchi from "../../assets/images/shuchi_carre.jpg";

describe("MenuCard", () => {
  it("should render", () => {
    const menuItems: MenuItem[] = [
      {
        title: "Greek Salad",
        description:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: 12.99,
        image: shuchi,
        link: "/menu",
      },
    ];

    const { container } = render(<MenuCard item={menuItems[0]} />);
    expect(container).toBeInTheDocument();
  });
});
