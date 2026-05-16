import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { galleryFiles, titleFromFile } from '../data/site.js';

const categories = ['All', 'Campus', 'Events', 'Sports', 'Celebrations', 'Academics'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(
    () =>
      galleryFiles
        .filter((g) => filter === 'All' || g.category === filter)
        .map((g) => ({
          src: `/gallery/${g.file}`,
          title: titleFromFile(g.file),
          category: g.category,
        })),
    [filter]
  );

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-soft">
      <div className="container-x">
        <div className="flex flex-col gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="eyebrow">Photo Gallery</span>
            <h2 className="section-title mt-3">
              Inside life at{' '}
              <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                Clifton Public School
              </span>
              .
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-[12px] px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === c
                    ? 'bg-ink text-soft border-ink'
                    : 'bg-white text-ink/70 border-black/10 hover:border-ink/40 hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {items.map((p, i) => (
            <motion.button
              key={p.src + filter}
              onClick={() => setLightbox(p)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
              className="group relative mb-4 break-inside-avoid block w-full overflow-hidden rounded-2xl border border-black/5 bg-white shadow-soft text-left"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-[10px] uppercase tracking-widest2 text-silver/90">{p.category}</div>
                <div className="text-soft font-display text-[15px] mt-0.5">{p.title}</div>
              </div>
              <div className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-soft opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-soft"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <img src={lightbox.src} alt={lightbox.title} className="lightbox-img rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-12 inset-x-0 text-center text-soft">
                <div className="text-[10px] uppercase tracking-widest2 text-silver/80">
                  {lightbox.category}
                </div>
                <div className="font-display text-lg mt-1">{lightbox.title}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
