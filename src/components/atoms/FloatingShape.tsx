import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Shape = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.3;
    ref.current.rotation.y += dt * 0.4;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[0.9, 0.28, 160, 24]} />
      <meshStandardMaterial
        color="#db0000"
        roughness={0.25}
        metalness={0.85}
        emissive="#640c0c"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
};

const FloatingShape = () => (
  <Canvas
    className="absolute inset-0 pointer-events-none"
    camera={{ position: [0, 0, 3.5], fov: 55 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
  >
    <ambientLight intensity={0.4} />
    <directionalLight position={[3, 3, 3]} intensity={1.2} />
    <pointLight position={[-3, -2, -2]} intensity={0.5} color="#ff6a6a" />
    <Shape />
  </Canvas>
);

export default FloatingShape;
