import myProjects from "../datas/projects";
import ProjectCard from "../components/molecules/ProjectCard";
import { useEffect } from "react";
import AOS from "aos";

const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
  return (
    <section className="relative w-full h-screen">
      <div className=" gap-6 mx-[10%] mt-24  flex  sm:justify-center md:justify-start">
        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
