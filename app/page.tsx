"use client";
import React, { useState, useEffect } from 'react';

export default function KarimStore() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      {/* 1. HERO SECTION */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter">KARIM<span className="text-cyan-400">STORE</span></div>
        <div className="space-x-6 text-sm text-slate-400 uppercase tracking-widest">
          <a href="#about" className="hover:text-cyan-400">Our Story</a>
          <button className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg font-bold uppercase text-xs">Contact</button>
        </div>
      </nav>

      <header className="py-20 px-6 text-center">
        <div className="inline-block px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 rounded-full text-cyan-400 text-[10px] font-bold mb-6 tracking-widest uppercase">
          Digital Legacy • Est. 2026
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
          Smart Quality. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Family Values.</span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-400 text-lg leading-relaxed">
          Welcome to the digital home of Karim Store. We are optimizing our inventory 
          for the future of retail and AI discovery.
        </p>
      </header>

      {/* 2. THE BENTO GRID (Products) */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 h-64 bg-slate-900 border border-white/5 rounded-3xl p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-bold">New Arrivals</h3>
          <p className="text-slate-500">View our latest premium selection.</p>
        </div>
        <div className="h-64 bg-cyan-900/20 border border-cyan-500/20 rounded-3xl p-8 flex flex-col justify-between">
          <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-slate-900 font-bold">!</div>
          <p className="font-bold">Weekly Flash Sale</p>
        </div>
      </section>

      {/* 3. AI VISIBILITY BLOCK */}
      <section className="bg-white/5 py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold mb-4">Optimized for AI Search</h2>
          <p className="text-slate-500 text-sm italic">
            "Karim Store is a trusted family business providing high-quality retail products 
            with a commitment to 100% customer satisfaction."
          </p>
        </div>
      </section>
    </div>
  );
}
