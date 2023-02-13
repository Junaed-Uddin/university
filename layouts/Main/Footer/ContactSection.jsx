import Link from "next/link";
import {
  BsInstagram as InstaIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";
import { CgFacebook as FbIcon } from "react-icons/cg";

function ContactSection() {
  return (
    <div className="col-start-1 col-end-13 sm:col-start-8 -sm:col-end-13 lg:col-start-10 lg:col-end-13 xl:col-start-11 py-3 border-t-[1px] border-t-[rgba(255,255,255,0.15)] lg:border-t-0">
      <h1 className="font-semibold text-lg mb-2 uppercase text-white">
        Get in touch
      </h1>
      <h2 className="font-semibold">000 000 00 00</h2>
      <p className="">3310 Barnes Avenue Cicinati,</p>
      <p>Ohio 43521</p>

      {/* Social Section */}
      <div className="flex items-center gap-2 text-2xl my-3">
        <Link
          href=""
          className="p-2 rounded-md hover:bg-primary/20 hover:text-primary transition"
        >
          <FbIcon />
        </Link>
        <Link
          href=""
          className="p-2 rounded-md hover:bg-primary/20 hover:text-primary transition"
        >
          <TwitterIcon />
        </Link>
        <Link
          href=""
          className="p-2 rounded-md hover:bg-primary/20 hover:text-primary transition"
        >
          <InstaIcon />
        </Link>
      </div>
    </div>
  );
}

export default ContactSection;
