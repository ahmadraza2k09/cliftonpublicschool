import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  FlaskConical,
  Cpu,
  BookMarked,
  Dumbbell,
  ShieldCheck,
  Bus,
  Music2,
} from 'lucide-react';

const items = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Modern AV-equipped rooms for interactive learning.' },
  { icon: FlaskConical, title: 'Science Lab', desc: 'Hands-on experiments across physics, chemistry & biology.' },
  { icon: Cpu, title: 'Computer Lab', desc: 'Up-to-date workstations for digital literacy and coding.' },
  { icon: BookMarked, title: 'Library', desc: 'Curated collections for every age and reading level.' },
  { icon: Dumbbell, title: 'Sports Activities', desc: 'Cricket, football, athletics and indoor games.' },
  { icon: ShieldCheck, title: 'Security System', desc: 'CCTV-monitored campus with controlled access.' },
  { icon: Bus, title: 'Transport', desc: 'Safe, supervised pickup & drop across key routes.' },
  { icon: Music2, title: 'Activity Hall', desc: 'A flexible space for performances, events and clubs.' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-soft">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Campus & Facilities</span>
          <h2 className="section-title mt-3">
            A campus built for{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              modern learning
            </span>
            .
          </h2>
          <p className="section-sub">
            Eight purpose-designed spaces that make every school day safer, richer and more engaging
            for our students.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
              className="card card-hover group p-6"
            >
              <div className="relative grid place-items-center w-14 h-14 rounded-2xl bg-ink text-soft mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <f.icon size={22} />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </div>
              <div className="font-display text-[16px] font-semibold tracking-tight">{f.title}</div>
              <p className="mt-1.5 text-[13px] text-ink/65 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
