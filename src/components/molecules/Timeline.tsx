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
    <div ref={wrapRef} className="relative py-6 sm:py-10">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-gray-200" />
      <div
        className="absolute left-4 md:left-1/2 top-0 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-[#db0000] to-[#640c0c] transition-[height] duration-150"
        style={{ height: `${fillPct}%` }}
      />

      <ul className="relative flex flex-col gap-8 md:gap-14">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <li
              key={i}
              className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 pl-12 md:pl-0"
            >
              <div
                className={`hidden md:block ${isLeft ? "" : "invisible"} text-right pr-6`}
                data-aos="fade-right"
              >
                {isLeft && <Card item={item} align="right" />}
              </div>

              <span
                className="absolute left-4 top-6 -translate-x-1/2 md:static md:translate-x-0 md:mx-auto w-5 h-5 rounded-full bg-white border-2 border-[#db0000] shadow-md z-10"
                data-aos="zoom-in"
              >
                <span className="absolute inset-0 rounded-full bg-[#db0000] animate-ping opacity-30" />
              </span>

              <div
                className={`md:hidden`}
                data-aos="fade-left"
              >
                <Card item={item} align="left" />
              </div>

              <div
                className={`hidden md:block ${isLeft ? "invisible" : ""} pl-6`}
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
    className={`inline-block w-full md:max-w-sm bg-white rounded-xl shadow-card border border-gray-100 p-4 sm:p-5 text-left ${
      align === "right" ? "md:text-right" : "md:text-left"
    }`}
  >
    <div className="text-xs font-semibold tracking-widest text-[#db0000] uppercase">
      {item.year}
    </div>
    <h4 className="mt-1 text-base sm:text-lg font-bold text-gray-900">{item.title}</h4>
    <div className="text-sm text-gray-500 mb-2">{item.org}</div>
    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
  </div>
);

export default Timeline;
