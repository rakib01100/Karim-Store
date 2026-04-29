"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// --- Structured Data for AI/SEO bots ---------------------------------------
const STRUCTURE_DATA = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Karim Store",
  "description": "Premium smart retail store in Chittagong offering specialist-grade products with digital-first service.",
  "url": "https://karimstore.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chittagong",
    "addressCountry": "BD",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Specialist Products",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Premium Grade Rice" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Cold-Press Mustard Oil" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Artisan Spice Blends" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Organic Lentils" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Fresh Seafood Selection" } },
      { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Smart Pantry Bundles" } },
    ],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────
const specialists = [
  {
    id: "rice",
    name: "Premium Grade Rice",
    category: "Grains & Staples",
    badge: "Top Pick",
    price: "৳ 180 / kg",
    icon: "⬡",
    gradient: "from-fuchsia-600 via-pink-500 to-rose-400",
    glow: "rgba(217,70,239,0.5)",
    tags: ["Aged", "Aromatic", "Specialist"],
  },
  {
    id: "oil",
    name: "Cold-Press Mustard Oil",
    category: "Oils & Condiments",
    badge: "Artisan",
    price: "৳ 320 / L",
    icon: "◎",
    gradient: "from-cyan-500 via-sky-400 to-blue-500",
    glow: "rgba(6,182,212,0.5)",
    tags: ["Cold-Pressed", "Pure", "Lab-Verified"],
  },
  {
    id: "spice",
    name: "Artisan Spice Blends",
    category: "Spices & Herbs",
    badge: "Exclusive",
    price: "৳ 95 / pack",
    icon: "✦",
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    glow: "rgba(139,92,246,0.5)",
    tags: ["Hand-ground", "Small Batch", "No Additives"],
  },
  {
    id: "lentils",
    name: "Organic Lentils",
    category: "Pulses & Legumes",
    badge: "Certified",
    price: "৳ 140 / kg",
    icon: "◈",
    gradient: "from-pink-600 via-fuchsia-500 to-violet-500",
    glow: "rgba(236,72,153,0.5)",
    tags: ["Organic", "Stone-sorted", "High Protein"],
  },
  {
    id: "seafood",
    name: "Fresh Seafood Selection",
    category: "Marine & Fish",
    badge: "Daily Fresh",
    price: "Market Price",
    icon: "◉",
    gradient: "from-cyan-400 via-teal-400 to-emerald-400",
    glow: "rgba(20,184,166,0.5)",
    tags: ["Daily Sourced", "Chilled", "Traceable"],
  },
  {
    id: "bundles",
    name: "Smart Pantry Bundles",
    category: "Curated Sets",
    badge: "Best Value",
    price: "From ৳ 999",
    icon: "⬟",
    gradient: "from-fuchsia-500 via-pink-400 to-cyan-400",
    glow: "rgba(217,70,239,0.4)",
    tags: ["AI-Curated", "Monthly", "Save 20%"],
  },
];

const services = [
  {
    icon: "⚡",
    title: "60-Min Delivery",
    body: "Order via WhatsApp or app. Our riders fulfill local orders within the hour.",
    accent: "fuchsia",
  },
  {
    icon: "🧠",
    title: "AI Product Search",
    body: "Ask any AI engine about premium groceries in Chittagong — Karim Store is indexed.",
    accent: "cyan",
  },
  {
    icon: "📦",
    title: "Smart Subscriptions",
    body: "Set up recurring pantry orders. Prices locked. Delivered without lifting a finger.",
    accent: "pink",
  },
  {
    icon: "✅",
    title: "Quality Guarantee",
    body: "Every specialist product is verified. Unsatisfied? Full replacement, no questions.",
    accent: "violet",
  },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CyberGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(217,70,239,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "56px 56px",
      }}
    />
  );
}

function AmbientOrbs() {
  return (
    <>
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(217,70,239,0.25) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/4 -right-24 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.20) 0%, transparent 70%)" }}
      />
    </>
  );
}

function GlassBadge({
  text,
  color,
}: {
  text: string;
  color: "fuchsia" | "cyan" | "pink" | "violet";
}) {
  const styles = {
    fuchsia: "border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-500/10",
    cyan: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10",
    pink: "border-pink-400/40 text-pink-300 bg-pink-500/10",
    violet: "border-violet-400/40 text-violet-300 bg-violet-500/10",
  };
  return (
    <span
      className={`text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${styles[color]}`}
    >
      {text}
    </span>
  );
}

