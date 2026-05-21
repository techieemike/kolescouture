"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-primary">
          KOLESCOUTURE
        </Link>

        <div className="hidden md:flex gap-8 text-sm tracking-wide text-text">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <Link href="/products" className="hover:text-accent transition-colors">Collection</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-primary transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm tracking-wide text-text">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-accent transition-colors">Home</Link>
            <Link href="/products" onClick={() => setOpen(false)} className="hover:text-accent transition-colors">Collection</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
