"use client";

import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { getFeaturedProducts } from "../lib/products";

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 25%" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <p className="text-sm tracking-[0.3em] text-white/80 uppercase mb-4">Luxury Redefined</p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-white mb-6 leading-tight">
            Timeless<br />Elegance
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
            Curated fashion for those who appreciate the art of dressing well.
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-primary px-10 py-3 tracking-widest text-sm uppercase hover:bg-accent hover:text-white transition-colors"
          >
            Explore Collection
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-[family-name:var(--font-display)] text-3xl text-primary mb-2">Featured Pieces</h2>
        <p className="text-text-light mb-12">From our latest collection</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} onClick={() => setLightbox(product.image)} />
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-3xl hover:opacity-70 z-10"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
