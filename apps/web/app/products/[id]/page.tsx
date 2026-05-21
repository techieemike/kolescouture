import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <Link href="/products" className="text-sm text-text-light hover:text-accent mb-8 inline-block">
        &larr; Back to Collection
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-[3/4] bg-cream overflow-hidden rounded-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs text-text-light tracking-widest uppercase mb-2">{product.category}</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-primary mb-4">
            {product.name}
          </h1>
          <p className="text-text-light leading-relaxed mb-8">{product.description}</p>

          <div className="mb-8">
            <p className="text-sm text-text tracking-wide mb-3">Size</p>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="w-12 h-12 border border-gray-200 text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <a
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-3 tracking-widest text-sm uppercase hover:bg-accent transition-colors text-center"
          >
            Inquire About This Piece
          </a>
        </div>
      </div>
    </div>
  );
}
