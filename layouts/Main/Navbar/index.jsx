import Link from "next/link";
import UpperSection from "./UpperSection";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchOverlay from "@/components/SearchOverlay";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <>
      <UpperSection />
      <header
        className="px-[max(1.5rem,calc((100vw-1440px)/2))] border-b-[1px] border-b-ol-default flex gap-2 items-center"
        id="navbar"
      >
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">KingStar</span>
          <span> University</span>
        </Link>

        <nav className="ml-auto flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="relative py-3 px-2"
            >
              {link.text}
              {pathname === link.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="nav-underline absolute w-full h-1 bg-secondary bottom-0 left-0 rounded-tr-sm rounded-tl-sm"
                />
              )}
            </Link>
          ))}
        </nav>
        {/* search button */}
        <button
          onClick={() => setOpen(true)}
          className="rounded-full hover:bg-primary/10 hover:text-primary w-10 h-10 flex justify-center items-center"
        >
          <FiSearch />
        </button>
      </header>
      <SearchOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;

const links = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/pages",
    text: "Pages",
  },
  {
    path: "/admissions",
    text: "Admissions",
  },
  {
    path: "/courses",
    text: "Courses",
  },
  {
    path: "/campus-life",
    text: "Campus Life",
  },
  {
    path: "/contact-us",
    text: "Contact Us",
  },
  {
    path: "/about",
    text: "About",
  },
];
