import React from 'react';
import { FaWhatsappSquare, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  const linkedinProfile = "https://www.linkedin.com/in/priya-dharshini-govindaraj-68527b227/";
  const instagramProfile = "https://www.instagram.com/priya_govindaraj_13";
  const whatsappNumber = "9944998238";

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Priya Dharshini G</h3>
        <p className="text-lg font-normal text-gray-400">CSE Graduate</p>
        <p className="text-base text-gray-400 tracking-wide">
          I thrive on the journey of self-improvement, always striving to become better.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href={linkedinProfile} className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href={instagramProfile} className="bannerIcon">
            <FaInstagram />
          </a>
          <a href={`https://wa.me/${whatsappNumber}`} className="bannerIcon">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;



