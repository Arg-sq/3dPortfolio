import myProjects from "../datas/projects";
import ProjectCard from "../components/ProjectCard";
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
      {/* <div className="absolute w-full" data-aos={"fade-down"}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0000" fill-opacity="0.8" d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,53.3C672,43,768,21,864,32C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div> */}
      <div className=" gap-6 mx-[10%] mt-24  flex  sm:justify-center md:justify-start">
        <div className="grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {myProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Projects;
