import myProjects from "../datas/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {

  return (
    <div className="container mx-auto mt-24 flex">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4"  >
        {myProjects.map((project, index) => (
     <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
