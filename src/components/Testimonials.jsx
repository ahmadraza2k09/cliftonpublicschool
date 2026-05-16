import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/site.js';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);

  const go = (d) => setI((p) => (p + d + n) % n);
  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-ink text-soft overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.18),transparent)]" />
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest2 text-silver/80">
            <span className="h-px w-8 bg-silver/40" /> Testimonials
            <span className="h-px w-8 bg-silver/40" />
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
            What our community is{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              saying
            </span>
            .
          </h2>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55 }}
                className="text-center"
              >
                <Quote size={40} className="mx-auto text-silver/40" />
                <p
                  className="mt-6 text-xl sm:text-2xl leading-relaxed text-soft/95 max-w-2xl mx-auto"
                  style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic' }}
                >
                  "{t.quote}"
                </p>
                <div className="mt-7 flex items-center justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={14} className="fill-soft text-soft" />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-display text-base font-semibold">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-widest2 text-silver/70 mt-0.5">
                    {t.role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid place-items-center w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    k === i ? 'w-8 bg-soft' : 'w-3 bg-soft/30 hover:bg-soft/60'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid place-items-center w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
