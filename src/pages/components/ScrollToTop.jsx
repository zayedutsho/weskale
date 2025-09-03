// Create a new file: components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Don't scroll to top if:
    // 1. We're on home page with a hash (for section scrolling)
    // 2. We have any hash in the URL (for anchor navigation)
    if (hash || (pathname === "/" && hash)) {
      return;
    }

    // Scroll to top for all other route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
