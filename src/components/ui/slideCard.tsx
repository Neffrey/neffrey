// LIBRARIES
import { type ReactNode, useState } from "react";

import addClassName from "~/components/helpers/addClassName";

// Card component based on https://codepen.io/pgalor/pen/WKoXqM

// TYPES
type Props = {
  frontTitle: string;
  frontImg: ReactNode;
  backContent: ReactNode;
  className?: string;
};

// CARD COMPONENT
const SlideCard = ({ frontTitle, frontImg, backContent, className }: Props) => {
  // STATE
  const [hover, setHover] = useState(false);
  return (
    <div
      // card wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={
        "relative z-10 box-border h-full min-h-[300px] w-full cursor-pointer overflow-hidden rounded-xl shadow-xl" +
        addClassName(className)
      }
    >
      <div
        // front card
        className={
          "absolute bottom-0 left-0 right-0 top-0 z-10 flex bg-slate-600 px-5 py-3 transition-all" + // px-6 py-8
          (!hover
            ? " flex-col items-center justify-center py-12"
            : " top-[80%] flex-row items-center justify-between")
        }
      >
        <div
          className={
            "aspect-square fill-slate-300" +
            (!hover ? " w-2/3" : " h-full")
          }
        >
          {frontImg}
        </div>
        <div className="text-xl">{frontTitle}</div>
      </div>
      <div
        // back card
        className="absolute bottom-[20%] left-0 right-0 top-0 z-0 flex w-full items-center bg-cyan-600 px-6 py-8 text-center text-lg text-white transition-all"
      >
        {backContent}
      </div>
    </div>
  );
};

export default SlideCard;
