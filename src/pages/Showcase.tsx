import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import myProjects from "../datas/projects";
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
import ParticleField from "../components/atoms/ParticleField";

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

const domains = [
  {
    title: "Fintech & Wallets",
    icon: "💳",
    desc: "Loan management, digital wallets, and payment flows — shipped at Qualtech and Moru.",
    tint: "from-[#db0000]/10 to-[#db0000]/0",
  },
  {
    title: "SRE & DevOps",
    icon: "📟",
    desc: "Remote work on Squadcast's reliability-automation & incident-response platform (Chakra + GraphQL).",
    tint: "from-[#640c0c]/10 to-[#640c0c]/0",
  },
  {
    title: "Healthcare & Gov",
    icon: "🏛️",
    desc: "Doctor-appointment system (Nepmeds) and trainee management for Nepal Administrative Staff College.",
    tint: "from-[#db0000]/10 to-[#db0000]/0",
  },
  {
    title: "Marketing & SaaS",
    icon: "🚀",
    desc: "Indian-client marketing sites (Dharti Agro) in Next.js, plus internal systems and blog platforms.",
    tint: "from-[#640c0c]/10 to-[#640c0c]/0",
  },
];

const skills = [
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Python", color: "#3776ab" },
  { name: "FastAPI", color: "#009688" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#6cc24a" },
  { name: "React Query", color: "#ff4154" },
  { name: "GraphQL", color: "#e535ab" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Zustand", color: "#443e38" },
  { name: "Jest / RTL", color: "#c21325" },
];

const Showcase = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      setScrollProgress(pct);
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
        className="relative min-h-screen overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(219,0,0,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(100,12,12,0.2), transparent 40%), #fff",
        }}
      >
        <div className="relative max-w-6xl mx-auto px-8 pt-32 pb-16 min-h-screen grid lg:grid-cols-[1.1fr_1fr] gap-10 items-stretch">
          <div
            className="relative h-[60vh] lg:h-auto min-h-[420px] rounded-3xl overflow-hidden"
            data-aos="fade-right"
          >
            <ParticleField />
          </div>

          <div className="flex flex-col justify-center" data-aos="fade-left">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Portfolio — Ashesh Rana Gurung
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins leading-tight blue-gradient_text">
              5+ years building fast, tested web products.
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              Frontend-focused full-stack developer. Currently at
              <strong> Maitri Services</strong> and lecturing React.js at
              <strong> Techspire College</strong>. Core stack:
              <strong> React, TypeScript, Python, FastAPI</strong>.
            </p>
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link to={PORTFOLIO_ROUTES.PROJECT} className="btn">
                View Projects
              </Link>
              <Link
                to={PORTFOLIO_ROUTES.ABOUT}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50"
              >
                About me
              </Link>
              <Link
                to={PORTFOLIO_ROUTES.CONTACT}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>
            <div
              className="mt-12 text-gray-400 text-sm flex items-center gap-2"
              aria-hidden
            >
              <span className="animate-bounce">↓</span>
              <span>scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 text-center"
            data-aos="fade-up"
          >
            Domains
          </p>
          <h2 className="head-text text-center mb-4" data-aos="fade-up">
            What I build
          </h2>
          <p
            className="text-center text-gray-500 max-w-2xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            A cross-section of the industries and product types I've delivered
            in over the last five years.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {domains.map((d, i) => (
              <div
                key={d.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`relative p-7 rounded-2xl bg-gradient-to-br ${d.tint} border border-gray-100 shadow-card hover:-translate-y-1 transition-transform`}
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="text-xl font-bold font-poppins mb-2">
                  {d.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to={PORTFOLIO_ROUTES.ABOUT}
              className="text-sm font-semibold text-[#db0000] hover:underline"
            >
              Read the full bio & timeline →
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-28 px-8"
        style={{
          background:
            "linear-gradient(180deg, #fff 0%, rgba(237,245,255,0.5) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="head-text mb-12 text-center" data-aos="fade-up">
            Stack I work with
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                data-aos="zoom-in"
                data-aos-delay={i * 60}
                className="p-5 rounded-xl bg-white shadow-card border border-gray-100 flex items-center gap-3 hover:-translate-y-1 transition-transform"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: skill.color }}
                />
                <span className="font-medium text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="head-text" data-aos="fade-right">
              Selected work
            </h2>
            <Link
              to={PORTFOLIO_ROUTES.PROJECT}
              className="text-sm text-[#db0000] hover:underline"
              data-aos="fade-left"
            >
              See all →
            </Link>
          </div>
          <div className="flex flex-col gap-16">
            {myProjects.slice(0, 5).map((project, i) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <Link to={`/project/${project.id}`} className="block group">
                  <div className="overflow-hidden rounded-xl shadow-card bg-gray-100">
                    <img
                      src={projectImage[project.image]}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Project 0{i + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-poppins mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/project/${project.id}`}
                    className="text-sm font-semibold text-[#db0000] hover:underline"
                  >
                    Read case study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 px-8 bg-gradient-to-br from-[#db0000] to-[#640c0c] text-white">
        <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins mb-6">
            Have a project in mind?
          </h2>
          <p className="text-white/80 mb-10 text-lg">
            Whether you're hiring, collaborating, or just curious — my inbox is
            open.
          </p>
          <Link
            to={PORTFOLIO_ROUTES.CONTACT}
            className="inline-block px-8 py-4 bg-white text-[#db0000] font-bold rounded-lg shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            Let's talk →
          </Link>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Ashesh Rana Gurung —
        <a
          href="https://asheshgurung.com.np/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline ml-1"
        >
          asheshgurung.com.np
        </a>
      </footer>
    </div>
  );
};

export default Showcase;
