// LIBRARIES
import React from "react";
// import { FaBars } from "react-icons/fa";

// COMPONENTS
import NeffreyLogo from "~/components/svgs/neffreyLogo";

// COMPONENT
const Header = () => {
  return (
    <div
      // Row Container
      className="border-neutral from-secondary-focus via-primary to-success flex w-full items-center justify-between border-b-4 border-solid bg-gradient-to-r px-5 py-2 shadow-xl"
    >
      <div
        // Logo Container
        className="h-12 w-12 cursor-pointer fill-white"
      >
        <NeffreyLogo />
      </div>

      {/*** TODO: MENU COMPONENT ***/}
    </div>
  );
};
export default Header;
