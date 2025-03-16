import { Link } from "react-router-dom";
import shuchi from "../../assets/images/shuchi_carre.jpg";
import greek_salade from "../../assets/images/greek_salade.jpg";
import bruchetta from "../../assets/images/bruchetta.jpg";
import fish_barbecue_01 from "../../assets/images/fish_barbecue_01.jpg";
import mario_and_adrian_A from "../../assets/images/mario_and_adrian_A.jpg";
import mario_and_adrian_B from "../../assets/images/mario_and_adrian_B.jpg";
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
          <div className="flex p-28 flex-wrap items-center justify-center gap-14 xl:justify-center xl:p-10 xl:flex-row xl:flex-nowrap">
            {menuItems.map((item, index) => (
              <MenuCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-5xl text-primary ">Testimonials</h1>
          <h3 className="text-3xl text-orange-500 font-semibold">
            Read what our customers have to say
          </h3>
        </div>
        <div className="flex flex-row justify-around gap-8 p-8 flex-wrap w-full">
          {testimonials.map((item, index) => (
            <TestimonialCard testimonial={item} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-row px-20 relative ">
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-primary">Our story</h1>
          <p className="text-lg font-semibold">
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
          </p>
          <p className="text-lg font-semibold">
            They worked hard to make their dream a reality and opened Little
            Lemon in 1999 in Chicago. Since then, the restaurant has become a
            local favorite for its authentic Italian cuisine and warm
            hospitality.
          </p>
        </div>

        <div className="flex justify-center w-1/2 relative">
          <div className="relative w-80 min-h-[35rem] flex  justify-center items-center">
            <img
              src={mario_and_adrian_A}
              alt="mario_and_adrian_A"
              className="w-80  object-cover items-center absolute top-40 left-40 shadow-lg rounded-lg object-right h-96"
            />
            <img
              src={mario_and_adrian_B}
              alt="mario_and_adrian_B"
              className="w-80 object-cover absolute top-0 right-20 shadow-md rounded-lg object-right-bottom h-96"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
