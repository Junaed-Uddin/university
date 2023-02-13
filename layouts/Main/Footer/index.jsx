import ContactSection from "./ContactSection";
import Links from "./Links";
import LogoSection from "./LogoSection";
import About from "./About";
import Image from "next/image";
import NewsLetter from "@/components/Home/NewsLetter";

const Footer = () => {
  return (
    <footer className="relative px-[max(1.5rem,calc((100vw-1400px)/2))] pb-2 pt-8 grid grid-cols-12 bg-no-repeat bg-cover bg-center text-[rgba(255,255,255,0.90)] backdrop-blur-sm">
      <LogoSection />
      <ContactSection />
      <About />
      <Links />
      <img
        src="/assets/images/footer/university.jpg"
        alt="university"
        className="absolute w-full h-full object-cover -z-10 brightness-50"
      />
      <div className="absolute w-full h-full object-cover -z-[9] bg-blue-900/20 backdrop-blur-sm" />
    </footer>
  );
};

export default Footer;
