import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress, active } = useProgress();
    const pct = Math.min(100, Math.round(progress));

    return (
        <Html center>
            <div className="flex flex-col items-center justify-center gap-3 select-none">
                <div className="relative w-48 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#db0000] to-[#640c0c] transition-[width] duration-200"
                        style={{ width: `${pct}%` }}
                    />
                </div>
                <span className="text-xs font-medium text-gray-700">
                    {active ? `Loading 3D scene… ${pct}%` : "Ready"}
                </span>
            </div>
        </Html>
    );
};

export default Loader;
