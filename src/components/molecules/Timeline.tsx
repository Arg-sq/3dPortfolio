import { useEffect, useRef, useState } from "react";

export interface TimelineItem {
  year: string;
  title: string;
  org: string;
  desc: string;
}

interface Props {
  items: TimelineItem[];
}

const Timeline = ({ items }: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [fillPct, setFillPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const traveled = Math.min(Math.max(vh - rect.top, 0), total);
      setFillPct((traveled / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="relative py-10">
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gray-200" />
      <div
        className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#db0000] to-[#640c0c] transition-[height] duration-150"
        style={{ height: `${fillPct}%` }}
      />

      <ul className="relative flex flex-col gap-14">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <li key={i} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <div
                className={`${isLeft ? "" : "invisible"} text-right pr-6`}
                data-aos="fade-right"
              >
                {isLeft && <Card item={item} align="right" />}
              </div>

              <span
                className="relative w-5 h-5 rounded-full bg-white border-2 border-[#db0000] shadow-md z-10"
                data-aos="zoom-in"
              >
                <span className="absolute inset-0 rounded-full bg-[#db0000] animate-ping opacity-30" />
              </span>

              <div
                className={`${isLeft ? "invisible" : ""} pl-6`}
                data-aos="fade-left"
              >
                {!isLeft && <Card item={item} align="left" />}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Card = ({
  item,
  align,
}: {
  item: TimelineItem;
  align: "left" | "right";
}) => (
  <div
    className={`inline-block max-w-sm bg-white rounded-xl shadow-card border border-gray-100 p-5 ${
      align === "right" ? "text-right" : "text-left"
    }`}
  >
    <div className="text-xs font-semibold tracking-widest text-[#db0000] uppercase">
      {item.year}
    </div>
    <h4 className="mt-1 text-lg font-bold text-gray-900">{item.title}</h4>
    <div className="text-sm text-gray-500 mb-2">{item.org}</div>
    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
  </div>
);

export default Timeline;
