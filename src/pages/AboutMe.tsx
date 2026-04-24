import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ashesh } from "../assets/images";
import Timeline from "../components/molecules/Timeline";
import { experience } from "../datas/experience";

const AboutMe = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setScrollProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50">
        <div
          className="h-full bg-gradient-to-r from-[#db0000] to-[#640c0c] transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <section
        className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-8 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(219,0,0,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(100,12,12,0.2), transparent 40%), #fff",
        }}
      >
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div data-aos="fade-right">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4">
              About me
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight blue-gradient_text mb-5 sm:mb-6">
              Ashesh Rana Gurung
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify mb-6">
              Frontend-focused <strong>full-stack developer with 5+ years</strong> of
              experience shipping production software. I've worked across
              digital wallets, healthcare, government platforms, SRE/DevOps
              tooling, Indian-client projects, and internal systems.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify mb-6">
              Currently a <strong>Software Engineer at Maitri Services</strong> and a
              <strong> Lecturer at Techspire College</strong>, where I teach
              JavaScript and React.js.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Core focus: <strong>React, TypeScript, Python, FastAPI</strong>.
              Day-to-day I also reach for Next.js, Zustand, React Query,
              GraphQL, and Jest/RTL on the frontend, with Node/Express on the
              backend when the project calls for it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1fd-8bwq7lLaI9iwyztcPb40-kcW7fu7r/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                View my CV
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img
              src={ashesh}
              alt="Ashesh"
              className="w-full max-w-md h-80 sm:h-96 lg:h-[32rem] object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 px-5 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="head-text text-center mb-4" data-aos="fade-up">
            Experience timeline
          </h2>
          <p
            className="text-center text-gray-500 mb-16"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            The roles and products I've worked on since 2021.
          </p>
          <Timeline items={experience} />
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Ashesh Rana Gurung
      </footer>
    </div>
  );
};

export default AboutMe;
