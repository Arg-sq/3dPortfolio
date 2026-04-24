import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myProjects from "../datas/projects";
import ProjectCard from "../components/molecules/ProjectCard";

const Projects = () => {
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
        className="relative pt-32 pb-16 px-8 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(219,0,0,0.15), transparent 40%), radial-gradient(circle at 20% 80%, rgba(100,12,12,0.2), transparent 40%), #fff",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4"
            data-aos="fade-down"
          >
            My Work
          </p>
          <h1
            className="text-4xl sm:text-6xl font-extrabold font-poppins leading-tight blue-gradient_text"
            data-aos="fade-up"
          >
            Projects I've shipped
          </h1>
          <p
            className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            A mix of fintech dashboards, government portals, outsourcing work,
            and personal experiments.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
            {myProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Ashesh Rana Gurung
      </footer>
    </div>
  );
};

export default Projects;
