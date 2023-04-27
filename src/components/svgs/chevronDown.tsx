// LIBRARIES
import React from "react";

// Props
interface ChevronDownProps {
  className?: string;
}

// COMPONENT
const ChevronDown = ({ className = "" }: ChevronDownProps) => {
  return (
    <svg viewBox="0 -256 1792 1792" className={className}>
      <path
        d="M1611 832q0-53-37-90L923 91q-38-38-91-38-54 0-90 38L91 742q-38 36-38 90 0 53 38 91l74 75q39 37 91 37 53 0 90-37l486-486 486 486q37 37 90 37 52 0 91-37l75-75q37-39 37-91z"
        transform="matrix(1 0 0 -1 68.339 1133.56)"
      />
    </svg>
  );
};

export default ChevronDown;
