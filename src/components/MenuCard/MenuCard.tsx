import { Link } from "react-router-dom";

export interface MenuItem {
  title: string;
  description: string;
  price: number;
  image: string;
  link: string;
}

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="flex flex-col rounded-lg bg-slate-50 shadow-md w-full sm:w-72 md:w-80 min-h-[35rem]">
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="rounded-t-lg w-full h-48 object-cover"
      />

      {/* Contenu */}
      <div className="flex flex-col gap-4 p-6 flex-grow">
        {/* Titre & Prix */}
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-lg font-semibold text-orange-500">${item.price}</p>
        </div>

        {/* Description */}
        <p className="text-lg flex-grow">{item.description}</p>

        {/* Bouton */}
        <Link
          to={item.link}
          className="flex flex-row justify-between items-center hover:text-orange-500 mt-auto"
        >
          <p>Order for delivery</p>
          <span className="material-symbols-outlined">shopping_basket</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
