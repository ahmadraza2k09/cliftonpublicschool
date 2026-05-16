import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { galleryFiles, titleFromFile, eventDescriptions } from '../data/site.js';

const events = galleryFiles.slice(0, 6).map((g) => ({
  src: `/gallery/${g.file}`,
  title: titleFromFile(g.file),
  category: g.category,
  desc: eventDescriptions.default,
}));

export default function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Events & Highlights</span>
            <h2 className="section-title mt-3">
              Moments that{' '}
              <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                make a school
              </span>
              .
            </h2>
            <p className="section-sub">
              From national celebrations to science exhibitions, our calendar is filled with experiences
              that go beyond textbooks.
            </p>
          </div>
          <a href="#gallery" className="btn-outline">
            View Gallery <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-black/5 shadow-soft bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.src}
                  alt={e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest2 text-soft bg-white/15 backdrop-blur-md border border-white/25 px-2.5 py-1 rounded-full">
                  <Calendar size={11} /> {e.category}
                </span>
              </div>
              <div className="p-6">
                <div className="font-display text-[17px] font-semibold tracking-tight leading-snug">
                  {e.title}
                </div>
                <p className="mt-2 text-[13px] text-ink/65 leading-relaxed line-clamp-2">{e.desc}</p>
                <button className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink hover:gap-2.5 transition-all">
                  View Details <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
