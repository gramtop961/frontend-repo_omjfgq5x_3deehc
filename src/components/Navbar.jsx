import { useEffect, useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-black/20 bg-white shadow-sm" />
          <span className="font-semibold tracking-tight">Velodent</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`transition-colors hover:text-black ${active === item.id ? 'text-black' : 'text-black/60'}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://cal.com/velodent-ogbkfv/20min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-white hover:opacity-90 transition"
          >
            Book Now
          </a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">≡</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/95 backdrop-blur-sm">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="text-left py-2 text-black/80 hover:text-black transition"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://cal.com/velodent-ogbkfv/20min"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-black bg-black px-4 py-2 text-white hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
