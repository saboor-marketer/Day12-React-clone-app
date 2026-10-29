import { useRef, useState } from "react";
import type { Title } from "../data";
import { Chevron, Play, Plus, Check, Info } from "./icons";

export function Card({
  t,
  inList,
  onToggle,
  onOpen,
}: {
  t: Title;
  inList: boolean;
  onToggle: (id: string) => void;
  onOpen: (t: Title) => void;
}) {
  return (
    <div className="group/card relative w-[150px] shrink-0 sm:w-[185px]">
      <button
        onClick={() => onOpen(t)}
        className="relative block w-full overflow-hidden rounded-md bg-white/5 ring-1 ring-white/10 transition duration-300 group-hover/card:ring-2 group-hover/card:ring-[#00a8e1]"
      >
        <img src={t.poster} alt={t.name} loading="lazy" className="aspect-[2/3] w-full object-cover transition duration-500 group-hover/card:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 transition group-hover/card:opacity-100" />
        {t.included && (
          <span className="absolute left-0 top-2 rounded-r bg-[#00a8e1] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
            Prime
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-2 text-left opacity-0 transition group-hover/card:translate-y-0 group-hover/card:opacity-100">
          <p className="truncate text-sm font-semibold">{t.name}</p>
          <p className="text-[11px] text-white/60">{t.year} · {t.duration}</p>
        </div>
      </button>
      <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition group-hover/card:opacity-100">
        <button
          onClick={() => onToggle(t.id)}
          title={inList ? "Remove from Watchlist" : "Add to Watchlist"}
          className="grid h-8 w-8 place-items-center rounded-full bg-black/70 ring-1 ring-white/30 backdrop-blur hover:bg-black"
        >
          {inList ? <Check className="h-4 w-4 text-[#00a8e1]" /> : <Plus className="h-4 w-4" />}
        </button>
      </div>
      <div className="pointer-events-none absolute inset-x-2 bottom-2 flex items-center gap-2 opacity-0 transition group-hover/card:opacity-0" />
    </div>
  );
}

export function Row({
  title,
  items,
  list,
  onToggle,
  onOpen,
}: {
  title: string;
  items: Title[];
  list: string[];
  onToggle: (id: string) => void;
  onOpen: (t: Title) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.85, behavior: "smooth" });
  if (!items.length) return null;

  return (
    <section className="relative mb-9" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <h2 className="mb-2 px-4 text-lg font-bold tracking-tight sm:px-10 md:text-xl">{title}</h2>
      <div ref={ref} className="no-scrollbar flex gap-2.5 overflow-x-auto scroll-smooth px-4 pb-2 sm:px-10">
        {items.map((t) => (
          <Card key={t.id} t={t} inList={list.includes(t.id)} onToggle={onToggle} onOpen={onOpen} />
        ))}
      </div>
      {[-1, 1].map((d) => (
        <button
          key={d}
          onClick={() => scroll(d)}
          className={`absolute top-10 hidden h-[calc(100%-3.25rem)] w-10 place-items-center bg-black/60 text-white transition hover:bg-black/80 md:grid ${
            d < 0 ? "left-0" : "right-0"
          } ${hover ? "opacity-100" : "opacity-0"}`}
        >
          <Chevron className={`h-7 w-7 ${d < 0 ? "rotate-180" : ""}`} />
        </button>
      ))}
    </section>
  );
}

export { Play, Info };
