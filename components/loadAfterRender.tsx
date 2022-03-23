// FRAMEWORK
import React, { useEffect, useState } from "react";

// Component Function
const OnRender = ({ children }: React.PropsWithChildren<{}>) => {
  // State
  const [rendered, setRendered] = useState(false);

  // Helpers
  const render = () => {
    setRendered(true);
  };

  // Effect
  useEffect(() => {
    render();
  }, []);
  return <>{rendered && children}</>;
};
export default OnRender;
