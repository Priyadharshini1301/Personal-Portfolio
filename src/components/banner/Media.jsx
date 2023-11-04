import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
        Connect and Converse
        </h2>
        <div className="flex gap-4">
          <a href="mailto:bpriyadharshinig@gmail.com" className="bannerIcon">
            <MdEmail />
          </a>
          
          <a href="https://www.linkedin.com/in/priya-dharshini-govindaraj-68527b227" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Priyadharshini1301" className="bannerIcon">
            <FaGithub />
        </a>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Media;


