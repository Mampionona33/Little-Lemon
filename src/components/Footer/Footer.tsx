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
      // items: ["Our Company", "Suppliers", "Careers", "Newsletter"],
      items: [
        { label: "Our Company", href: "/our-company" },
        { label: "Suppliers", href: "/suppliers" },
        { label: "Careers", href: "/careers" },
        { label: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      title: "Customer Service",
      items: [
        { label: "Contact Us", href: "/contact-us" },
        { label: "Contacts", href: "/contacts" },
        { label: "+1(123)456-7890", href: "/phone" },
        { label: "info@littlelemon.com", href: "/email" },
      ],
    },
    {
      title: "Availability",
      // items: ["Tues-Thurs: 12pm-10pm", "Fri-Sun: 12pm-10pm", "Mon: Closed"],
      items: [
        { label: "Tues-Thurs: 12pm-10pm", href: "/tues-thurs" },
        { label: "Fri-Sun: 12pm-10pm", href: "/fri-sun" },
        { label: "Mon: Closed", href: "/mon-closed" },
      ],
    },
    {
      title: "Socials",
      // items: ["Instagram", "Facebook", "Pinterest"],
      items: [
        { label: "Instagram", href: "/instagram" },
        { label: "Facebook", href: "/facebook" },
        { label: "Pinterest", href: "/pinterest" },
      ],
    },
  ];

  return (
    <footer className="fixed flex flex-row bottom-0 w-full justify-around p-4 bg-slate-100">
      <div className="flex justify-center items-center">
        <img src={footerLogo} alt="footer logo" className="w-28" />
      </div>

      <div className="flex justify-between gap-4">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col ">
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-4">
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
