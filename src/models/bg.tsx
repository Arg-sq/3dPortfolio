import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import bgScene from "../assets/3d/rocket.glb";
import { useFrame } from "@react-three/fiber";

const BikeLogo = () => {
    const birdRef = useRef();

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(bgScene);
    const { actions } = useAnimations(animations, birdRef);

    useFrame(({ clock }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        const hoverAmplitude = 0.2; // Adjust this value to control the amplitude of the hover
        const hoverSpeed = 2; // Adjust this value to control the speed of the hover

        birdRef.current.rotation.y = 3.5;
        birdRef.current.rotation.z = 0;

        // Invert the Y position to place it at the bottom
        birdRef.current.position.y = -2 + Math.sin(clock.elapsedTime * hoverSpeed) * hoverAmplitude;
        birdRef.current.position.x =
            4.8 + Math.sin(clock.elapsedTime * hoverSpeed) * hoverAmplitude;
    });

    return (
        // to create and display 3D objects
        <mesh ref={birdRef} position={[4.4, 2, 1.2]} scale={[0.003, 0.0025, 0.002]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default BikeLogo;
