import ContactSection from "./ContactSection";
import Links from "./Links";
import LogoSection from "./LogoSection";
import About from "./About";

const Footer = () => {
  return (
    <footer
      className="px-[max(1.5rem,calc((100vw-1400px)/2))] pb-2 pt-8 grid grid-cols-12 bg-slate-800 text-[rgba(255,255,255,0.70)]"
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
