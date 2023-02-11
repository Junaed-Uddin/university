import Link from "next/link";
import { MdOutlineEmail as MailIcon } from "react-icons/md";
import UpperSection from "./UpperSection";

const Navbar = () => {
  return (
    /*
     * DON'T TRY TO ADD ANY MARGIN, PADDING OR MAX-WIDTH CLASS TO THE GLOBAL WRAPPER
     */
    <>
      <UpperSection />
      <header className="" id="navbar">
        <h2 className="text-2xl text-amber-500">This is navbar</h2>
      </header>
    </>
  );
};

export default Navbar;
