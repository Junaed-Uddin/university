// icons
import { BiHome as HomeIcon } from "react-icons/bi";
import {
  RiPagesLine as PagesIcon,
  RiContactsLine as ContactUsIcon,
} from "react-icons/ri";
import { FiUserCheck as AdmissionIcon } from "react-icons/fi";
import {
  BsJournalBookmark as CoursesIcon,
  BsInfoCircle as AboutIcon,
} from "react-icons/bs";
import { GiLifeBar as CampusLifeIcon } from "react-icons/gi";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const links = [
  {
    path: "/",
    text: "Home",
    icon: <HomeIcon />,
    child: (
      <div className={styles.dropdown}>
        <Link href="" className={styles.link}>
          Homepage 1
        </Link>
        <Link href="" className={styles.link}>
          Homepage 2
        </Link>
      </div>
    ),
  },
  {
    path: "/pages",
    text: "Pages",
    icon: <PagesIcon />,
  },
  {
    path: "/admissions",
    text: "Admissions",
    icon: <AdmissionIcon />,
  },
  {
    path: "/courses",
    text: "Courses",
    icon: <CoursesIcon />,
  },
  {
    path: "/campus-life",
    text: "Campus Life",
    icon: <CampusLifeIcon />,
  },
  {
    path: "/contact-us",
    text: "Contact Us",
    icon: <ContactUsIcon />,
  },
  {
    path: "/about",
    text: "About",
    icon: <AboutIcon />,
  },
];

export default links;
