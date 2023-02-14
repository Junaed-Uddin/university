import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail as MailIcon } from "react-icons/md";

const UpperSection = () => {
  return (
    /*
     * DON'T TRY TO ADD ANY MARGIN, PADDING OR MAX-WIDTH CLASS TO THE GLOBAL WRAPPER
     */
    <section className="hidden sm:block px-[max(1.5rem,calc((100vw-1400px)/2))] bg-primary text-blue-200">
      <div className="flex gap-2 justify-between">
        {/* left content */}
        <div className="md:flex justify-start gap-5 hidden">
          <a
            href="mailto:summer@field.com"
            className="flex gap-2 items-center hover:text-white"
          >
            <MailIcon size={22} />
            <span>summer@field.com</span>
          </a>
          <p
            className="flex gap-2 items-center hover:text-white"
          >
            <BiPhoneCall size={22} />
            <span>+5-8435-8255-632</span>
          </p>
        </div>
        {/* Right part */}
        <div className="flex gap-3">
          <Link
            href="/alumni"
            className="p-3 hover:bg-primary-hover hover:text-white"
          >
            Alumni
          </Link>
          <Link
            href="/calender"
            className="p-3 hover:bg-primary-hover hover:text-white"
          >
            Calendar
          </Link>
          <Link
            href="/portal"
            className="p-3 hover:bg-primary-hover hover:text-white"
          >
            Portal
          </Link>
          <Link
            href="/support-ku"
            className="p-3 text-white bg-secondary hover:bg-secondary-hover"
          >
            Support KU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpperSection;
