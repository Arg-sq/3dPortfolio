import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PointCloud = ({
  count,
  spread,
  size,
  color,
  opacity,
  speed,
}: {
  count: number;
  spread: [number, number, number];
  size: number;
  color: string;
  opacity: number;
  speed: number;
}) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * spread[0];
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread[1];
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread[2];
    }
    return arr;
  }, [count, spread]);

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * speed;
    ref.current.rotation.x += dt * speed * 0.3;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </points>
  );
};

const Orb = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.12;
    ref.current.rotation.y += dt * 0.18;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color="#db0000" wireframe transparent opacity={0.25} />
    </mesh>
  );
};

const ParticleField = () => (
  <Canvas
    className="absolute inset-0 pointer-events-none"
    camera={{ position: [0, 0, 3.5], fov: 60 }}
    dpr={[1, 1.5]}
    gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
  >
    <Orb />
    <PointCloud
      count={2500}
      spread={[14, 9, 9]}
      size={0.025}
      color="#db0000"
      opacity={0.75}
      speed={0.05}
    />
    <PointCloud
      count={600}
      spread={[12, 8, 8]}
      size={0.06}
      color="#640c0c"
      opacity={0.55}
      speed={0.03}
    />
    <PointCloud
      count={120}
      spread={[10, 7, 6]}
      size={0.12}
      color="#ff6a6a"
      opacity={0.7}
      speed={0.02}
    />
  </Canvas>
);

export default ParticleField;
