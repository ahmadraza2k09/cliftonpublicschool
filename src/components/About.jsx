import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldCheck,
  Sparkles,
  Heart,
  Crown,
  Palette,
  TrendingUp,
} from 'lucide-react';
import useCountUp from '../hooks/useCountUp.js';
import { stats } from '../data/site.js';

const values = [
  { icon: ShieldCheck, label: 'Discipline', desc: 'Structure, respect and responsibility from day one.' },
  { icon: Sparkles, label: 'Academic Excellence', desc: 'Rigorous learning paired with real understanding.' },
  { icon: Heart, label: 'Character Building', desc: 'Empathy, integrity and confidence at every grade.' },
  { icon: Crown, label: 'Leadership', desc: 'Initiative, voice and stewardship — built into culture.' },
  { icon: Palette, label: 'Creativity', desc: 'Art, performance and design as core to learning.' },
  { icon: TrendingUp, label: 'Student Growth', desc: 'Tracked, measured and celebrated, child by child.' },
];

function Stat({ value, suffix, label, start }) {
  const v = useCountUp(value, { start });
  return (
    <div className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-semibold text-ink">
        {v}
        <span className="text-mid">{suffix}</span>
      </div>
      <div className="mt-1 text-[11px] uppercase tracking-widest2 text-mid">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [logoErr, setLogoErr] = React.useState(false);

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-soft">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left – branded logo card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-ring ring-1 ring-white/10">
              {/* Premium dark → silver gradient backdrop */}
              <div className="absolute inset-0 logo-tile" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.18),transparent)]" />
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.04),transparent_30%,rgba(255,255,255,0.06)_60%,transparent)]" />

              {/* Logo centered on gradient — frames the white logo card beautifully */}
              <div className="relative h-full w-full flex flex-col items-center justify-center px-8">
                {!logoErr ? (
                  <img
                    src="/logo.jpg"
                    alt="Clifton Public School emblem"
                    onError={() => setLogoErr(true)}
                    className="w-[62%] max-w-[280px] aspect-square object-contain rounded-2xl bg-white p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)] ring-1 ring-white/20"
                  />
                ) : (
                  <div className="w-[62%] aspect-square grid place-items-center rounded-2xl bg-white text-ink shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)]">
                    <span className="font-display text-[64px] font-bold tracking-tight">CPS</span>
                  </div>
                )}
                <div className="mt-6 text-[10px] uppercase tracking-widest2 text-silver/80">
                  Est. 1990 · Karachi
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/65 to-transparent">
                <div className="text-[10px] uppercase tracking-widest2 text-silver/80">Our Identity</div>
                <div className="text-soft font-display text-xl mt-1">Each Child Is Our Concern</div>
              </div>
            </div>
          </motion.div>

          {/* Right – intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">About the School</span>
            <h2 className="section-title mt-3">
              A nurturing institution where{' '}
              <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                every child belongs
              </span>
              .
            </h2>
            <p className="section-sub">
              Clifton Public School is a co-educational institution in the heart of Karachi, committed to
              raising thoughtful, capable, and kind young people. For over three decades we have combined
              academic rigour with character formation — guided always by our promise that each child is
              our concern.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="card p-6">
                <div className="eyebrow">Our Mission</div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/80">
                  To deliver excellent, values-based education that prepares students for a life of
                  contribution, curiosity, and confidence.
                </p>
              </div>
              <div className="card p-6">
                <div className="eyebrow">Our Vision</div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/80">
                  To be Karachi's most trusted school — known for compassionate teachers, modern
                  classrooms, and graduates of true character.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core values */}
        <div className="mt-20" ref={ref}>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
            <div>
              <span className="eyebrow">Core Values</span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                Six principles that shape every classroom.
              </h3>
            </div>
            <div className="divider-line" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="card card-hover group p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-ink text-soft transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-105">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <div className="font-display text-[17px] font-semibold tracking-tight text-ink">
                      {v.label}
                    </div>
                    <p className="mt-1.5 text-[13.5px] text-ink/65 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Counters */}
        <div className="mt-20 rounded-3xl border border-black/5 bg-white shadow-soft p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <Stat key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
