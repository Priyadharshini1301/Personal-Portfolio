
import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Experiences and Positions</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Internship-Epicsense Technologies"
            subTitle="Full Stack Web Development"
            result="Aug 1-Aug 30"
            des="A one-month internship equipped me with skills to create dynamic websites, combining front-end and back-end expertise. React, a key focus in such development, empowers dynamic user interface design and front-end management."
          />
          <ResumeCard
            title="Program Coordinator"
            subTitle="Road Safety Patrol"
            result="2023"
            des="Road Safety Patrol is a club of CIT which gives awareness to the students about road safety and gives training to the students for parade."
          />
          <ResumeCard
            title="Board Member"
            subTitle="Kalam Knowledge Club"
            result="2023"
            des="KKC mainly has 3 forums and the vision of that club is to bring out the talents from the students and showcase it."
          />
          </div>
      </div>
     
    </motion.div>
  );
};
export default Achievement;






