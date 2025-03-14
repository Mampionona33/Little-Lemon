import footerLogo from "../../assets/images/logo_footer.png";

export interface FooterElementProps {
  title: string;
  items: string[];
}

const Footer = () => {
  // Sections du footer
  const footerSections: FooterElementProps[] = [
    {
      title: "About us",
      items: ["Our Company", "Suppliers", "Careers", "Newsletter"],
    },
    {
      title: "Customer Service",
      items: [
        "Contact Us",
        "Contacts",
        "+1(123)456-7890",
        "info@littlelemon.com",
      ],
    },
    {
      title: "Availability",
      items: ["Tues-Thurs: 12pm-10pm", "Fri-Sun: 12pm-10pm", "Mon: Closed"],
    },
    {
      title: "Socials",
      items: ["Instagram", "Facebook", "Pinterest"],
    },
  ];

  return (
    <footer className="fixed flex flex-row bottom-0 w-full justify-around p-4">
      <div className="flex justify-center items-center">
        <img src={footerLogo} alt="footer logo" className="w-28" />
      </div>

      <div className="flex justify-between p-4">
        {footerSections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm">
                  {item}
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
