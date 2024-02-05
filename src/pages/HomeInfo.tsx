import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }: { link: string; text: string; btnText: string }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn z-10">
            <p className="text-re">{btnText}</p> <img src={arrow} alt="arrow" />
        </Link>
    </div>
);
const HomeInfo = ({ currentStage }) => {
    const textRef = useRef();
    const renderContent = {
        1: (
            <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
                Hi, I am <span className="font-semibold">Ashesh Rana Gurung</span>
                <br />a <span ref={textRef}></span>
                <p>Scroll the bike &#x1f525; </p>
            </h1>
        ),
        2: (
            <InfoBox
                text="worked with fintech, government, outsource company and picked up many skills "
                link="/about"
                btnText="Learn More in my About section"
            />
        ),
        3: (
            <InfoBox
                text="Led multiple project succcessfully live,  Want to view them? "
                link="/portfolio"
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

    useEffect(() => {
        if (currentStage === 1) {
            init(textRef.current, {
                showCursor: true,
                backDelay: 100,
                backSpeed: 50,
                strings: ["React Developer", "Blog creator", "FE instructor"],
            });
        }
    }, []);
    return renderContent[currentStage] || null;
};

export default HomeInfo;
