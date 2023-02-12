import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import links from "./links";

const backdropVariant = {
  hidden: {
    opacity: 0,
    transition: { delay: 0.5 },
  },
  visible: {
    opacity: 1,
  },
};

const bgVariants = {
  hidden: {
    x: "100%",
    transition: { delay: 0.5, staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    x: "0%",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const closeVariants = {
  hidden: { opacity: 0, scale: 0, x: "50%" },
  visible: { opacity: 1, scale: 1, x: "-30px" },
};

function MenuDrawer({ open, onClose }) {
  const { pathname } = useRouter();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed top-0 left-0 w-full h-full flex flex-col p-2 bg-slate-900/30 z-40"
        >
          <motion.nav
            variants={bgVariants}
            onClick={(e) => e.stopPropagation()}
            className="fixed top-0 right-0 flex flex-col gap-1 p-2 bg-paper h-full w-[200px] py-[50px]"
          >
            <motion.button
              variants={closeVariants}
              onClick={onClose}
              className="absolute top-1 left-0 bg-paper p-2 font-semibold rounded-md -translate-x-8 shadow-md border hover:bg-red-50 hover:text-red-500"
            >
              Close
            </motion.button>
            {links.map((link) => (
              <motion.span
                variants={linkVariants}
                key={link.path}
                onClick={onClose}
                className={`flex hover:bg-paper rounded-md hover:scale-105 hover:shadow-lg hover:-translate-x-2 hover:-translate-y-1 transition cursor-pointer ${
                  pathname === link.path
                    ? "font-bold bg-primary/10 text-primary"
                    : ""
                }`}
              >
                <Link href={link.path} className="px-3 py-1 w-full">
                  {link.text}
                </Link>
              </motion.span>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuDrawer;
