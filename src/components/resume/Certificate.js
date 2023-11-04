import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Certificate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          
          <h2 className="text-4xl font-bold">Participations and Workshops</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Machile Learning with One API"
            subTitle="Career Guidance Cell"
            result="2023"
            des="The workshop provided hands-on experience and the basics of one API"
          />
          <ResumeCard
            title="Workshop on Blockchain"
            subTitle="Technical Symposium-Cryptera"
            result="11-March-2023"
            des="Blockchain is a decentralized digital ledger technology that securely records and verifies transactions across a network of computers."
          />
          <ResumeCard
            title="The Coding Season-C Programming"
            subTitle="12 Week Workshop-FOSS Club"
            result="Dec 2022-Apr 2023"
            des="This workshop provided hands-on experience and practical skills to learn and apply the fundamentals of the C programming language."
          />
        </div>
      </div>
     
    </motion.div>
  );
};
export default Certificate;






