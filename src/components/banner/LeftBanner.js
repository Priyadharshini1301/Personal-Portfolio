import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["CSE Graduate."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hey All !</h4>
        <h1 className="text-4xl font-bold text-white">
          This is <span className="text-designColor capitalize">Priya Dharshini</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FFFFFF"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am an inquisitive student on a quest for knowledge, eager to explore the realms of academia and beyond.</p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner;