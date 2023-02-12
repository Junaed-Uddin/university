import Link from "next/link";
import styles from "@/styles/footer.module.css";

function Links() {
  return (
    <div className="col-start-1 col-end-13 sm:col-start-10 sm:col-end-13 lg:col-start-11 py-3 border-t-[1px] border-t-ol-default lg:border-t-0">
      <h1 className="font-semibold text-lg uppercase mb-2 text-white">Links</h1>
      <nav className="flex flex-col gap-1">
        <Link href="" className={styles.link}>
          Students
        </Link>
        <Link href="" className={styles.link}>
          Faculty & Stuffs
        </Link>
        <Link href="" className={styles.link}>
          Alumni
        </Link>
        <Link href="" className={styles.link}>
          Visit
        </Link>
        <Link href="" className={styles.link}>
          Media Relations
        </Link>
      </nav>
    </div>
  );
}

export default Links;
