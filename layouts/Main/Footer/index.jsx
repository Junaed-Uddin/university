import ContactSection from "./ContactSection";
import Links from "./Links";
import LogoSection from "./LogoSection";
import About from "./About";
import Image from "next/image";
import NewsLetter from "@/components/Home/NewsLetter";

const Footer = () => {
  return (
    <footer className="relative">
      <img
        src="/assets/images/footer/university.jpg"
        alt="university"
        className="absolute w-full h-full object-cover -z-10 brightness-50 saturate-[0.2]"
      />
      <div className="absolute w-full h-full object-cover -z-[9] bg-blue-900/10 backdrop-blur-sm" />
      <NewsLetter />
      <div className="relative px-[max(1.5rem,calc((100vw-1400px)/2))] pb-2 pt-8 grid grid-cols-12 bg-no-repeat bg-cover bg-center border-t-[2px] border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.90)] ">
        <LogoSection />
        <About />
        <Links />
        <ContactSection />
      </div>
      <p className="col-span-1 col-end-13 text-slate-400 text-center px-6 py-3 border-t-[1px] border-[rgba(255,255,255,0.1)]">
        All copyright &copy; belongs to University.
      </p>
    </footer>
  );
};

export default Footer;
