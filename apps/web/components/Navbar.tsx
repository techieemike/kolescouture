import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-primary">
          KOLESCOUTURE
        </Link>
        <div className="flex gap-8 text-sm tracking-wide text-text">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/products" className="hover:text-accent transition-colors">Collection</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