function SpecialistCard({
  product,
  index,
}: {
  product: (typeof specialists)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms`,
      }}
    >
      <div
        className="relative h-full p-6 flex flex-col justify-between border rounded-2xl"
        style={{
          background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
          borderColor: hovered
            ? product.glow.replace("0.5", "0.6")
            : "rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
          boxShadow: hovered
            ? `0 0 40px ${product.glow}, inset 0 1px 0 rgba(255,255,255,0.12)`
            : "inset 0 1px 0 rgba(255,255,255,0.06)",
          transition: "all 0.4s ease",
          minHeight: "240px",
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"
          style={{
            background: product.glow,
            opacity: hovered ? 0.35 : 0,
            transition: "opacity 0.5s ease",
          }}
        />

        <div className="flex items-start justify-between mb-4">
          <span
            className={`text-4xl bg-gradient-to-br ${product.gradient} bg-clip-text text-transparent font-black leading-none`}
            style={{
              filter: hovered ? `drop-shadow(0 0 12px ${product.glow})` : "none",
              transition: "filter 0.4s",
            }}
          >
            {product.icon}
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full border"
            style={{
              background: product.glow.replace("0.5", "0.12"),
              borderColor: product.glow.replace("0.5", "0.4"),
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {product.badge}
          </span>
        </div>

        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1.5">
            {product.category}
          </p>
          <h3
            className={`text-lg font-black leading-tight bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-3`}
          >
            {product.name}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/50 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-base">{product.price}</span>
          <button
            className={`text-xs font-bold px-4 py-1.5 rounded-full bg-gradient-to-r ${product.gradient} text-white`}
            style={{
              boxShadow: hovered ? `0 0 20px ${product.glow}` : "none",
              transition: "box-shadow 0.4s",
            }}
          >
            Add →
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  svc,
  index,
}: {
  svc: (typeof services)[0];
  index: number;
}) {
  const { ref, visible } = useScrollReveal();
  const accentMap: Record<string, string> = {
    fuchsia: "from-fuchsia-600 to-pink-500",
    cyan: "from-cyan-500 to-teal-400",
    pink: "from-pink-600 to-fuchsia-500",
    violet: "from-violet-600 to-purple-500",
  };
  const glowMap: Record<string, string> = {
    fuchsia: "rgba(217,70,239,0.3)",
    cyan: "rgba(6,182,212,0.3)",
    pink: "rgba(236,72,153,0.3)",
    violet: "rgba(139,92,246,0.3)",
  };

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-6 border border-white/10 cursor-default overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${glowMap[svc.accent]}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <span className="text-3xl mb-4 block">{svc.icon}</span>
        <h3
          className={`text-lg font-black mb-2 bg-gradient-to-r ${accentMap[svc.accent]} bg-clip-text text-transparent`}
        >
          {svc.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">{svc.body}</p>
      </div>
    </div>
  );
}

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const images = ['/image1.webp', '/image2.webp', '/image3.webp'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl mb-12">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={img} alt="Specialist Product" fill className="object-cover" priority={index === 0} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div key={i} className={`h-2 rounded-full transition-all ${i === current ? 'bg-cyan-400 w-8' : 'bg-white/30 w-2'}`} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function KarimStorePage() {
  const [ticker, setTicker] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const tickerPhrases = [
    "Premium Selection — Smart Shopping",
    "Fresh. Fast. Digital-First.",
    "Indexed for AI Search Engines",
    "60-Min Delivery in Chittagong",
  ];

  useEffect(() => {
    const id = setInterval(
      () => setTicker((t) => (t + 1) % tickerPhrases.length),
      3000
    );
    return () => clearInterval(id);
  }, [tickerPhrases.length]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURE_DATA) }}
      />
      <main
        className="relative min-h-screen overflow-x-hidden text-white"
        style={{ background: "#06030f" }}
      >
        <AmbientOrbs />
        
        <div className="relative z-10">
          <div
            className="w-full py-2.5 overflow-hidden border-b border-white/8"
            style={{ background: "rgba(217,70,239,0.08)" }}
          >
            <p className="text-center text-xs uppercase tracking-[0.25em] font-bold text-fuchsia-300/80 transition-all duration-700">
              {tickerPhrases[ticker]}
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <nav className="flex items-center justify-between py-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white"
                  style={{ background: "linear-gradient(135deg, #d946ef, #06b6d4)" }}
                >
                  K
                </div>
                <span className="font-black text-white tracking-tight">
                  KARIM
                  <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                    {" "}STORE
                  </span>
                </span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium text-white/50">
                {["Specialists", "Services", "Deals", "Contact"].map((l) => (
                  <a key={l} href="#" className="hover:text-white transition-colors duration-200">
                    {l}
                  </a>
                ))}
              </div>
              <button
                className="text-sm font-bold px-5 py-2 rounded-full text-white"
                style={{
                  background: "linear-gradient(135deg, #d946ef, #ec4899, #06b6d4)",
                  boxShadow: "0 0 20px rgba(217,70,239,0.4)",
                }}
              >
                Shop Now
              </button>
            </nav>

            <ImageSlider />

            <section className="pt-8 pb-20 relative">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full blur-lg"
                style={{ background: "linear-gradient(90deg, #d946ef, #06b6d4)" }}
              />
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <div className="flex justify-center gap-3 flex-wrap">
                  <GlassBadge text="Smart Shopping" color="fuchsia" />
                  <GlassBadge text="Premium Selection" color="cyan" />
                  <GlassBadge text="Digital-First" color="pink" />
                </div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tighter">
                  <span
                    className="block bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #d946ef 0%, #ec4899 30%, #06b6d4 65%, #d946ef 100%)",
                      backgroundSize: "200% auto",
                      animation: "hueShift 5s linear infinite",
                    }}
                  >
                    Premium
                  </span>
                  <span className="block text-white">Reimagined.</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
                  Specialist-grade products, curated for the modern household.
                </p>
                <div className="relative max-w-lg mx-auto mt-8">
                  <div className="relative flex items-center bg-white/8 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-xl">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder='Search "premium mustard oil"…'
                      className="flex-1 px-3 py-4 bg-transparent text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialists.map((p, i) => (
                <SpecialistCard key={p.id} product={p} index={i} />
              ))}
            </section>

            <section className="pb-20 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc, i) => (
                <ServiceCard key={svc.title} svc={svc} index={i} />
              ))}
            </section>
          </div>

          <footer className="border-t border-white/8 py-10 bg-black/40 backdrop-blur-xl text-center text-xs text-white/40">
            © 2026 Karim Store — Chittagong, Bangladesh.
          </footer>
        </div>

        <style>{`
          @keyframes hueShift {
            0%   { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
      </main>
    </>
  );
}
