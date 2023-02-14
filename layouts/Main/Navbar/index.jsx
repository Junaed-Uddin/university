import Link from "next/link";
import UpperSection from "./UpperSection";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchOverlay from "@/components/SearchOverlay";
import { MdMenu } from "react-icons/md";
import MenuDrawer from "./MenuDrawer";
import links from "./links";

const Navbar = () => {
  const [underline, setUnderline] = useState({
    position: 0,
    prevPosition: 0,
  });
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    links.map((link, i) =>
      link.path === pathname
        ? setUnderline({
            position: i,
            prevPosition: 0,
          })
        : null
    );
  }, []);

  function handleLinkMouseEnter(i) {
    setUnderline((prev) => ({ ...prev, position: i }));
  }

  function handleLinkMouseLeave() {
    setUnderline((prev) => ({ ...prev, position: prev.prevPosition }));
  }

  function handleLinkClick(i) {
    setUnderline((prev) => ({ ...prev, prevPosition: i }));
  }

  return (
    <>
      <UpperSection />
      <header
        className="px-[max(1.5rem,calc((100vw-1400px)/2))] py-2 lg:py-0 border-b-[1px] border-b-ol-default flex gap-2 items-center bg-paper sticky top-0 left-0 z-[1000]"
        id="navbar"
      >
        <Link href="/" className="text-2xl font-bold mr-auto">
          <span className="text-primary">KingStar</span>
          <span> University</span>
        </Link>

        <nav className="hidden lg:flex gap-1">
          {links.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              scroll={false}
              onMouseEnter={() => handleLinkMouseEnter(i)}
              onMouseLeave={handleLinkMouseLeave}
              onClick={() => handleLinkClick(i)}
              className={`relative py-4 md:py-5  px-2 ${
                pathname === link.path ? "text-primary font-bold" : "text-black"
              } before:block before:absolute before:w-full before:h-[50%] before:bg-blue-600/10 before:top-[50%] before:left-0 before:translate-y-[-50%] before:rounded before:scale-0 before:hover:scale-100 before:transition`}
            >
              {link.text}
              {i === underline.position && (
                <motion.span
                  layoutId="nav-underline"
                  className="nav-underline absolute w-full h-1 rounded-full bg-primary -bottom-[1px] left-0"
                />
              )}
              {link?.child}
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
        <button
          onClick={() => setOpenMenu(true)}
          className="rounded-full hover:bg-primary/10 hover:text-primary w-10 h-10 flex lg:hidden justify-center items-center text-2xl"
        >
          <MdMenu />
        </button>
      </header>
      <SearchOverlay open={open} onClose={() => setOpen(false)} />
      <MenuDrawer open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
};

export default Navbar;
