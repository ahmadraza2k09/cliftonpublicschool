import React from 'react';
import { motion } from 'framer-motion';
import {
  Baby,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Palette,
  Languages,
  Trophy,
} from 'lucide-react';

const levels = [
  {
    icon: Baby,
    name: 'Pre School',
    range: 'Play Group – KG',
    desc: 'A warm, play-based environment that sparks curiosity and builds foundational social skills.',
    subjects: ['Phonics', 'Numbers', 'Art & Craft', 'Story Time', 'Motor Skills'],
  },
  {
    icon: BookOpen,
    name: 'Primary',
    range: 'Class 1 – 5',
    desc: 'Structured learning with strong fundamentals in literacy, numeracy and inquiry-based exploration.',
    subjects: ['English', 'Mathematics', 'Science', 'Urdu', 'Islamiat', 'Computing'],
  },
  {
    icon: GraduationCap,
    name: 'Secondary',
    range: 'Class 6 – 10',
    desc: 'Examination-focused rigour blended with critical thinking, leadership and life-skills.',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'Languages'],
  },
];

const curriculum = [
  { icon: FlaskConical, label: 'STEM', desc: 'Hands-on science, technology and inquiry from an early age.' },
  { icon: Palette, label: 'Creative Learning', desc: 'Art, music, drama and design embedded across the timetable.' },
  { icon: Languages, label: 'Language Skills', desc: 'Strong English, Urdu and communication across all years.' },
  { icon: Trophy, label: 'Co-curricular Activities', desc: 'Clubs, competitions, sports and community service.' },
];

export default function Academics() {
  return (
    <section id="academics" className="relative py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Academics</span>
          <h2 className="section-title mt-3">
            A complete journey, from{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              first day to graduation
            </span>
            .
          </h2>
          <p className="section-sub">
            Three carefully sequenced stages, each designed around how children actually learn at that
            age — never rushed, never compromised.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {levels.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative card card-hover overflow-hidden p-8"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-soft transition-transform duration-700 group-hover:scale-110" />
              <div className="relative">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-ink text-soft shadow-soft mb-6">
                  <l.icon size={22} />
                </div>
                <div className="text-[10px] uppercase tracking-widest2 text-mid">{l.range}</div>
                <div className="mt-1 font-display text-2xl font-semibold tracking-tight">{l.name}</div>
                <p className="mt-3 text-[14px] text-ink/65 leading-relaxed">{l.desc}</p>

                <div className="mt-6 pt-5 border-t border-black/5">
                  <div className="text-[10px] uppercase tracking-widest2 text-mid mb-3">Subjects</div>
                  <div className="flex flex-wrap gap-1.5">
                    {l.subjects.map((s) => (
                      <span
                        key={s}
                        className="text-[11.5px] px-2.5 py-1 rounded-full bg-soft text-ink/75 border border-black/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
            <div>
              <span className="eyebrow">Curriculum Highlights</span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                Four pillars across every grade.
              </h3>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {curriculum.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card card-hover p-6 group"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-soft border border-black/5 mb-5 group-hover:bg-ink group-hover:text-soft transition-colors">
                  <c.icon size={20} />
                </div>
                <div className="font-display text-[16px] font-semibold tracking-tight">{c.label}</div>
                <p className="mt-1.5 text-[13px] text-ink/65 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
