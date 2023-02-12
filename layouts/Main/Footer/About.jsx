import Link from "next/link";

function About() {
  return (
    <div className="col-start-1 col-end-13 sm:col-start-6 sm:col-end-10 lg:col-start-8 py-3 border-t-[1px] border-t-ol-default lg:border-t-0">
      <h1 className="font-semibold text-lg uppercase mb-2 text-slate-200">
        About
      </h1>
      <nav className="flex flex-col gap-1">
        <Link href="" className="hover:text-primary transition">
          About Us
        </Link>
        <Link href="" className="hover:text-primary transition">
          Courses
        </Link>
        <Link href="" className="hover:text-primary transition">
          News
        </Link>
        <Link href="" className="hover:text-primary transition">
          Events
        </Link>
        <Link href="" className="hover:text-primary transition">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default About;
