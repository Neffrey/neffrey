import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Set  window dims
  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;

      // Set initial
      setWindowDimensions({
        width: innerWidth,
        height: innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
