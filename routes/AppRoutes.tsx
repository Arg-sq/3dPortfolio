import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutMe from "../src/pages/AboutMe";
import { PORTFOLIO_ROUTES } from "./routeConstant";
import Navbar from "../src/pages/Navbar";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";

const openRoutes = [
    {
        path: PORTFOLIO_ROUTES.HOME,
        element: <Home />,
    },
    {
        path: PORTFOLIO_ROUTES.ABOUT,
        element: <AboutMe />,
    },
    {
        path: PORTFOLIO_ROUTES.PROJECT,
        element: <Projects />,
    },
    {
        path: PORTFOLIO_ROUTES.CONTACT,
        element: <Contact />,
    },
];
const AppRoutes = () => {
    const element = useRoutes(openRoutes);
    return (
        <main className="bg-slate-300/20">
            <Navbar />
            {element}
        </main>
    );
};

export default AppRoutes;
