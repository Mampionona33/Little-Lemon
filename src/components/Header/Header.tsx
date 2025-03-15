import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

export interface HeaderLinksProps {
  label: string;
  href: string;
}

const Header = () => {
  const links: HeaderLinksProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Booking", href: "/booking" },
    { label: "Order online", href: "/order-online" },
    { label: "Log in", href: "/login" },
  ];

  return (
    <header className="flex justify-around items-center p-4 bg-slate-50">
      <Link to="/" className="flex items-center ">
        <img src={logo} alt="logo" className="w-48" />
      </Link>
      <nav>
        <ul className="flex gap-2 space-x-4 font-semibold">
          {links.map((link, index) => (
            <li
              key={index}
              className={`relative inline-block after:content-[''] 
                after:absolute after:bottom-0 after:-translate-x-1/2 
                after:w-0 after:h-[3px] after:rounded-full after:bg-primary 
                after:opacity-0 after:transition-all after:duration-300 
                after:ease-in-out hover:after:w-full hover:after:opacity-100 
                hover:after:animate-scaleIn`}
            >
              <Link to={link.href} className="block">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
