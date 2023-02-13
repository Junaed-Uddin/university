import { AnimatePresence, motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Portal from "../Portal";

// Animation Variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const formVariants = {
  from: {
    translateY: "-250%",
    opacity: 0,
  },
  enter: { translateY: "0%", opacity: 1, scale: 1 },
  leave: { translateY: "350%", opacity: 0 },
};

const SearchOverlay = ({ open, onClose }) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.section
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed flex justify-center items-center p-[1.5rem] w-full h-full top-0 left-0 bg-blue-900/30 backdrop-blur-sm z-[1002]"
          >
            <motion.form
              variants={formVariants}
              initial="from"
              animate="enter"
              exit="leave"
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              className="flex border rounded-md bg-paper focus-within:ring overflow-hidden shadow-lg items-stretch"
            >
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="min-w-[250px] bg-transparent px-3 py-2 focus-visible:outline-none text-lg"
              />
              <button className="flex justify-center items-center p-2 py-3 text-xl h-full hover:bg-primary/10 hover:text-primary">
                <FiSearch />
              </button>
            </motion.form>
          </motion.section>
        )}
      </AnimatePresence>
    </Portal>
  );
};

export default SearchOverlay;
