export function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="font-[family-name:var(--font-display)] tracking-wider text-lg">KOLESCOUTURE</p>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Kolescouture. All rights reserved.</p>
        <a href="mailto:Eigege99@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
          Send us a mail
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
