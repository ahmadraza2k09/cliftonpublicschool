import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Star, Landmark } from 'lucide-react';
import useCountUp from '../hooks/useCountUp.js';

const items = [
  { icon: Trophy, label: 'Academic Distinctions', value: 240, suffix: '+' },
  { icon: Medal, label: 'Sports Awards', value: 85, suffix: '+' },
  { icon: Star, label: 'Inter-School Competitions', value: 60, suffix: '+' },
  { icon: Landmark, label: 'Years of Service', value: 35, suffix: '' },
];

function Item({ icon: Icon, label, value, suffix, start, i }) {
  const v = useCountUp(value, { start });
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: i * 0.07 }}
      className="card card-hover group p-7"
    >
      <div className="grid place-items-center w-12 h-12 rounded-xl bg-ink text-soft mb-5 group-hover:rotate-[-6deg] group-hover:scale-105 transition-transform duration-500">
        <Icon size={20} />
      </div>
      <div className="font-display text-4xl font-semibold tracking-tight text-ink">
        {v}
        <span className="text-mid">{suffix}</span>
      </div>
      <div className="mt-2 text-[12px] uppercase tracking-widest2 text-mid">{label}</div>
    </motion.div>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 sm:py-32 bg-soft">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Achievements</span>
          <h2 className="section-title mt-3">
            Three decades of{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              quiet excellence
            </span>
            .
          </h2>
          <p className="section-sub">
            Our students continue to make us proud — in classrooms, on the field, and in the wider
            community.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Item key={it.label} {...it} start={inView} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
