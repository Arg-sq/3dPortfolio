import React from "react";
import myProjects from "../datas/projects";
import { useParams } from "react-router-dom";
import {
  squadcast,
  qualtech,
  nepmeds,
  sikai,
  dharti,
  moru,
  web,
  dummy,
} from "../assets/images";

const ProjectDetailPage = () => {
  const { id } = useParams();

  const projectImage: { [key: string]: string } = {
    squadcast: squadcast,
    qualtech: qualtech,
    nepmeds: nepmeds,
    sikai: sikai,
    dharti: dharti,
    moru: moru,
    web: web,
    dummy: dummy,
  };

  return (
    <section className="relative w-full h-screen">
      <div className=" gap-6 mx-[10%] mt-24  flex  sm:justify-center md:justify-start">
     
       <div className="flex-[0.7]">
       {myProjects
          .filter((proj) => proj.id === +id)
          .map((proj) => (
            <div>
              <h1 className="subhead-text mb-4">{proj.title}</h1>
              <div className="w-[50dvw]">

              <img src={projectImage[proj.image]} alt="image" className="w-[100%] h-[100%]" />
                </div>
            </div>
          ))}
       </div>
       <div className="flex-[0.3]">
       <h1 className="subhead-text mb-4">Tech Stack Used</h1>
        
</div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
