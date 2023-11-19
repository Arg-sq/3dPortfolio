import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useFrame } from "@react-three/fiber";

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);
    useEffect(() => {
        actions["Take 001"]?.play();
    }, [actions]);
    useFrame(({ clock }) => {
        // Update the Y position to simulate bird-like motion using a sine wave
        ref.current.rotation.y = 7.8;
        ref.current.rotation.z = 7;

        ref.current.position.x = Math.sin(clock.elapsedTime) - 4.5;
    });

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;
