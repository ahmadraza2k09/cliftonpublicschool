import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle, Facebook, Instagram, Mail, GraduationCap } from 'lucide-react';
import { school } from '../data/site.js';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-ink via-mid to-ink"
    />
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia('(hover: hover)').matches;
    if (!hover) return;
    setEnabled(true);
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!enabled) return null;
  return <div className="cursor-glow" style={{ top: pos.y, left: pos.x }} />;
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 grid place-items-center w-12 h-12 rounded-full bg-ink text-soft shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:bg-mid transition-colors"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function FloatingSocialSidebar() {
  return (
    <div className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-30 flex-col gap-2">
      {[
        { href: school.facebook, icon: Facebook, label: 'Facebook' },
        { href: school.instagram, icon: Instagram, label: 'Instagram' },
        { href: `https://wa.me/${school.whatsapp}`, icon: MessageCircle, label: 'WhatsApp' },
        { href: `mailto:${school.email}`, icon: Mail, label: 'Email' },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="grid place-items-center w-10 h-10 rounded-full bg-white border border-black/5 shadow-soft text-ink/80 hover:bg-ink hover:text-soft transition-colors"
        >
          <s.icon size={15} />
        </a>
      ))}
    </div>
  );
}

export function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="lg:hidden fixed bottom-3 inset-x-3 z-40"
        >
          <a
            href="#admissions"
            className="flex items-center justify-between gap-3 rounded-full bg-ink text-soft px-5 py-3.5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <GraduationCap size={16} /> Admissions Open
            </span>
            <span className="text-[12px] uppercase tracking-widest2 bg-soft text-ink rounded-full px-3 py-1">
              Apply
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PageLoader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink text-soft"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-16 rounded-2xl logo-tile ring-1 ring-white/15 grid place-items-center font-display font-bold text-xl"
            >
              CPS
            </motion.div>
            <div className="relative w-44 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <div className="absolute inset-0 loader-bar" />
            </div>
            <div className="text-[10px] uppercase tracking-widest2 text-silver/70">
              Clifton Public School
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
