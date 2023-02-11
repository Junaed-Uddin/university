import ContactSection from "./ContactSection";
import Links from "./Links";
import LogoSection from "./LogoSection";
import About from "./About";

const Footer = () => {
  return (
    <footer
      className="px-[max(1.5rem,calc((100vw-1440px)/2))] py-2 grid grid-cols-12 bg-gray-400"
      id="footer"
    >
      <LogoSection />
      <ContactSection />
      <About />
      <Links />
    </footer>
  );
};

export default Footer;
