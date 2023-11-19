import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import bikeScene from "../assets/3d/sports_bike.glb";
import { a } from "@react-spring/three";
import { BufferGeometry, NormalBufferAttributes } from "three";

const Bike = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const bikeRef = useRef();
    const { nodes, materials } = useGLTF(bikeScene);
    const { gl, viewport } = useThree();

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    };

    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            bikeRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (event) => {
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

    // Handle keyup events
    const handleKeyUp = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            setIsRotating(false);
        }
    };
    useEffect(() => {
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [gl, handlePointerDown, handlePointerMove, handlePointerUp]);
    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;
            if (Math.abs(rotationSpeed.curent) < 0.001) {
                rotationSpeed.current = 0;
            }
            bikeRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = bikeRef.current.rotation.y;

            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
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
    }, []);
    return (
        <a.group ref={bikeRef} {...props} dispose={null}>
            <group scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <group position={[0.062, 0.201, 0.37]} rotation={[0, 0, Math.PI]} scale={0.001}>
                        <mesh
                            geometry={
                                nodes.carpaint_body_front004_chrome_0
                                    .geometry as BufferGeometry<NormalBufferAttributes>
                            }
                            material={materials.chrome}
                        />
                        <mesh
                            geometry={
                                nodes.carpaint_body_front004_chrome_0_1
                                    .geometry as BufferGeometry<NormalBufferAttributes>
                            }
                            material={materials.chrome}
                        />
                        <mesh
                            geometry={
                                nodes.carpaint_body_front004_chrome_0_2
                                    .geometry as BufferGeometry<NormalBufferAttributes>
                            }
                            material={materials.chrome}
                        />
                    </group>
                    <mesh
                        geometry={
                            nodes.carpaint_body_front_metal_rough_plus_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.metal_rough_plus}
                        position={[-0.024, 0.159, 0.21]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front001_carpaint_red_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.carpaint_red}
                        position={[-0.001, -0.266, 0.683]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front002_paintRed_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.paintRed}
                        position={[-0.007, -0.224, 0.381]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front003_tire_sw_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.tire_sw}
                        position={[0.001, -0.088, 0.305]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front005_plastic_rough_grey_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.plastic_rough_grey}
                        position={[0, -0.085, 0.716]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front006_brakes_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.brakes}
                        position={[0, -0.174, 0.304]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front007_metal_black_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.metal_black}
                        position={[0.009, -0.033, 0.515]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front008_chrome_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.chrome}
                        position={[-0.005, -0.296, 0.546]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front009_metal_rough_plus_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.metal_rough_plus}
                        position={[0.03, 0.422, 0.416]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front010_metal_frey_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.metal_frey}
                        position={[-0.012, -0.551, 0.457]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front011_plasticOrange_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.plasticOrange}
                        position={[-0.002, 0.277, 0.617]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front012_glass_clear_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.glass_clear}
                        position={[-0.002, 0.769, 0.851]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front013_leather_black_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.leather_black}
                        position={[0, 0.335, 0.834]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front014_chrome_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.chrome}
                        position={[0, -0.143, 0.802]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front015_glass_orange_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.glass_orange}
                        position={[0, 0.076, 0.697]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front016_glass_red_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.glass_red}
                        position={[0, 0.821, 0.885]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front017_paintGoldSemi_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.paintGoldSemi}
                        position={[-0.046, -0.03, 0.617]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front018_goldChrome_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.goldChrome}
                        position={[0, -0.651, 0.474]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front019_plasticBrown_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.plasticBrown}
                        position={[-0.117, -0.185, 0.859]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front020_metal_rough_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.metal_rough}
                        position={[-0.16, 0.505, 0.381]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front021_metal_blue_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.metal_blue}
                        position={[0, -0.451, 0.942]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front022_plastic_rough_grey_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.plastic_rough_grey}
                        position={[0.138, -0.366, 0.959]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front023_plasticRed_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.plasticRed}
                        position={[-0.168, -0.382, 0.956]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front024_plastic_rough_black_plus_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.plastic_rough_black_plus}
                        position={[-0.01, -0.17, 0.602]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front025_decals_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.decals}
                        position={[-0.007, -0.266, 0.796]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                    <mesh
                        geometry={
                            nodes.carpaint_body_front026_glass_clear_0
                                .geometry as BufferGeometry<NormalBufferAttributes>
                        }
                        material={materials.glass_clear}
                        position={[0, -0.721, 0.817]}
                        rotation={[0, 0, Math.PI]}
                        scale={0.001}
                    />
                </group>
            </group>
        </a.group>
    );
};

export default Bike;
