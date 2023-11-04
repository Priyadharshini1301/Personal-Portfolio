import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023(PRESENT)</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Graduation"
            subTitle="COIMBATORE INSTITUTE OF TECHNOLOGY(2021-PRESENT)"
            result="8.33/10"
            des="Graduation is a significant milestone marking the completion of one chapter and the beginning of another in the journey of education and personal growth."
          />
          
          <ResumeCard
            title="HSC"
            subTitle="VIDHYAA VIKAS MATRICULATION HIGHER SECONDARY SCHOOL(2020-2021)"
            result="96.4/100"
            des="Higher secondary education is a crucial phase that bridges the gap between secondary schooling and higher studies, shaping students for future academic and career pursuits."
          />

          <ResumeCard
            title="SSLC"
            subTitle="VIDHYAA VIKAS MATRICULATION HIGHER SECONDARY SCHOOL(2018-2019)"
            result="96.6/100"
            des="SSLC, or Secondary School Leaving Certificate, represents the successful completion of secondary education and readiness for higher academic endeavors."
          />          
        </div>
      </div>
    

      
    </motion.div>
  );
}

export default Education