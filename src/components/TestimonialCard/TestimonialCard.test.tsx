import { render, screen } from "../../../tests/test-utilities";
import TestimonialCard, { TestimonialProps } from "./TestimonialCard";

describe("TestimonialCard", () => {
  it("should render", () => {
    const testimonial: TestimonialProps = {
      name: "John Doe",
      text: "I had a great experience at Little Lemon. The food was delicious and the staff was friendly.",
      rating: 5,
      image: "https://picsum.photos/200/300",
    };
    render(<TestimonialCard testimonial={testimonial} />);
    expect(screen.getByText(testimonial.name)).toBeInTheDocument();
    expect(screen.getByText(testimonial.text)).toBeInTheDocument();
    expect(screen.getByAltText(testimonial.name)).toBeInTheDocument();
  });
});
