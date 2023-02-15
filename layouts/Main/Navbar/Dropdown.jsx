import styles from "@/styles/navbar.module.css";
import Link from "next/link";

function Dropdown({ links }) {
  return (
    <div className={styles.dropdown + " group-hover:flex"}>
      {links.map((link, i) => (
        <Link href="" key={i} className={styles.link}>
          {link.text}
        </Link>
      ))}
      <Link href="" className={styles.link}>
        Homepage 1
      </Link>
    </div>
  );
}

export default Dropdown;
