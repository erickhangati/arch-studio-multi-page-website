import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get path location.
  const location = useLocation();

  // Scroll to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
