import Link from "next/link";

function LogoSection() {
  return (
    <div className="col-start-1 col-end-13 lg:col-end-5 xl:col-end-6 flex flex-col w-full sm:items-center lg:items-start md:pr-4">
      <Link
        href="/"
        className="flex flex-col sm:items-center lg:items-start mb-2"
      >
        <div className="font-bold text-4xl">
          <span className="text-blue-400">SummerField</span>
          <span className="text-white"> University</span>
        </div>
        <em className="text-sm not-italic uppercase tracking-wide">
          Science 2010
        </em>
      </Link>
      <p className="sm:text-center lg:text-left max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minima
        asperiores sint magni doloremque quod porro alias numquam ut
        voluptatibus..
      </p>
    </div>
  );
}

export default LogoSection;
