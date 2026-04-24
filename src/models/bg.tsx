import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import bgScene from "../assets/3d/rocket.glb";

const BikeLogo = () => {
  const birdRef = useRef<Group>(null!);
  const { scene } = useGLTF(bgScene, true, true);

  useFrame(({ clock }) => {
    if (!birdRef.current) return;
    const hoverAmplitude = 0.2;
    const hoverSpeed = 2;

    birdRef.current.rotation.y = 3.5;
    birdRef.current.rotation.z = 0;
    birdRef.current.position.y =
      -2 + Math.sin(clock.elapsedTime * hoverSpeed) * hoverAmplitude;
    birdRef.current.position.x =
      4.8 + Math.sin(clock.elapsedTime * hoverSpeed) * hoverAmplitude;
  });

  return (
    <group ref={birdRef} position={[4.4, 2, 1.2]} scale={[0.003, 0.0025, 0.002]}>
      <primitive object={scene} />
    </group>
  );
};

export default BikeLogo;
