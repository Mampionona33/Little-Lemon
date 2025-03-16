import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/logo.jpg";

export interface HeaderLinksProps {
  label: string;
  href: string;
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links: HeaderLinksProps[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Booking", href: "/booking" },
    { label: "Order online", href: "/order-online" },
    { label: "Log in", href: "/login" },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-slate-50 shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-48" />
      </Link>

      {/* Menu Hamburger (visible en mobile) */}
      <button
        className="md:hidden p-2 text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Navigation */}
      <nav
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-50 md:bg-transparent shadow-md md:shadow-none 
          ${
            isOpen ? "flex flex-col items-center py-4 gap-4 h-screen" : "hidden"
          } md:flex md:flex-row md:gap-6 transition-all duration-300`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-4 font-semibold z-10 bg-slate-50 w-full md:w-auto h-full md:h-auto">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative inline-block text-center md:text-left p-2 transition-all duration-300
                hover:bg-slate-500 md:hover:bg-transparent 
                md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:w-0 md:after:h-[3px] 
                md:after:rounded-full md:after:bg-primary md:after:opacity-0 md:after:transition-all 
                md:after:duration-300 md:after:ease-in-out md:hover:after:w-full md:hover:after:opacity-100"
            >
              <Link
                to={link.href}
                className="block w-full text-primary hover:text-white md:text-black md:hover:text-primary transition-colors duration-300 p-2"
                onClick={() => setIsOpen(false)}
              >
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
