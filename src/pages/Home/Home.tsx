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
    <div className="items-center xl:flex-col xl:flex">
      <section className="w-full min-h-96 bg-primary relative  xl:pt-14">
        <div className="flex flex-col justify-around gap-8 items-center p-8 md:flex-row  xl:absolute top-18 xl:items-start w-full">
          <div className=" flex flex-col gap-4 px-8 xl:pl-28">
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
                Book a table
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={shuchi}
              alt="shuchi"
              className="xl:h-96 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex xl:pt-14 flex-col items-center">
        <div className="flex  xl:w-full flex-col xl:flex-row items-center gap-4 justify-between py-20">
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
          <div className="flex flex-wrap items-center justify-center gap-14 xl:justify-center p-10 xl:flex-row xl:flex-nowrap">
            {menuItems.map((item, index) => (
              <MenuCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col items-center gap-4 text-center p-16">
          <h1 className="font-bold text-5xl text-primary ">Testimonials</h1>
          <h3 className="text-3xl text-orange-500 font-semibold">
            Read what our customers have to say
          </h3>
        </div>
        <div className="flex flex-row justify-center gap-14 p-8 flex-wrap ">
          {testimonials.map((item, index) => (
            <TestimonialCard testimonial={item} key={index} />
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:items-start p-8 xl:w-3/4 ">
        {/* Partie texte à gauche */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 px-10">
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

        {/* Partie images à droite */}
        <div className="md:w-1/2 flex justify-center w-full">
          <div className="xl:relative md:just w-full xl:min-h-[35rem] flex justify-center items-center flex-wrap gap-8 p-4">
            {/* Première image */}
            <img
              src={mario_and_adrian_A}
              alt="mario_and_adrian_A"
              className="w-full xl:w-72 h-96 object-cover shadow-lg rounded-lg xl:relative xl:top-0 xl:left-0 xl:z-10"
            />
            {/* Deuxième image */}
            <img
              src={mario_and_adrian_B}
              alt="mario_and_adrian_B"
              className="w-full xl:w-72 h-96 object-cover shadow-xl rounded-lg xl:absolute xl:top-40 xl:right-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
