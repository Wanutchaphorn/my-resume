'use client';

import React, { useState } from 'react';
import { ArrowLeft, ZoomIn, X } from 'lucide-react';
import Link from 'next/link';

export default function DiagramsDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fcff] text-slate-950">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2f8bf3] transition hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <a href="#" className="text-xl font-black tracking-tight transition hover:opacity-70">Diagrams</a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        {/* Page Title Section */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
            System & Design Diagrams
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            This compilation includes design diagrams such as Use-Case, ERD, and Activity.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "Use Case Diagram",
              image: "/Usecase.jpg"
            },
            {
              title: "Entity Relationship Diagram (ERD)",
              image: "/ER.jpg"
            },
            ...[1, 2, 3, 4, 5, 6, 7, 8].map(num => ({
              title: `Activity Diagram - Step ${num}`,
              image: `/Activity%20-%20Frame%20${num}.jpg`
            }))
          ].map((item, index) => (
            <div key={index} className="group flex flex-col space-y-4">
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-[40px] border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-xl cursor-zoom-in"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="h-full w-full overflow-hidden rounded-[24px] bg-slate-50 relative">
                  <div className="flex h-full w-full flex-col items-center justify-center text-center text-slate-400">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      onError={(e) => {
                        (e.target as HTMLImageElement).parentElement!.innerHTML = `
                          <div class="flex flex-col items-center gap-4">
                            <div class="rounded-full bg-slate-100 p-6">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                            </div>
                            <span class="text-xs font-semibold uppercase tracking-widest text-slate-400">Replace with diagram image</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:bg-slate-950/10 group-hover:opacity-100">
                    <div className="rounded-full bg-white p-4 shadow-xl text-slate-950">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-xl font-bold tracking-tight text-slate-950">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-24 rounded-[40px] bg-slate-950 p-12 text-center text-white sm:p-20">
          <h2 className="text-3xl font-black sm:text-4xl">Need a custom diagram?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            If you would like us to help with the design, please contact us using the Contact information below.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>

          <div className="relative animate-in zoom-in-95 duration-300">
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
