import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo/logo.png";

function LogoSection() {
  return (
    <div className="col-start-1 col-end-13 lg:col-end-5 xl:col-end-6 flex flex-col w-full sm:items-center lg:items-start md:pr-4">
      <div className="flex justify-center items-center">
        <Image
          className="w-24 scale-110 h-20"
          src={logo}
          alt="university logo"
          quality={100}
        ></Image>
        <Link
          href="/"
          className="flex flex-col mt-3 sm:items-center lg:items-start"
        >
          <div className="font-bold text-4xl">
            <span className="text-white">SummerField</span>
          </div>
          <em className="text-xl mt-1 not-italic uppercase tracking-widest">
            Since 2010
          </em>
        </Link>
      </div>
      <p className="sm:text-center tracking-wide leading-relaxed lg:text-left max-w-[510px] mt-4 mb-6">
        SummerField transforms lives through accessible, student-centered,
        high-quality education and meets learners’ needs for a lifetime.
      </p>
    </div>
  );
}

export default LogoSection;
