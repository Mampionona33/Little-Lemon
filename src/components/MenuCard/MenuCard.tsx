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
    <div className="flex flex-col gap-4 rounded-lg bg-slate-50 shadow-md justify-between w-min min-h-[35rem] ">
      <img
        src={item.image}
        alt={item.title}
        className="rounded-t-lg min-w-80 "
      />

      <div className="flex flex-col gap-2 p-8 rounded-b-lg space-y-6 ">
        <div className="flex flex-row justify-between">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-lg font-semibold text-orange-500">${item.price}</p>
        </div>
        <p className="text-lg">{item.description}</p>

        <Link
          to={item.link}
          className="flex flex-row justify-between hover:text-orange-500"
        >
          <p>Order for delivery</p>
          <span className="material-symbols-outlined">shopping_basket</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;
