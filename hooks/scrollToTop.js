const { useEffect } = require("react");

const useScrollToTop = () =>
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    console.log(window.location.pathname);
  }, [window.location.pathname]);

export default useScrollToTop;
