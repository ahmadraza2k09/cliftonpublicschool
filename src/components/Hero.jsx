import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, ChevronDown, GraduationCap, Users, Award } from 'lucide-react';
import { galleryFiles } from '../data/site.js';

const slides = galleryFiles.slice(0, 6).map((g) => `/gallery/${g.file}`);

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-soft">
      {/* Backgrounds */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[i]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, n) => (
          <motion.span
            key={n}
            className="absolute rounded-full bg-white/40"
            style={{
              width: 2 + (n % 4),
              height: 2 + (n % 4),
              top: `${(n * 53) % 100}%`,
              left: `${(n * 37) % 100}%`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (n % 5), repeat: Infinity, delay: n * 0.25 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-x relative z-10 h-full flex flex-col justify-center pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest2 text-silver/90 mb-6">
            <span className="h-px w-8 bg-silver/60" />
            Karachi · Since 1990
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-balance">
            Shaping Futures
            <br />
            Through{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              Quality Education
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-silver/85">
            Providing academic excellence, discipline, creativity, and a nurturing environment for every child.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#admissions" className="btn-primary bg-soft text-ink hover:bg-silver">
              Apply for Admission <ArrowRight size={16} />
            </a>
            <a href="#facilities" className="btn-ghost">
              <Compass size={16} /> Explore Campus
            </a>
          </div>
        </motion.div>

        {/* Floating stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-5 sm:right-10 bottom-28 hidden md:flex flex-col gap-3 z-10"
        >
          {[
            { icon: GraduationCap, label: 'Years', value: '35+' },
            { icon: Users, label: 'Students', value: '850+' },
            { icon: Award, label: 'Awards', value: '120+' },
          ].map((s, idx) => (
            <motion.div
              key={s.label}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4 + idx, repeat: Infinity, delay: idx * 0.4 }}
              className="glass-dark text-soft rounded-2xl px-4 py-3 min-w-[170px] flex items-center gap-3"
            >
              <div className="grid place-items-center w-9 h-9 rounded-xl bg-white/10 border border-white/15">
                <s.icon size={16} />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-widest2 text-silver/80">{s.label}</div>
                <div className="font-display text-lg font-semibold">{s.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 text-silver/80 hover:text-soft transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>

        {/* Slide dots */}
        <div className="absolute left-5 sm:left-10 bottom-10 flex items-center gap-2">
          {slides.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Slide ${n + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                n === i ? 'w-8 bg-soft' : 'w-3 bg-soft/40 hover:bg-soft/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
