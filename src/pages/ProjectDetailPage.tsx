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
    <section className="relative w-full min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 mx-5 sm:mx-[8%] md:mx-[10%] mt-24 pb-16">
        <div className="w-full md:flex-[0.7] min-w-0">
          <div>
            <div className="flex flex-wrap items-center gap-x-2">
              <h1
                className="subhead-text mb-2 md:mb-4 cursor-pointer"
                onClick={() => navigate(PORTFOLIO_ROUTES.PROJECT)}
              >
                Projects &gt;
              </h1>
              <h1 className="subhead-text mb-2 md:mb-4 break-words">
                {individualProject.title}
              </h1>
            </div>
            <div className="w-full md:w-[45dvw] flex flex-col gap-y-6 md:gap-y-8">
              <img
                src={projectImage[individualProject.image]}
                alt="image"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="font-semibold text-base sm:text-lg">
                  My Contribution
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                  {individualProject.myContribution?.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex-[0.3]">
          <h1 className="subhead-text mb-3 md:mb-4">Some Highlighted Tech Used</h1>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-sm sm:text-base">
            {individualProject.tech?.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <h1 className="subhead-text">
            Want To know more about the{" "}
            {"iframeLink" in individualProject ? "client" : "project"}?
          </h1>
          <div className="mb-4">
            <a
              style={{ color: "blue" }}
              href={individualProject.link}
              className="break-all"
            >
              Click here
            </a>
          </div>
          <div className="w-full aspect-video max-w-[600px]">
            <iframe
              title="project-embed"
              src={
                individualProject.iframeLink ??
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0684188647137!2d85.31185028695269!3d27.684280165144962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1941d6562495%3A0xb92005dfe4181c00!2sCode%20Himalaya!5e0!3m2!1sen!2snp!4v1713937056715!5m2!1sen!2snp"
              }
              className="w-full h-full border-0 rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
