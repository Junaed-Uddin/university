import { createPortal } from "react-dom";
const Portal = ({ children }) => {
  if (process.browser) {
    return createPortal(children, document.body);
  } else return null;
};

export default Portal;
