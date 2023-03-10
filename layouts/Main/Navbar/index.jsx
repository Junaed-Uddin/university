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
import styles from "@/styles/navbar.module.css";
import dynamic from "next/dynamic";
import { Vidaloka } from "@next/font/google";
import logo from "../../../public/assets/images/logo/logo.png";
import Image from "next/image";

const vidaloka = Vidaloka({
  weight: "400",
  subsets: ["latin"],
});

const DropdownMenu = dynamic(() => import("./Dropdown"), {
  loading: () => "Loading...",
});
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
        className="gip border-b-[1px] py-2 border-b-ol-default flex items-center bg-paper sticky top-0 left-0 z-[1000]"
        id="navbar"
      >
        <div className="flex justify-start">
          <Image alt="logo" src={logo} className="w-20 scale-105 sm:w-24 h-20"></Image>
        </div>
        <Link
          href="/"
          className={`text-lg md:text-[22px] xl:text-[28px] text-primary font-bold tracking-widest mr-auto ${vidaloka.className}`}
        >
          <span className="text-primary">SummerField</span>
          <span> University</span>
        </Link>

        <nav className="hidden lg:flex gap-4 font-[500]">
          {links.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              scroll={false}
              onMouseEnter={() => handleLinkMouseEnter(i)}
              onMouseLeave={handleLinkMouseLeave}
              onClick={() => handleLinkClick(i)}
              className={`group relative py-4 md:py-6  px-2 ${
                pathname === link.path
                  ? "text-primary font-bold"
                  : "text-primary font-semibold"
              } before:block before:absolute before:w-full before:h-[50%] before:bg-blue-600/10 before:top-[50%] before:left-0 before:translate-y-[-50%] before:rounded before:scale-0 before:hover:scale-100 before:transition`}
            >
              {link.text}
              {i === underline.position && (
                <motion.span
                  layoutId="nav-underline"
                  className="nav-underline absolute w-full h-1 rounded-full bg-primary -bottom-[1px] left-0"
                />
              )}
              {/* <div className="">
                <Link href="/">Home 1</Link>
                <Link href="/">Home 2</Link>
                <Link href="/">Home 3</Link>
              </div> */}
              {/* {link?.child} */}
              {/* <DropdownMenu links={[{ path: "", text: "Home 1" }]} /> */}
              {/* {typeof window !== "undefined" && (
                <div className={styles.dropdown + " group-hover:flex"}>
                  <Link href="" className={styles.link}>
                    Homepage 1
                  </Link>
                  <Link href="" className={styles.link}>
                    Homepage 2
                  </Link>
                </div>
              )} */}
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
