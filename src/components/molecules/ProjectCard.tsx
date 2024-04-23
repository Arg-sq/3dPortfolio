import { generatePath, useNavigate } from "react-router-dom";
import { squadcast, qualtech, nepmeds, sikai, dharti,moru ,web,dummy} from "../../assets/images";

import "aos/dist/aos.css";
import { PORTFOLIO_ROUTES } from "../../../routes/routeConstant";
interface ICard {
  key: number;
  project: {
    id:number;
    title: string;
    desc: string;
    image: string;
  };
}
const animation = [
  "fade-up",
  "fade-down",
  "fade-right",
  "fade-left",
  "zoom-in",
  "zoom-out",
  "slide-up",
  "flip-up",
  "flip-down",
  "flip-right",
  "flip-left",
];
const ProjectCard = ({ key, project }: ICard) => {
  const projectImage: { [key: string]: string } = {
    squadcast: squadcast,
    qualtech: qualtech,
    nepmeds: nepmeds,
    sikai: sikai,
    dharti: dharti,
    moru:moru,
    web:web,
    dummy:dummy,
  };
  function getRandomAnimationIndex() {
    return Math.floor(Math.random() * animation.length);
  }
  const navigate=useNavigate()
  const randomAnimationIndex = getRandomAnimationIndex();
  const randomAnimation = animation[randomAnimationIndex];



  return (
    <div
      data-aos={randomAnimation}
      key={key}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <div className=" overflow-hidden bg-cover bg-no-repeat">
          <img
            className="w-[100%] h-52 rounded-t-lg transition duration-300 ease-in-out hover:scale-110 hover:opacity-50"
            src={projectImage[project.image]}
            alt={project.title}
          />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {project.desc}
        </p>
        <div
          className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={()=>navigate(generatePath(`${PORTFOLIO_ROUTES.PROJECT_DETAILS}`,{id:project.id}))}
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
