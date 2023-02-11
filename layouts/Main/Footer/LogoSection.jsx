import Link from "next/link";

function LogoSection() {
  return (
    <div className="col-start-1 col-end-13">
      <Link href="/">
        <div className="font-bold text-xl">
          <span className="text-blue-500">KingStar</span>
          <span> University</span>
        </div>
        <em className="text-sm text-gray-800">Science 2010</em>
      </Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minima
        asperiores sint magni doloremque quod porro alias numquam ut
        voluptatibus.
      </p>

      {/* Social Section */}
      <div className="flex items-center gap-2">
        <Link href=""></Link>
        <Link href=""></Link>
        <Link href=""></Link>
        <Link href=""></Link>
      </div>
    </div>
  );
}

export default LogoSection;
