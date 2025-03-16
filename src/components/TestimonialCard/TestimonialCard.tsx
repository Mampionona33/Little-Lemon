export interface TestimonialProps {
  name: string;
  text: string;
  rating: number; // Exemple : 3.5, 4.0, etc.
  image: string;
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <span
            key={`full-${i}`}
            className="material-symbols-outlined text-yellow-400"
          >
            star_rate
          </span>
        ))}
        {hasHalfStar && (
          <span
            key="half"
            className="material-symbols-outlined text-yellow-400"
          >
            star_half
          </span>
        )}
        {Array.from(
          { length: 5 - fullStars - (hasHalfStar ? 1 : 0) },
          (_, i) => (
            <span
              key={`empty-${i}`}
              className="material-symbols-outlined text-gray-400"
            >
              star
            </span>
          )
        )}
      </>
    );
  };

  return (
    <div className="w-80 bg-primary p-4 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={testimonial.image}
          alt={testimonial.name}
        />
      </div>
      <div>
        <h2 className="text-center text-slate-50 font-semibold text-xl">
          {testimonial.name}
        </h2>
        <div className="flex justify-center my-2">
          {renderStars(testimonial.rating)}
        </div>
        <p className="text-slate-200 text-left">
          <span className="font-extrabold">&#34; </span>
          {testimonial.text}
          <span className="font-extrabold"> &#34;</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
