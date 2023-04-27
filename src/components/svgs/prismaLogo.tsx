// LIBRARIES
import React from "react";

// Props
interface Props {
  className?: string;
}

// COMPONENT
const PrismaLogo = ({ className = "" }: Props) => {
  return (
    <svg viewBox="0 0 81.6 81.6" className={className}>
      <path
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        d="M10.8 54.7c-.8-1.2-.8-2.7 0-4L38.8 5c1.6-2.5 5.3-2.3 6.6.4L71 61c1 2.1-.1 4.5-2.3 5.1l-39.8 12c-1.6.5-3.3-.2-4.2-1.6L10.8 54.7zm31.3-36.3c.3-1.3 2.1-1.5 2.7-.3L62.5 59c.3.8-.1 1.7-.9 1.9L34 69.1c-1 .3-2-.6-1.8-1.6l9.9-49.1z"
      />
    </svg>
  );
};

export default PrismaLogo;
