import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { navLinks } from '../data/site.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/75 backdrop-blur-xl border-b border-black/5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 sm:h-20">
          <Logo size={scrolled ? 40 : 44} invert={!scrolled} />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? isActive
                        ? 'text-ink'
                        : 'text-ink/70 hover:text-ink'
                      : isActive
                      ? 'text-soft'
                      : 'text-soft/80 hover:text-soft'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    } ${scrolled ? 'bg-ink' : 'bg-soft'}`}
                  />
                </a>
              );
            })}
            <a
              href="#admissions"
              className={`ml-3 rounded-full px-4 py-2 text-[12.5px] font-medium tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'bg-ink text-soft hover:bg-mid'
                  : 'bg-soft text-ink hover:bg-silver'
              }`}
            >
              Apply Now
            </a>
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className={`lg:hidden rounded-full p-2 transition-colors ${
              scrolled ? 'text-ink hover:bg-black/5' : 'text-soft hover:bg-white/10'
            }`}
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-black/5">
                <Logo size={36} />
                <button onClick={close} aria-label="Close menu" className="p-2 rounded-full hover:bg-black/5">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-4">
                {navLinks.map((l, i) => (
                  <motion.a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={close}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium text-ink/85 hover:bg-soft hover:text-ink transition-colors"
                  >
                    {l.label}
                    <ChevronRight size={16} className="text-mid" />
                  </motion.a>
                ))}
              </div>
              <div className="p-5 border-t border-black/5">
                <a href="#admissions" onClick={close} className="btn-primary w-full">
                  Apply for Admission
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
