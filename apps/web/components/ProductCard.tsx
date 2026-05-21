import Link from "next/link";
import type { Product } from "../lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
    >
      <div className="aspect-[3/4] bg-cream overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="mt-4 space-y-1">
        <p className="text-xs text-text-light tracking-widest uppercase">{product.category}</p>
        <h3 className="font-[family-name:var(--font-display)] text-lg text-primary">{product.name}</h3>
      </div>
    </Link>
  );
}
