import Link from "next/link";

function Links() {
  return (
    <div className="col-start-1 col-end-13 sm:col-start-10 sm:col-end-13 py-3 border-t-[1px] border-t-ol-default">
      <h1 className="font-semibold text-lg uppercase mb-2 text-slate-200">
        Links
      </h1>
      <nav className="flex flex-col gap-1">
        <Link href="" className="hover:text-primary transition">
          Students
        </Link>
        <Link href="" className="hover:text-primary transition">
          Faculty & Stuffs
        </Link>
        <Link href="" className="hover:text-primary transition">
          Alumni
        </Link>
        <Link href="" className="hover:text-primary transition">
          Visit
        </Link>
        <Link href="" className="hover:text-primary transition">
          Media Relations
        </Link>
      </nav>
    </div>
  );
}

export default Links;
