/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";
import Bike from "../models/Bike";
import Bg from "../models/bg";
import Plane from "../models/Plane";
import HomeInfo from "./HomeInfo";

const Home = () => {
    const [rotating, setRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustBikeForScreenSize = () => {
        let screenScale = null;
        let screenPosition = null;
        const rotation = [0.1, 4.8, 0];
        if (window.innerWidth < 768) {
            screenScale = [15, 15, 15];
            screenPosition = [0.8, -5, -43];
        } else {
            screenScale = [40, 40, 40];
            screenPosition = [0, -25.5, -53];
        }
        return [screenScale, screenPosition, rotation];
    };
    const [bikeScale, bikePosition, bikeRotation] = adjustBikeForScreenSize();

    const adjustLogoForScreenSize = () => {
        let screenScale, screenPosition;

        const rotation = [0, 20.1, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.2, 0.2, 0.2];
            screenPosition = [0, -1, 3];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [-5, 2, 1];
        }

        return [screenScale, screenPosition, rotation];
    };

    const [logoScale, screenPosition, logoRotation] = adjustLogoForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0000" fill-opacity="0.8" d="M0,288L48,245.3C96,203,192,117,288,85.3C384,53,480,75,576,117.3C672,160,768,224,864,213.3C960,203,1056,117,1152,85.3C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="absolute top-28 left-0 right-0 flex items-center justify-center">
                
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            
            <Canvas
                className={`w-full absoulte top-1 h-screen bg-transparent ${
                    rotating ? "cursor-grabbing" : "cursor-grab"
                }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[20, 10, 200]} intensity={3} />
                    <pointLight intensity={2}/>
                    <spotLight />
                    <hemisphereLight groundColor="black" intensity={1} />
                    <ambientLight intensity={1} />
                    <Bike
                        position={bikePosition}
                        scale={bikeScale}
                        rotation={bikeRotation}
                        isRotating={rotating}
                        setCurrentStage={setCurrentStage}
                        setIsRotating={setRotating}
                    />
                    <Plane
                        isRotating={rotating}
                        logoScale={logoScale}
                        position={screenPosition}
                        rotation={logoRotation}
                    />
                    <Bg />
                    
                </Suspense>
            </Canvas>
         
        </section>
    );
};

export default Home;
