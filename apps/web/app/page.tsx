import { ProductCard } from "../components/ProductCard";
import { getFeaturedProducts } from "../lib/products";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] bg-cream flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Luxury Redefined</p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-primary mb-6 leading-tight">
            Timeless<br />Elegance
          </h1>
          <p className="text-text-light text-lg max-w-md mx-auto mb-8">
            Curated fashion for those who appreciate the art of dressing well.
          </p>
          <a
            href="/products"
            className="inline-block bg-primary text-white px-10 py-3 tracking-widest text-sm uppercase hover:bg-accent transition-colors"
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
