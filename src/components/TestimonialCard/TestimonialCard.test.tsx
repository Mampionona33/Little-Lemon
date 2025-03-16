import { render, screen } from "../../../tests/test-utilities";
import TestimonialCard, { TestimonialProps } from "./TestimonialCard";

describe("TestimonialCard", () => {
  it("should render testimonial details correctly", () => {
    const testimonial: TestimonialProps = {
      name: "John Doe",
      text: "I had a great experience at Little Lemon. The food was delicious and the staff was friendly.",
      rating: 4.5,
      image: "https://picsum.photos/200/300",
    };

    render(<TestimonialCard testimonial={testimonial} />);

    expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    expect(screen.getByText(testimonial.text)).toBeInTheDocument();
    expect(screen.getByAltText(testimonial.name)).toBeInTheDocument();
  });

  it("should display the correct number of stars based on rating", () => {
    const testimonial: TestimonialProps = {
      name: "Jane Doe",
      text: "Amazing food and service!",
      rating: 3.5,
      image: "https://picsum.photos/200/300",
    };

    render(<TestimonialCard testimonial={testimonial} />);

    // Vérifier le nombre d'étoiles pleines
    expect(screen.getAllByText("star_rate")).toHaveLength(3);

    // Vérifier la présence d'une demi-étoile
    expect(screen.getByText("star_half")).toBeInTheDocument();

    // Vérifier le nombre d'étoiles vides
    expect(screen.getAllByText("star")).toHaveLength(1);
  });
});
