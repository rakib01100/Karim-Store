"use client";
import Link from 'next/link';
import { useState, useEffect } from "react";

// ─── Utility: neon glow class helper ───────────────────────────────────────
const glow = (color: "emerald" | "cyan" | "both") => {
  if (color === "emerald")
    return "hover:shadow-[0_0_24px_4px_rgba(16,185,129,0.35)] transition-shadow duration-500";
  if (color === "cyan")
    return "hover:shadow-[0_0_24px_4px_rgba(6,182,212,0.35)] transition-shadow duration-500";
  return "hover:shadow-[0_0_32px_6px_rgba(6,182,212,0.25),0_0_32px_6px_rgba(16,185,129,0.20)] transition-shadow duration-500";
};

// ─── Data ───────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "new-arrivals",
    label: "New Arrivals",
    icon: "✦",
    accent: "emerald",
    tag: "Just In",
    description:
      "Freshly sourced goods — from daily essentials to premium finds. Updated every week.",
    items: ["Premium Rice", "Organic Spices", "Cold-Press Oils"],
    span: "col-span-2 row-span-2",
  },
  {
    id: "family-heritage",
    label: "Family Heritage",
    icon: "◈",
    accent: "cyan",
    tag: "Since 1998",
    description:
      "Trusted recipes and products that have been part of Chittagong households for generations.",
    items: ["Hilsa Selection", "Deshi Mustard", "Handpicked Lentils"],
    span: "col-span-1 row-span-1",
  },
  {
    id: "weekly-deals",
    label: "Weekly Deals",
    icon: "⬡",
    accent: "both",
    tag: "Limited Time",
    description:
      "Hand-picked savings refreshed every Sunday morning. Don't miss out.",
    items: ["Bundle Packs", "Seasonal Produce", "Flash Sales"],
    span: "col-span-1 row-span-1",
  },
];

const aiEngines = [
  { name: "Gemini", icon: "◉", desc: "Structured data & semantic markup" },
  { name: "Perplexity", icon: "◈", desc: "Citation-ready product metadata" },
  { name: "ChatGPT", icon: "◎", desc: "Natural language descriptions" },
  { name: "Claude", icon: "✦", desc: "Context-aware indexing" },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function NeonOrb({
  color,
  className,
}: {
  color: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] opacity-20 pointer-events-none ${className}`}
      style={{ background: color }}
    />
  );
}

function GridLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function Badge({ text, accent }: { text: string; accent: string }) {
  const colors =
    accent === "emerald"
      ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
      : accent === "cyan"
      ? "border-cyan-500/40 text-cyan-400 bg-cyan-500/10"
      : "border-cyan-400/30 text-cyan-300 bg-cyan-500/10";
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full border ${colors}`}
    >
      {text}
    </span>
  );
}

function BentoCard({
  cat,
}: {
  cat: (typeof categories)[0];
}) {
  const borderColor =
    cat.accent === "emerald"
      ? "border-emerald-500/20 hover:border-emerald-400/50"
      : cat.accent === "cyan"
      ? "border-cyan-500/20 hover:border-cyan-400/50"
      : "border-cyan-500/20 hover:border-cyan-300/40";

  const iconColor =
    cat.accent === "emerald"
      ? "text-emerald-400"
      : cat.accent === "cyan"
      ? "text-cyan-400"
      : "text-cyan-300";

  const dotColor =
    cat.accent === "emerald"
      ? "bg-emerald-400"
      : cat.accent === "cyan"
      ? "bg-cyan-400"
      : "bg-cyan-300";

  return (
    <div
      className={`
        relative group rounded-2xl border bg-white/[0.03] backdrop-blur-sm
        p-6 flex flex-col justify-between overflow-hidden cursor-pointer
        transition-all duration-500 ${borderColor} ${glow(cat.accent as "emerald" | "cyan" | "both")}
        ${cat.span}
      `}
    >
      {/* Corner glow on hover */}
      <div
        className={`
          absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0
          group-hover:opacity-30 transition-opacity duration-700
          ${cat.accent === "emerald" ? "bg-emerald-500" : "bg-cyan-500"}
        `}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className={`text-3xl font-light ${iconColor}`}>{cat.icon}</span>
        <Badge text={cat.tag} accent={cat.accent} />
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
          {cat.label}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed mb-5">
          {cat.description}
        </p>
      </div>

      {/* Items list */}
      <ul className="space-y-2">
        {cat.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColor}`} />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`
          mt-5 self-start text-xs uppercase tracking-[0.15em] font-semibold
          flex items-center gap-2 transition-all duration-300
          ${
            cat.accent === "emerald"
              ? "text-emerald-400 hover:text-emerald-300"
              : "text-cyan-400 hover:text-cyan-300"
          }
        `}
      >
        Explore
        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function KarimStorePage() {
  const [searchVal, setSearchVal] = useState("");
  const [tick, setTick] = useState(0);

  // Subtle ticker for the animated status dot
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-x-hidden text-white"
      style={{ background: "#080c0e" }}
    >
      {/* ── Global ambient orbs ── */}
      <NeonOrb color="#10b981" className="w-[600px] h-[600px] -top-40 -left-40" />
      <NeonOrb color="#06b6d4" className="w-[500px] h-[500px] top-1/3 -right-32" />
      <NeonOrb color="#10b981" className="w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2" />

      {/* ── Subtle grid overlay ── */}
      <GridLines />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* ══════════════════════ NAV ══════════════════════ */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black font-black text-sm">
              K
            </div>
            <span className="font-semibold tracking-wide text-white">
              Karim<span className="text-emerald-400">Store</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            {["Shop", "Heritage", "Deals", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-emerald-400 border border-emerald-500/30 rounded-full px-3 py-1.5 bg-emerald-500/5">
            <span
              className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${
                tick % 2 === 0 ? "opacity-100" : "opacity-40"
              } transition-opacity duration-700`}
            />
            Open Now
          </div>
        </nav>

        {/* ══════════════════════ HERO ══════════════════════ */}
        <section className="relative">
          {/* Glassmorphism hero card */}
          <div
            className="relative rounded-3xl border border-white/10 overflow-hidden p-10 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(16,185,129,0.06) 50%, rgba(6,182,212,0.04) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 0 80px rgba(16,185,129,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3">
                <Badge text="Smart Retail 2026" accent="emerald" />
                <Badge text="Chittagong, BD" accent="cyan" />
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                Your Family's{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #10b981 0%, #06b6d4 60%, #10b981 100%)",
                    backgroundSize: "200% auto",
                    animation: "shimmer 4s linear infinite",
                  }}
                >
                  Smart Store
                </span>
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
                Fresh produce, trusted brands, and heritage products — all
                discoverable by AI engines and always close to home.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  className="px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "0 0 24px rgba(16,185,129,0.4)" }}
                >
                  Shop Now
               <Link 
  href="/about" 
  className="hover:text-cyan-400 transition-colors cursor-pointer"
