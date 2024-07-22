import { useEffect } from "react";
import { ashesh } from "../assets/images";
import AOS from "aos";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="relative  h-[100vh] overflow-hidden">
      <section className="relative mr-8 ">
        <div id="about" className="relative bg-white overflow-hidden mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
              </svg>

              <div className="pt-1"></div>

              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                    About me
                  </h2>

                  <p className="pr-8">
                    My name is Ashesh Gurung. I've been working on this IT field
                    since 2021 with a strong IT background as I've done my
                    bachelor's degree in Bsc.CSIT .
                    <br />I am a highly skilled FullStack|React developer with
                    experience in developing applications for digital wallet
                    companies,government projects,indian-client projects and
                    in-house projects, Currently, I am working for a
                    product-based company(Code himalaya) where I am constantly
                    seeking opportunities to learn new technologies and expand
                    my knowledge base.
                    <br />
                    <br />
                    My expertise lies in building dynamic and responsive user
                    interfaces and FE architechture using React,
                    typescript,chakra,MUI,Redux,zustand,RTK,React-query
                    ,graphql,RTL,Jest and JavaScript with Node,express
                    ,postgres,MongoDB. I have a proven track record of
                    successfully delivering high-quality projects within tight
                    deadlines, and I am always striving to improve my skills and
                    stay up-to-date with the latest industry trends. I am
                    passionate about collaborating with cross-functional teams
                    and working on challenging projects that require innovative
                    solutions.
                  </p>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={ashesh}
              alt="asheshx"
            />
          </div>
        </div>
      </section>
      <div className="absolute w-[100dvw] z-10 bottom-0" data-aos={"fade-up"}>
        <div className="absolute w-full left-[18%] bottom-[70%]">
          <a
            href=" 
https://drive.google.com/file/d/1fd-8bwq7lLaI9iwyztcPb40-kcW7fu7r/view?usp=sharing
"
          >
            <button className="btn mt-8 z-20 animate-bounce absolute">
              View my CV
            </button>
          </a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ff0000"
            fill-opacity="1"
            d="M0,256L48,213.3C96,171,192,85,288,90.7C384,96,480,192,576,245.3C672,299,768,309,864,304C960,299,1056,277,1152,261.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutMe;
