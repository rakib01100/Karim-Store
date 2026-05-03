"use client";

import { useState, useEffect, useRef } from "react";

const STRUCTURE_DATA = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Karim Store",
  description: "Premium smart retail store in Chittagong offering specialist-grade products with digital-first service.",
  url: "https://karimstore.com",
  address: { "@type": "PostalAddress", addressLocality: "Chittagong", addressCountry: "BD" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Specialist Products",
   itemListElement: [
  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fresh Yogurt" } },
  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sour Yogurt" } },
  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Firni / Khir" } },
  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fresh Cake" } },
  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ice Cream" } },
  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fresh Milk" } },
],
  },
};

const specialists = [
  { id: "yogurt", name: "Fresh Yogurt | তাজা দই", category: "Dairy & Chilled", badge: "Daily Fresh", price: "৳ 60 / cup", icon: "◎", image: "/products/doi.webp", gradient: "from-fuchsia-600 via-pink-500 to-rose-400", glow: "rgba(217,70,239,0.5)", tags: ["Fresh", "Creamy", "Daily Made"] },
  { id: "sour-yogurt", name: "Sour Yogurt | টক দই", category: "Dairy & Chilled", badge: "Artisan", price: "৳ 80 / cup", icon: "⬡", image: "/products/tokhdoi.webp", gradient: "from-cyan-500 via-sky-400 to-blue-500", glow: "rgba(6,182,212,0.5)", tags: ["Tangy", "Probiotic", "Hand-set"] },
  { id: "firni", name: "Firni / Khir | ফিরনি / ক্ষীর", category: "Traditional Sweets", badge: "Heritage", price: "৳ 120 / bowl", icon: "✦", image: "/products/firni.webp", gradient: "from-violet-600 via-purple-500 to-fuchsia-500", glow: "rgba(139,92,246,0.5)", tags: ["Traditional", "Rice-based", "Festive"] },
  { id: "cake", name: "Fresh Cake | তাজা কেক", category: "Bakery", badge: "Bestseller", price: "৳ 350 / piece", icon: "◈", image: "/products/cake.webp", gradient: "from-pink-600 via-fuchsia-500 to-violet-500", glow: "rgba(236,72,153,0.5)", tags: ["Soft", "Custom", "Daily Baked"] },
  { id: "icecream", name: "Ice Cream | আইসক্রিম", category: "Frozen Desserts", badge: "Fan Favourite", price: "৳ 50 / scoop", icon: "◉", image: "/products/icecream.webp", gradient: "from-cyan-400 via-teal-400 to-emerald-400", glow: "rgba(20,184,166,0.5)", tags: ["Chilled", "Creamy", "Multi-flavour"] },
  { id: "milk", name: "Fresh Milk | তাজা দুধ", category: "Dairy & Essentials", badge: "Daily Fresh", price: "৳ 90 / L", icon: "⬟", image: "/products/milk.webp", gradient: "from-fuchsia-500 via-pink-400 to-cyan-400", glow: "rgba(217,70,239,0.4)", tags: ["Pure", "Farm Fresh", "Daily Delivery"] },
];

const services = [
  { icon: "⚡", title: "60-Min Delivery", body: "Order via WhatsApp or app. Our riders fulfill local orders within the hour.", accent: "fuchsia" },
  { icon: "🧠", title: "AI Product Search", body: "Ask any AI engine about premium groceries in Chittagong — Karim Store is indexed.", accent: "cyan" },
  { icon: "📦", title: "Smart Subscriptions", body: "Set up recurring pantry orders. Prices locked. Delivered without lifting a finger.", accent: "pink" },
  { icon: "✅", title: "Quality Guarantee", body: "Every specialist product is verified. Unsatisfied? Full replacement, no questions.", accent: "violet" },
];

const TICKER_PHRASES = [
  "Premium Selection — Smart Shopping",
  "Fresh. Fast. Digital-First.",
  "We belive in quality",
  "KARIM STORE",
] as const;

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function AmbientOrbs() {
  return (
    <>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(217,70,239,0.25) 0%, transparent 70%)" }} />
      <div className="absolute top-1/4 -right-24 w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-1/3 w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.20) 0%, transparent 70%)" }} />
    </>
  );
}

function CyberGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(217,70,239,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)`, backgroundSize: "56px 56px" }} />
  );
}

function GlassBadge({ text, color }: { text: string; color: "fuchsia" | "cyan" | "pink" | "violet" }) {
  const styles = { fuchsia: "border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-500/10", cyan: "border-cyan-400/40 text-cyan-300 bg-cyan-500/10", pink: "border-pink-400/40 text-pink-300 bg-pink-500/10", violet: "border-violet-400/40 text-violet-300 bg-violet-500/10" };
  return <span className={`text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${styles[color]}`}>{text}</span>;
}

function HeroBanner() {
  const [slide, setSlide] = useState(0);
  const images = ["/IMAGE001.webp", "/IMAGE002.webp", "/image1.webp", "/image2.webp", "/image3.webp"];

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden mb-12" style={{ minHeight: "420px" }}>
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === slide ? 1 : 0, backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      ))}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,3,15,0.6) 0%, rgba(217,70,239,0.25) 100%)" }} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 space-y-4" style={{ minHeight: "420px" }}>
        <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300 font-bold">✦ Karim Store — Chittagong</p>
        <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">KARIM STORE</h2>
        <p className="text-white/70 text-sm max-w-md mx-auto leading-relaxed">Specialist-grade groceries, we believe in quality.</p>
        <button className="text-sm font-bold px-6 py-2.5 rounded-full text-white" style={{ background: "linear-gradient(135deg, #d946ef, #ec4899, #06b6d4)", boxShadow: "0 0 20px rgba(217,70,239,0.5)" }}>
          Shop Now
        </button>
        <div className="flex gap-2 pt-2">
          {images.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className="rounded-full transition-all" style={{ width: i === slide ? "24px" : "8px", height: "8px", background: i === slide ? "#d946ef" : "rgba(255,255,255,0.3)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SpecialistCard({ product, index }: { product: (typeof specialists)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms` }}
    >
      <div
        className="relative h-full p-6 flex flex-col justify-between border rounded-2xl"
        style={{
          background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
          borderColor: hovered ? product.glow.replace("0.5", "0.6") : "rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
          boxShadow: hovered ? `0 0 40px ${product.glow}, inset 0 1px 0 rgba(255,255,255,0.12)` : "inset 0 1px 0 rgba(255,255,255,0.06)",
          transition: "all 0.4s ease",
          minHeight: "240px",
        }}
      >
        {/* Product image */}
        <div
          className="w-full h-36 rounded-xl mb-4 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: product.glow, opacity: hovered ? 0.35 : 0, transition: "opacity 0.5s ease" }} />
        <div className="flex items-start justify-between mb-4">
          <span className={`text-4xl bg-gradient-to-br ${product.gradient} bg-clip-text text-transparent font-black leading-none`} style={{ filter: hovered ? `drop-shadow(0 0 12px ${product.glow})` : "none", transition: "filter 0.4s" }}>
            {product.icon}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 rounded-full border" style={{ background: product.glow.replace("0.5", "0.12"), borderColor: product.glow.replace("0.5", "0.4"), color: "rgba(255,255,255,0.85)" }}>
            {product.badge}
          </span>
        </div>
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-widest text-white/40 mb-1.5">{product.category}</p>
          <h3 className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-3`}>
 <span className="block text-lg font-black leading-tight">{product.name.split("|")[0]}</span>
 <span
  className="block text-sm font-semibold opacity-80"
  style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
>
  {product.name.split("|")[1]}
</span>
</h3>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/50 bg-white/5">{tag}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white font-bold text-base">{product.price}</span>
          <button className={`text-xs font-bold px-4 py-1.5 rounded-full bg-gradient-to-r ${product.gradient} text-white`} style={{ boxShadow: hovered ? `0 0 20px ${product.glow}` : "none", transition: "box-shadow 0.4s" }}>
            Add →
          </button>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ svc, index }: { svc: (typeof services)[0]; index: number }) {
  const { ref, visible } = useScrollReveal();
  const accentMap: Record<string, string> = { fuchsia: "from-fuchsia-600 to-pink-500", cyan: "from-cyan-500 to-teal-400", pink: "from-pink-600 to-fuchsia-500", violet: "from-violet-600 to-purple-500" };
  const glowMap: Record<string, string> = { fuchsia: "rgba(217,70,239,0.3)", cyan: "rgba(6,182,212,0.3)", pink: "rgba(236,72,153,0.3)", violet: "rgba(139,92,246,0.3)" };
  return (
    <div
      ref={ref}
      className="group relative rounded-2xl p-6 border border-white/10 cursor-default overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms` }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ background: `radial-gradient(circle at 30% 30%, ${glowMap[svc.accent]}, transparent 70%)` }} />
      <div className="relative z-10">
        <span className="text-3xl mb-4 block">{svc.icon}</span>
        <h3 className={`text-lg font-black mb-2 bg-gradient-to-r ${accentMap[svc.accent]} bg-clip-text text-transparent`}>{svc.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{svc.body}</p>
      </div>
    </div>
  );
}

