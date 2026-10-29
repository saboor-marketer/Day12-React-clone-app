import { useEffect, useMemo, useState } from "react";
import { titles, rows, hero, type Title } from "./data";
import { Row, Card } from "./components/Row";
import Modal from "./components/Modal";
import { Play, Plus, Check, Info, Search, PrimeLogo, Mute, Close } from "./components/icons";

const byId = Object.fromEntries(titles.map((t) => [t.id, t]));
const NAV = ["Home", "Movies", "TV shows", "Sports", "Live TV", "My Stuff"];

export default function App() {
  const [tab, setTab] = useState("Home");
  const [list, setList] = useState<string[]>(["t3", "t11"]);
  const [open, setOpen] = useState<Title | null>(null);
  const [q, setQ] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [slide, setSlide] = useState(0);
  const [muted, setMuted] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setSlide((s) => (s + 1) % hero.length), 7000);
    return () => clearInterval(i);
  }, []);

  const toggle = (id: string) => setList((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return titles.filter((t) => t.name.toLowerCase().includes(s) || t.genres.some((g) => g.toLowerCase().includes(s)));
  }, [q]);

  const visibleRows = useMemo(() => {
    if (tab === "My Stuff") return [{ title: "Your Watchlist", ids: list }];
    if (tab === "Movies") return rows.map((r) => ({ ...r, ids: r.ids.filter((id) => !byId[id].seasons) }));
    if (tab === "TV shows") return rows.map((r) => ({ ...r, ids: r.ids.filter((id) => byId[id].seasons) }));
    return rows;
  }, [tab, list]);

  const h = byId[hero[slide]];

  return (
    <div className="min-h-screen bg-[#0f171e] text-white selection:bg-[#00a8e1] selection:text-black">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled || showSearch ? "bg-[#0f171e]/95 shadow-lg backdrop-blur" : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="flex items-center gap-4 px-4 py-3 sm:px-10">
          <button onClick={() => setTab("Home")} className="shrink-0">
            <PrimeLogo />
          </button>
          <nav className="ml-4 hidden items-center gap-6 text-sm font-medium text-white/80 lg:flex">
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => { setTab(n); setQ(""); window.scrollTo({ top: 0 }); }}
                className={`relative py-1 transition hover:text-white ${tab === n ? "text-white" : ""}`}
              >
                {n}
                {tab === n && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-[#00a8e1]" />}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <div className={`flex items-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 transition-all ${showSearch ? "w-44 sm:w-72 px-3" : "w-9"}`}>
              <button onClick={() => setShowSearch((s) => !s)} className="grid h-9 w-9 shrink-0 place-items-center">
                {showSearch ? <Close /> : <Search />}
              </button>
              {showSearch && (
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search titles, genres"
                  className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-white/50"
                />
              )}
            </div>
            <button className="hidden rounded bg-white/10 px-3 py-1.5 text-xs font-semibold ring-1 ring-white/20 hover:bg-white/20 sm:block">
              Join Prime
            </button>
            <div className="grid h-8 w-8 place-items-center rounded bg-gradient-to-br from-[#00a8e1] to-indigo-500 text-sm font-bold text-black">A</div>
          </div>
        </div>
      </header>

      {q.trim() ? (
        <main className="px-4 pb-20 pt-24 sm:px-10">
          <h1 className="mb-5 text-xl font-bold">
            {results.length} result{results.length !== 1 && "s"} for “{q}”
          </h1>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {results.map((t) => (
              <Card key={t.id} t={t} inList={list.includes(t.id)} onToggle={toggle} onOpen={setOpen} />
            ))}
          </div>
        </main>
      ) : (
        <main className="pb-20">
          {/* HERO */}
          <section className="relative h-[72vh] min-h-[460px] w-full overflow-hidden">
            {hero.map((id, i) => (
              <img
                key={id}
                src={byId[id].backdrop}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f171e] via-[#0f171e]/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0f171e] to-transparent" />
            <div className="relative flex h-full max-w-2xl flex-col justify-end gap-4 px-4 pb-16 sm:px-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00a8e1]">Prime Original</span>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight drop-shadow sm:text-6xl">{h.name}</h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="rounded bg-[#f5c518] px-1.5 py-0.5 text-xs font-bold text-black">IMDb {h.imdb}</span>
                <span>{h.year}</span>
                <span className="rounded border border-white/40 px-1.5 text-xs">{h.rating}</span>
                <span>{h.duration}</span>
                <span>{h.genres.join(" · ")}</span>
              </div>
              <p className="max-w-xl text-sm text-white/85 sm:text-base">{h.desc}</p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button className="flex items-center gap-2 rounded bg-[#00a8e1] px-7 py-3 font-semibold text-black transition hover:bg-[#2bbbf0]">
                  <Play /> Play
                </button>
                <button
                  onClick={() => toggle(h.id)}
                  className="flex items-center gap-2 rounded bg-white/15 px-5 py-3 font-semibold ring-1 ring-white/30 backdrop-blur transition hover:bg-white/25"
                >
                  {list.includes(h.id) ? <Check className="h-5 w-5 text-[#00a8e1]" /> : <Plus />} Watchlist
                </button>
                <button
                  onClick={() => setOpen(h)}
                  className="grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur hover:bg-white/25"
                >
                  <Info />
                </button>
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="grid h-12 w-12 place-items-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur hover:bg-white/25"
                >
                  <Mute muted={muted} />
                </button>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 flex gap-2">
              {hero.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${i === slide ? "w-7 bg-[#00a8e1]" : "w-3 bg-white/40"}`}
                />
              ))}
            </div>
          </section>

          <div className="relative z-10 -mt-10">
            {visibleRows.map((r) => (
              <Row
                key={r.title}
                title={r.title}
                items={r.ids.map((id) => byId[id]).filter(Boolean)}
                list={list}
                onToggle={toggle}
                onOpen={setOpen}
              />
            ))}
            {tab === "My Stuff" && list.length === 0 && (
              <p className="px-10 text-white/60">Your Watchlist is empty. Hover a title and hit + to add it.</p>
            )}
          </div>
        </main>
      )}

      <footer className="border-t border-white/10 px-4 py-10 text-center text-xs text-white/40 sm:px-10">
        <PrimeLogo className="mx-auto mb-4 h-6 opacity-70" />
        <p>Terms · Privacy · Help · Gift Cards — Demo clone built with React &amp; Tailwind. Not affiliated with Amazon.</p>
      </footer>

      {open && <Modal t={open} inList={list.includes(open.id)} onToggle={toggle} onClose={() => setOpen(null)} />}
    </div>
  );
}
