import type { Product } from "../lib/products";

export function ProductCard({ product, onClick }: { product: Product; onClick?: () => void }) {
  return (
    <div onClick={onClick} className="group block cursor-pointer">
      <div className="aspect-[3/4] bg-cream overflow-hidden rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

    </div>
  );
}
