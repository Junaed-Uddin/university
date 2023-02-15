import Link from "next/link";
import styles from "@/styles/footer.module.css";

function About() {
  return (
    <div className="col-start-1 col-end-13 sm:col-end-4 lg:col-start-6 lg:col-end-8 py-3 xl:col-start-7 xl:col-end-9 border-t-[1px] border-t-[rgba(255,255,255,0.15)] lg:border-t-0">
      <h1 className="font-semibold text-lg uppercase mb-2 text-white">About</h1>
      <nav className="flex flex-col gap-3">
        <Link href="" className={styles.link}>
          About Us
        </Link>
        <Link href="" className={styles.link}>
          Courses
        </Link>
        <Link href="" className={styles.link}>
          News
        </Link>
        <Link href="" className={styles.link}>
          Events
        </Link>
        <Link href="" className={styles.link}>
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default About;
