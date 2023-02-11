import Link from "next/link";
import {
  BsInstagram as InstaIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";
import { CgFacebook as FbIcon } from "react-icons/cg";

function LogoSection() {
  return (
    <div className="col-start-1 col-end-13">
      <Link href="/">
        <div className="font-bold text-2xl leading-6">
          <span className="text-blue-500">KingStar</span>
          <span> University</span>
        </div>
        <em className="text-sm text-gray-800 font-semibold">Science 2010</em>
      </Link>
      <p>
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
