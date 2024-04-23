import { useEffect } from "react";
import AOS from "aos";
import myProjects from "../datas/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-24 flex">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4"  data-aos="fade-up">
        {myProjects.map((project, index) => (
     <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
