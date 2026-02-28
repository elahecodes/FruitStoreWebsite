import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // صبر کن تا تمام DOM render بشه
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 50); // 50ms تا render کامل بشه، میشه کم یا زیاد کرد

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;