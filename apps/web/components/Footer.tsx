export function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="font-[family-name:var(--font-display)] tracking-wider text-lg">KOLESCOUTURE</p>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Kolescouture. All rights reserved.</p>
        <p className="text-gray-400">Eigege99@gmail.com</p>
      </div>
    </footer>
  );
}
