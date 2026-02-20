"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-indigo-600">
            Welcome Halo Guys
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ini adalah template slicing dasar menggunakan Next.js dan Tailwind CSS. 
            Sudah responsif dan siap untuk dikembangkan lebih lanjut.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="px-6 py-3 border border-slate-300 rounded-lg font-medium hover:bg-slate-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}