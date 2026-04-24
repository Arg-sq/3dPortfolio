import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { PORTFOLIO_ROUTES } from "./routeConstant";
import Navbar from "../src/pages/Navbar";
import PageFallback from "../src/components/atoms/PageFallback";

const Home = lazy(() => import("../src/pages/Home"));
const AboutMe = lazy(() => import("../src/pages/AboutMe"));
const Projects = lazy(() => import("../src/pages/Projects"));
const Contact = lazy(() => import("../src/pages/Contact"));
const ProjectDetailPage = lazy(() => import("../src/pages/ProjectDetailPage"));
const Showcase = lazy(() => import("../src/pages/Showcase"));

const openRoutes = [
    { path: PORTFOLIO_ROUTES.HOME, element: <Home /> },
    { path: PORTFOLIO_ROUTES.ABOUT, element: <AboutMe /> },
    { path: PORTFOLIO_ROUTES.PROJECT, element: <Projects /> },
    { path: PORTFOLIO_ROUTES.CONTACT, element: <Contact /> },
    { path: PORTFOLIO_ROUTES.PROJECT_DETAILS, element: <ProjectDetailPage /> },
    { path: PORTFOLIO_ROUTES.SHOWCASE, element: <Showcase /> },
];

const AppRoutes = () => {
    const element = useRoutes(openRoutes);
    return (
        <main className="bg-slate-300/20">
            <Navbar />
            <Suspense fallback={<PageFallback />}>{element}</Suspense>
        </main>
    );
};

export default AppRoutes;
