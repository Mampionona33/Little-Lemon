import mario_and_adrian_A from "../../assets/images/mario_and_adrian_A.jpg";
import mario_and_adrian_B from "../../assets/images/mario_and_adrian_B.jpg";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        About Little Lemon
      </h1>

      <div className="space-y-6 text-lg text-gray-700">
        <p>
          Welcome to Little Lemon, a cozy and vibrant restaurant located in the
          heart of the city. Our passion for fresh, high-quality ingredients and
          authentic flavors has made us a favorite among locals and visitors
          alike.
        </p>
        <p>
          Founded in 2010 by two friends who shared a love for Mediterranean
          cuisine, Little Lemon has grown from a small bistro to a bustling
          eatery known for its delicious dishes and warm atmosphere. Our menu
          features a variety of traditional and modern recipes, all prepared
          with care and served with a smile.
        </p>
        <p>
          At Little Lemon, we believe that food is more than just
          sustenance—it's an experience. Whether you're joining us for a casual
          lunch, a romantic dinner, or a special celebration, we strive to make
          every visit memorable.
        </p>
        <p>
          We are committed to sustainability and source our ingredients from
          local farmers and suppliers whenever possible. This not only supports
          our community but also ensures that our dishes are as fresh and
          flavorful as can be.
        </p>
        <p>
          Thank you for choosing Little Lemon. We look forward to serving you
          and sharing our love for great food and good company.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={mario_and_adrian_A}
          alt="Little Lemon Interior"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <img
          src={mario_and_adrian_B}
          alt="Little Lemon Dish"
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
    </div>
  );
};

export default About;
