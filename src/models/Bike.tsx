import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import type { Group } from "three";
import bikeScene from "../assets/3d/sports_bike.glb";

interface BikeProps {
  isRotating: boolean;
  setIsRotating: (v: boolean) => void;
  setCurrentStage: (v: number | null) => void;
  position?: number[];
  scale?: number[];
  rotation?: number[];
}

type PointerLike = PointerEvent & { touches?: TouchList };

const Bike = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}: BikeProps) => {
  const bikeRef = useRef<Group>(null!);
  const { scene } = useGLTF(bikeScene, true, true);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: PointerLike) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (e: PointerLike) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e: PointerLike) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isRotating || !bikeRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    bikeRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!bikeRef.current) return;
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      bikeRef.current.rotation.y += 0.005 * 8;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      bikeRef.current.rotation.y -= 0.005 * 8;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown as EventListener);
    canvas.addEventListener("pointerup", handlePointerUp as EventListener);
    canvas.addEventListener("pointermove", handlePointerMove as EventListener);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      canvas.removeEventListener(
        "pointerdown",
        handlePointerDown as EventListener
      );
      canvas.removeEventListener("pointerup", handlePointerUp as EventListener);
      canvas.removeEventListener(
        "pointermove",
        handlePointerMove as EventListener
      );
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerMove, handlePointerUp, handleKeyDown, handleKeyUp]);

  useFrame(() => {
    if (!bikeRef.current) return;
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      bikeRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = bikeRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    <a.group ref={bikeRef} {...(props as object)} dispose={null}>
      <primitive object={scene} />
    </a.group>
  );
};

export default Bike;
