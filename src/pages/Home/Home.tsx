import { Link } from "react-router-dom";
import shuchi from "../../assets/images/shuchi_carre.jpg";
import greek_salade from "../../assets/images/greek_salade.jpg";
import bruchetta from "../../assets/images/bruchetta.jpg";
import fish_barbecue_01 from "../../assets/images/fish_barbecue_01.jpg";
import MenuCard, { MenuItem } from "../../components/MenuCard/MenuCard";
import TestimonialCard, {
  TestimonialProps,
} from "../../components/TestimonialCard/TestimonialCard";

const Home = () => {
  const menuItems: MenuItem[] = [
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: 12.99,
      image: greek_salade,
      link: "/order/greek-salad",
    },
    {
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 5.99,
      image: bruchetta,
      link: "/order/bruschetta",
    },
    {
      title: "Grilled fish",
      description:
        "Our Grilled fish is made from grilled fish that has been smeared with garlic and seasoned with salt and olive oil.",
      price: 15,
      image: fish_barbecue_01,
      link: "/order/lemon-dessert",
    },
  ];

  const testimonials: TestimonialProps[] = [
    {
      name: "John Doe",
      text: "I had a great experience at Little Lemon. The food was delicious and the staff was friendly.",
      rating: 4.5,
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Jane Doe",
      text: "I had a great experience at Little Lemon. The food was delicious and the staff was friendly.",
      rating: 4,
      image: "https://picsum.photos/200/400",
    },
    {
      name: "John Doe",
      text: "I had a great experience at Little Lemon. The food was delicious and the staff was friendly.",
      rating: 5,
      image: "https://picsum.photos/200/500",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="w-full min-h-96 bg-primary pt-28 relative">
        <div className="flex flex-row justify-around top-28 absolute">
          <div className="pl-28 flex flex-col gap-4  ">
            <h1 className="font-serif text-5xl text-secondary font-bold">
              Little Lemon
            </h1>
            <h2 className="text-slate-50 text-3xl">Chicago</h2>
            <p className="text-slate-50 text-xl">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <div>
              <Link
                to="/booking"
                className={`bg-secondary text-primary py-2 px-4 
              rounded-md mt-4 cursor-pointer font-semibold 
              hover:border-2 hover:border-secondary 
              hover:bg-transparent hover:text-secondary`}
              >
                Reserve a table
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={shuchi}
              alt="shuchi"
              className="h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="flex pt-14 flex-col ">
        <div className="flex flex-row items-center gap-4 justify-between p-28 pb-14">
          <h1 className="font-serif text-3xl">This weeks special!</h1>
          <div>
            <Link
              to="/menu"
              className={`
              bg-secondary text-primary py-2 px-4 
              rounded-md mt-4 cursor-pointer font-semibold 
              hover:border-2 hover:border-secondary 
              hover:bg-transparent hover:text-prymary`}
            >
              Online Menu
            </Link>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-around gap-8 p-10">
            {menuItems.map((item, index) => (
              <MenuCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-5xl text-primary ">Testimonials</h1>
          <h3 className="text-3xl text-orange-500 font-semibold">
            Read what our customers have to say
          </h3>
        </div>
      </section>

      <div className="flex flex-row justify-around gap-8 p-10">
        {testimonials.map((item, index) => (
          <TestimonialCard testimonial={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
