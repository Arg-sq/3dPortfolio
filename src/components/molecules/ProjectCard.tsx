import { generatePath, useNavigate } from "react-router-dom";
import {
  squadcast,
  qualtech,
  nepmeds,
  sikai,
  dharti,
  moru,
  web,
  dummy,
} from "../../assets/images";

import "aos/dist/aos.css";
import { PORTFOLIO_ROUTES } from "../../../routes/routeConstant";

interface ICard {
  project: {
    id: number;
    title: string;
    desc: string;
    image: string;
    link: string;
    tech: Array<string>;
    myContribution: Array<string>;
    iframeLink?: string;
  };
  index?: number;
}

const projectImage: { [key: string]: string } = {
  squadcast,
  qualtech,
  nepmeds,
  sikai,
  dharti,
  moru,
  web,
  dummy,
};

const ProjectCard = ({ project, index = 0 }: ICard) => {
  const navigate = useNavigate();
  const goToDetails = () =>
    navigate(
      generatePath(`${PORTFOLIO_ROUTES.PROJECT_DETAILS}`, {
        id: String(project.id),
      })
    );

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 6) * 80}
      className="group flex flex-col bg-white border border-gray-200 rounded-xl shadow-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="overflow-hidden cursor-pointer" onClick={goToDetails}>
        <img
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500 ease-out"
          src={projectImage[project.image]}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h5>
        <p className="mb-4 text-sm font-normal text-gray-600 line-clamp-3 flex-1">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-700"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-gray-100 text-gray-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
        <button
          onClick={goToDetails}
          className="cursor-pointer inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#db0000] to-[#640c0c] rounded-lg hover:opacity-90 transition-opacity"
        >
          Read case study
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
