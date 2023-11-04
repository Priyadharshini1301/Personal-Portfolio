import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title={<span className="font-bold text-2xl">CONTRIBUTIONS</span>}
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title={<span className="font-bold text-1xl">EXPENSE TRACKER</span>}
          des="An Expense Tracker is a digital tool designed to monitor and manage personal or business expenses, helping users maintain financial control and budget effectively !"
          src={projectThree}
        />
        <ProjectsCard
          title={<span className="font-bold text-1xl">CAFE MANAGEMENT SYSTEM</span>}
          des="The Cafe Management System Project is a comprehensive software solution designed to streamline cafe operations, from order management and inventory control to enhancing customer experiences!"
          src={projectOne}
        />
        <ProjectsCard
          title={<span className="font-bold text-1xl">HOSTEL MANAGEMENT SYSTEM</span>}
          des="The Hostel Management System Project is an efficient software solution tailored to simplify hostel administration, managing reservations, student records, and facility management !"
          src={projectTwo}
        />
      </div>
    </section>
  );
}
export default Projects

