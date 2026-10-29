type P = { className?: string };

export const Play = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M8 5.14v13.72L19 12 8 5.14z" /></svg>
);
export const Plus = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}><path d="M12 5v14M5 12h14" /></svg>
);
export const Check = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6L9 17l-5-5" /></svg>
);
export const Info = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 7.6v.4" strokeLinecap="round" /></svg>
);
export const Chevron = ({ className = "w-6 h-6" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 18l6-6-6-6" /></svg>
);
export const Search = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);
export const Close = ({ className = "w-5 h-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Mute = ({ muted, className = "w-5 h-5" }: P & { muted: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 9v6h4l5 4V5L8 9H4z" />
    {muted ? <path d="M17 9l4 6M21 9l-4 6" /> : <path d="M16.5 8.5a5 5 0 010 7" />}
  </svg>
);
export const PrimeLogo = ({ className = "h-7" }: P) => (
  <div className={`flex items-end gap-1 ${className}`}>
    <span className="text-[1.35rem] leading-none font-bold tracking-tight text-white">prime</span>
    <svg viewBox="0 0 60 22" className="h-4 w-[52px] text-[#00a8e1]" fill="none">
      <path d="M2 15c14 7 36 7 52 0" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M44 12c6-2 11-1 13 1" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
    <span className="text-[1.35rem] leading-none font-bold tracking-tight text-white">video</span>
  </div>
);
