import { useEffect } from "react";
import type { Title } from "../data";
import { Close, Play, Plus, Check } from "./icons";

export default function Modal({
  t,
  inList,
  onToggle,
  onClose,
}: {
  t: Title;
  inList: boolean;
  onToggle: (id: string) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-[#0f171e] shadow-2xl ring-1 ring-white/10"
      >
        <div className="relative">
          <img src={t.backdrop} alt="" className="h-56 w-full object-cover sm:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f171e] via-[#0f171e]/40 to-transparent" />
          <button onClick={onClose} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/70 hover:bg-black">
            <Close />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">{t.name}</h2>
          </div>
        </div>
        <div className="space-y-4 p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <span className="rounded bg-[#f5c518] px-1.5 py-0.5 text-xs font-bold text-black">IMDb {t.imdb}</span>
            <span>{t.year}</span>
            <span className="rounded border border-white/30 px-1.5 text-xs">{t.rating}</span>
            <span>{t.duration}</span>
            <span>{t.genres.join(" · ")}</span>
            {t.included && <span className="font-semibold text-[#00a8e1]">Included with Prime</span>}
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded bg-[#00a8e1] px-6 py-2.5 font-semibold text-black transition hover:bg-[#2bbbf0]">
              <Play /> Play {t.seasons ? "S1 E1" : ""}
            </button>
            <button
              onClick={() => onToggle(t.id)}
              className="flex items-center gap-2 rounded bg-white/10 px-5 py-2.5 font-semibold ring-1 ring-white/25 transition hover:bg-white/20"
            >
              {inList ? <Check className="h-5 w-5 text-[#00a8e1]" /> : <Plus />}
              {inList ? "In Watchlist" : "Watchlist"}
            </button>
          </div>
          <p className="max-w-2xl text-white/80">{t.desc}</p>
          {t.seasons && (
            <div>
              <h3 className="mb-2 font-semibold">Episodes · Season 1</h3>
              <div className="divide-y divide-white/10 rounded-lg bg-white/5">
                {[1, 2, 3].map((e) => (
                  <div key={e} className="flex items-center gap-3 p-3">
                    <img src={t.backdrop} className="h-14 w-24 rounded object-cover" alt="" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{e}. Episode {e}</p>
                      <p className="truncate text-xs text-white/60">{t.desc}</p>
                    </div>
                    <button className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 hover:bg-white/20">
                      <Play className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
