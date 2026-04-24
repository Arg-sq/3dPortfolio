import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import planeScene from "../assets/3d/plane.glb";

interface PlaneProps {
  isRotating?: boolean;
  logoScale?: [number, number, number] | number[];
  position?: [number, number, number] | number[];
  rotation?: [number, number, number] | number[];
}

const Plane = ({ isRotating: _isRotating, ...props }: PlaneProps) => {
  const ref = useRef<Group>(null!);
  const { scene, animations } = useGLTF(planeScene, true, true);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"]?.play();
  }, [actions]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = 7.8;
    ref.current.rotation.z = 7;
    ref.current.position.x = Math.tan(0.3 * clock.elapsedTime);
  });

  return (
    <group {...(props as object)} ref={ref}>
      <primitive object={scene} />
    </group>
  );
};

export default Plane;
