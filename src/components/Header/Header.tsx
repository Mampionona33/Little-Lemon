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
    <header className="flex justify-around items-center p-4 bg-slate-100">
      <div className="flex items-center ">
        <img src={logo} alt="logo" className="w-48" />
      </div>
      <nav>
        <ul className="flex gap-2 space-x-4 font-semibold">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
