import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-20">
      <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-8">
        About Karim Store
      </h1>
      <p className="text-slate-400 text-lg max-w-2xl">
        We specialize in premium [Your Product Name]. Our mission is to provide 
        vibrant, high-quality products with a digital-first service approach.
      </p>
      {/* AI Semantic Section */}
      <section className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
        <h2 className="text-xl font-bold mb-4 text-cyan-400">Our Specialist Services</h2>
        <ul className="list-disc list-inside text-slate-300">
          <li>Global Product Sourcing</li>
          <li>Instant Digital Support</li>
          <li>AI-Optimized Inventory Management</li>
        </ul>
      </section>
    </div>
  );
}