export default function KarimStorePage() {
  const [ticker, setTicker] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const id = setInterval(() => setTicker((t) => (t + 1) % TICKER_PHRASES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;600;700&display=swap" rel="stylesheet" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURE_DATA) }} />
      <style dangerouslySetInnerHTML={{ __html: `@keyframes hueShift { 0% { background-position: 0% center; } 100% { background-position: 200% center; } } @keyframes pulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }` }} />

      <main className="relative min-h-screen overflow-x-hidden text-white" style={{ background: "#06030f" }}>
        <AmbientOrbs />
        <CyberGrid />

        <div className="relative z-10">
          <div className="w-full py-2.5 border-b border-white/8" style={{ background: "rgba(217,70,239,0.08)" }}>
            <p className="text-center text-xs uppercase tracking-[0.25em] font-bold text-fuchsia-300/80">
              {TICKER_PHRASES[ticker]}
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <nav className="flex items-center justify-between py-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm text-white" style={{ background: "linear-gradient(135deg, #d946ef, #06b6d4)" }}>K</div>
                <span className="font-black text-white tracking-tight">KARIM<span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"> STORE</span></span>
              </div>
              <div className="hidden md:flex gap-8 text-sm font-medium text-white/50">
                {["Specialists", "Services", "Deals", "Contact"].map((l) => (
                  <a key={l} href="#" className="hover:text-white transition-colors duration-200">{l}</a>
                ))}
              </div>
              <button className="text-sm font-bold px-5 py-2 rounded-full text-white" style={{ background: "linear-gradient(135deg, #d946ef, #ec4899, #06b6d4)", boxShadow: "0 0 20px rgba(217,70,239,0.4)" }}>
                Shop Now
              </button>
            </nav>

            <HeroBanner />

            <section className="pt-2 pb-20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full blur-lg" style={{ background: "linear-gradient(90deg, #d946ef, #06b6d4)" }} />
              <div className="text-center space-y-6 max-w-4xl mx-auto">
                <div className="flex justify-center gap-3 flex-wrap">
                  <GlassBadge text="Smart Shopping" color="fuchsia" />
                  <GlassBadge text="Premium Selection" color="cyan" />
                  <GlassBadge text="Digital-First" color="pink" />
                </div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tighter">
                  <span className="block bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #d946ef 0%, #ec4899 30%, #06b6d4 65%, #d946ef 100%)", backgroundSize: "200% auto", animation: "hueShift 5s linear infinite" }}>
                    Premium
                  </span>
                  <span className="block text-white">Reimagined.</span>
                </h1>
                <p className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
                  Specialist-grade products, curated for the modern household. Smart search. Fast delivery. No compromises.
                </p>
                <div className="relative max-w-lg mx-auto mt-8">
                  <div className="absolute inset-0 rounded-2xl blur-md opacity-60" style={{ background: "linear-gradient(90deg, rgba(217,70,239,0.4), rgba(6,182,212,0.4))" }} />
                  <div className="relative flex items-center bg-white/8 border border-white/15 rounded-2xl overflow-hidden backdrop-blur-xl">
                    <svg className="w-4 h-4 text-white/40 ml-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search "premium mustard oil", "organic lentils"…' className="flex-1 px-3 py-4 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none" />
                    <button className="mr-2 px-4 py-2 rounded-xl text-xs font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #d946ef, #06b6d4)" }}>Search</button>
                  </div>
                </div>
                <div className="flex justify-center gap-6 md:gap-12 pt-4 flex-wrap">
                  {[{ val: "500+", label: "Products" }, { val: "60 min", label: "Delivery" }, { val: "4.9★", label: "Rating" }, { val: "AI-Ready", label: "Indexed" }].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-black bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">{s.val}</p>
                      <p className="text-xs text-white/40 uppercase tracking-widest mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="pb-20 space-y-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-400 mb-2 font-bold">✦ Our Specialists</p>
                  <h2 className="text-3xl md:text-4xl font-black text-white">Curated. <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Verified.</span></h2>
                </div>
                <a href="#" className="hidden md:block text-sm text-white/30 hover:text-fuchsia-400 transition-colors">View all →</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {specialists.map((p, i) => <SpecialistCard key={p.id} product={p} index={i} />)}
              </div>
            </section>

            <section className="pb-20 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-400 mb-2 font-bold">◉ Smart Services</p>
                <h2 className="text-3xl md:text-4xl font-black text-white">Speed Meets <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Intelligence.</span></h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((svc, i) => <ServiceCard key={svc.title} svc={svc} index={i} />)}
              </div>
            </section>

            <section className="pb-20">
              <div className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #d946ef 40%, #ec4899 70%, #06b6d4 100%)", boxShadow: "0 0 80px rgba(217,70,239,0.4), 0 0 120px rgba(6,182,212,0.2)" }}>
                <div className="relative z-10 space-y-5">
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">Your Smart Store.<br />One Tap Away.</h2>
                  <p className="text-white/70 text-base max-w-md mx-auto">Join thousands of households already shopping smarter with Karim Store.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button className="px-8 py-3.5 rounded-full bg-white text-purple-700 font-black text-sm hover:scale-105 transition-transform">Start Shopping</button>
                    <button className="px-8 py-3.5 rounded-full border border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-colors">WhatsApp Us →</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="border-t border-white/8 py-10" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)" }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs text-white" style={{ background: "linear-gradient(135deg, #d946ef, #06b6d4)" }}>K</div>
                    <span className="font-black text-white">KARIM STORE</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed max-w-xs">Premium smart retail in Chittagong. Specialist products, verified quality, digital-first experience.</p>
                  <a href="/llms.txt" className="text-[10px] text-white/20 hover:text-fuchsia-400 transition-colors block" aria-label="LLM index file for AI search engine crawlers">/llms.txt · AI Crawler Index</a>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-400 font-bold">Navigate</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["Specialists", "Services", "Bundles", "Deals", "WhatsApp", "Contact"].map((l) => (
                      <a key={l} href="#" className="text-xs text-white/40 hover:text-white transition-colors">{l}</a>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold">AI Search Ready</p>
                  <div className="space-y-2 text-xs text-white/40">
                    <p>✓ Schema.org structured data</p>
                    <p>✓ LLM product index at /llms.txt</p>
                    <p>✓ Natural language product descriptions</p>
                    <p>✓ Real-time inventory metadata</p>
                    <p>✓ Indexed by Gemini, Perplexity &amp; Claude</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/25">
                <span>© 2026 Karim Store — Chittagong, Bangladesh. All rights reserved.</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" style={{ animation: "pulse 2s ease-in-out infinite" }} />
                  <span>AI-Optimized · Smart Retail Platform</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}