>
  Our Story
</Link>
              </div>
            </div>

            {/* Floating stat pills */}
            <div className="absolute bottom-8 right-8 hidden md:flex flex-col gap-3">
              {[
                { label: "Products", val: "500+" },
                { label: "Happy Families", val: "2,000+" },
                { label: "Years Trusted", val: "26" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 backdrop-blur-sm"
                >
                  <span className="text-xl font-black text-emerald-400">
                    {s.val}
                  </span>
                  <span className="text-xs text-zinc-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shimmer keyframes */}
          <style>{`
            @keyframes shimmer {
              0% { background-position: 0% center; }
              100% { background-position: 200% center; }
            }
            @keyframes pulse-glow {
              0%, 100% { opacity: 0.6; }
              50% { opacity: 1; }
            }
          `}</style>
        </section>

        {/* ══════════════════════ BENTO GRID ══════════════════════ */}
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-2">
                ◈ Collections
              </p>
              <h2 className="text-3xl font-bold tracking-tight">
                Browse the Store
              </h2>
            </div>
            <a
              href="#"
              className="text-sm text-zinc-500 hover:text-cyan-400 transition-colors hidden md:block"
            >
              View all categories →
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4">
            {categories.map((cat) => (
              <BentoCard key={cat.id} cat={cat} />
            ))}
          </div>
        </section>

        {/* ══════════════════════ SEARCH / AI SECTION ══════════════════════ */}
        <section className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-2">
              ◉ AI Search Optimization
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Find Us Anywhere
            </h2>
            <p className="text-zinc-500 mt-2 max-w-xl text-sm leading-relaxed">
              Karim Store is fully optimized for next-generation AI search
              engines. Ask Gemini, Perplexity, or ChatGPT — we show up.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder='Try "fresh hilsa near me" or "best rice Chittagong"…'
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:bg-white/[0.07] transition-all duration-300"
              style={{
                boxShadow: searchVal
                  ? "0 0 20px rgba(16,185,129,0.15)"
                  : "none",
              }}
            />
            {searchVal && (
              <div className="absolute right-3 inset-y-0 flex items-center">
                <span className="text-[10px] text-emerald-400 border border-emerald-500/30 rounded px-2 py-0.5 bg-emerald-500/10">
                  AI-Ready
                </span>
              </div>
            )}
          </div>

          {/* AI Engine cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {aiEngines.map((engine) => (
              <div
                key={engine.name}
                className={`
                  group relative rounded-xl border border-white/8 bg-white/[0.025]
                  p-4 backdrop-blur-sm cursor-default
                  hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]
                  ${glow("cyan")}
                  transition-all duration-500
                `}
              >
                <div className="text-xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {engine.icon}
                </div>
                <p className="text-sm font-semibold text-white mb-1">
                  {engine.name}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {engine.desc}
                </p>
              </div>
            ))}
          </div>

          {/* How it works strip */}
          <div
            className="rounded-2xl border border-emerald-500/15 bg-emerald-500/[0.03] p-6 md:p-8"
            style={{ boxShadow: "0 0 40px rgba(16,185,129,0.05)" }}
          >
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  step: "01",
                  title: "Structured Metadata",
                  body: "Every product has schema.org markup so AI crawlers understand exactly what we sell.",
                },
                {
                  step: "02",
                  title: "Natural Language Descriptions",
                  body: "Product copy is written to answer questions humans actually ask AI engines.",
                },
                {
                  step: "03",
                  title: "Real-Time Inventory Signals",
                  body: "Stock status and pricing are updated so AI answers reflect what's actually available.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-3xl font-black text-emerald-500/30 leading-none mt-0.5 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ FOOTER ══════════════════════ */}
        <footer className="border-t border-white/8 pt-10 pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-black font-black text-[10px]">
              K
            </div>
            <span>
              © 2026 Karim Store — Chittagong, Bangladesh
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Contact"].map((l) => (
              <a key={l} href="#" className="hover:text-zinc-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            />
            AI-Optimized Store
          </div>
        </footer>
      </div>
    </main>
  );
}


