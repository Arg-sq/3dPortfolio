import myProjects from "../datas/projects";
import { useNavigate, useParams } from "react-router-dom";
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
import { PORTFOLIO_ROUTES } from "../../routes/routeConstant";

const ProjectDetailPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();

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
  const individualProject =
    myProjects.filter((proj) => proj.id === +id)[0] ?? [];

  return (
    <section className="relative w-full h-screen">
      <div className=" flex gap-14 mx-[10%] mt-24   sm:flex-col md:flex-row sm:justify-center md:justify-start">
        <div className="flex-[0.7]">
          <div>
            <div className="flex">
              <h1
                className="subhead-text mb-4 cursor-pointer"
                onClick={() => navigate(PORTFOLIO_ROUTES.PROJECT)}
              >
                Projects &gt;
              </h1>
              <h1 className="subhead-text mb-4">{individualProject.title}</h1>
            </div>
            <div className="w-[45dvw] flex flex-col gap-y-8">
              <img
                src={projectImage[individualProject.image]}
                alt="image"
                className="w-[100%] h-[100%]"
              />
              <div className=" flex flex-col gap-4">
                <p className="font-semibold text-lg">
                  My Contribution
                  </p>
                {individualProject.myContribution?.map((tech) => (
                  <p key={tech}>
                    <li>{tech}</li>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[0.3]">
          <h1 className="subhead-text mb-4">Some Highlighted Tech Used</h1>
          <div className="mb-4">
            {individualProject.tech?.map((tech) => (
              <li>{tech}</li>
            ))}
          </div>
          <h1 className="subhead-text ">Want To know more about the client?</h1>
          <div className="mb-4">
            <a style={{ color: "blue" }} href={individualProject.link}>
              Click here
            </a>
          </div>
          <iframe
            src={individualProject.iframeLink}
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
