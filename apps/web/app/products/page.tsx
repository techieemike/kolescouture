"use client";

import { useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { products, allImages } from "../../lib/products";
import { Lightbox } from "../../components/Lightbox";

export default function ProductsPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-4xl text-primary mb-2">The Collection</h1>
      <p className="text-text-light mb-12">{products.length} pieces</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => setLightboxIndex(allImages.indexOf(product.image))} />
        ))}
      </div>

      <h2 className="font-[family-name:var(--font-display)] text-3xl text-primary mt-20 mb-2">Full Gallery</h2>
      <p className="text-text-light mb-12">Browse our complete collection</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {allImages.map((src, i) => (
          <div
            key={i}
            className="aspect-[3/4] bg-cream overflow-hidden rounded-sm cursor-pointer group relative"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
