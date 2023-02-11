import Link from "next/link";
import {
  BsInstagram as InstaIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";
import { CgFacebook as FbIcon } from "react-icons/cg";

function LogoSection() {
  return (
    <div className="col-start-1 col-end-13 lg:col-end-5 flex flex-col w-full sm:items-center lg:items-start">
      <Link
        href="/"
        className="flex flex-col sm:items-center lg:items-start mb-2"
      >
        <div className="font-bold text-3xl leading-6">
          <span className="text-blue-700">KingStar</span>
          <span className="text-slate-200"> University</span>
        </div>
        <em className="text-sm font-semibold">Science 2010</em>
      </Link>
      <p className="sm:text-center lg:text-left max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minima
        asperiores sint magni doloremque quod porro alias numquam ut
        voluptatibus..
      </p>

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

export default LogoSection;
