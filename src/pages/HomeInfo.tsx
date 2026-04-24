import { ReactElement, useCallback } from "react";
import { init } from "ityped";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const ROLES = [
  "FullStack Developer",
  "Frontend Lecturer",
  "React Engineer",
  "TypeScript Nerd",
];

const InfoBox = ({
  text,
  link,
  btnText,
}: {
  link: string;
  text: string;
  btnText: string;
}) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn z-10">
      <p className="text-re">{btnText}</p> <img src={arrow} alt="arrow" />
    </Link>
  </div>
);

const HomeInfo = ({ currentStage }: { currentStage: number }) => {
  const attachIType = useCallback((el: HTMLSpanElement | null) => {
    if (!el) return;
    el.textContent = "";
    init(el, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      typeSpeed: 80,
      startDelay: 200,
      loop: true,
      strings: ROLES,
    });
  }, []);

  const renderContent: Record<number, ReactElement> = {
    1: (
      <h1 className="text-base sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-4 sm:px-8 text-white mx-3 sm:mx-5 max-w-[92vw]">
        Hi, I am <span className="font-semibold">Ashesh Rana Gurung</span>
        <br />a <span ref={attachIType}></span>
        <p>Scroll the bike &#x1f525; </p>
      </h1>
    ),
    2: (
      <InfoBox
        text="5+ years across fintech, healthcare, gov platforms, and SRE tooling — currently at Maitri Services & lecturing at Techspire."
        link="/about"
        btnText="Learn More in my About section"
      />
    ),
    3: (
      <InfoBox
        text="Led multiple project succcessfully live,  Want to view them? "
        link="/project"
        btnText="Visit My Projects"
      />
    ),
    4: (
      <InfoBox
        text="Looking for Hiring or wanna collab? I'm just a button away!"
        link="/contact"
        btnText="Let's talk"
      />
    ),
  };

  return renderContent[currentStage] || null;
};

export default HomeInfo;
