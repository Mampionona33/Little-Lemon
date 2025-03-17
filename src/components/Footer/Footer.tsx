import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/logo_footer.png";

export interface FooterElementProps {
  title: string;
  items: { label: string; href: string }[];
}

const Footer = () => {
  // Sections du footer
  const footerSections: FooterElementProps[] = [
    {
      title: "About us",
      items: [
        { label: "Our Company", href: "/" },
        { label: "Suppliers", href: "/" },
        { label: "Careers", href: "/" },
        { label: "Newsletter", href: "/" },
      ],
    },
    {
      title: "Customer Service",
      items: [
        { label: "Contact Us", href: "/" },
        { label: "Contacts", href: "/" },
        { label: "+1(123)456-7890", href: "/" },
        { label: "info@littlelemon.com", href: "/" },
      ],
    },
    {
      title: "Availability",
      items: [
        { label: "Tues-Thurs: 12pm-10pm", href: "/" },
        { label: "Fri-Sun: 12pm-10pm", href: "/" },
        { label: "Mon: Closed", href: "/" },
      ],
    },
    {
      title: "Socials",
      items: [
        { label: "Instagram", href: "/instagram" },
        { label: "Facebook", href: "/facebook" },
        { label: "Pinterest", href: "/pinterest" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col-reverse gap-4 md:flex-row bottom-0 w-full justify-around p-4 bg-slate-50 shadow-lg">
      <div className="flex justify-center items-center">
        <img src={footerLogo} alt="footer logo" className="w-16" />
      </div>

      <div className="flex justify-between gap-4 flex-wrap">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col ">
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
