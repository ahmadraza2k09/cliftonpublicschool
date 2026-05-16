import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { school } from '../data/site.js';

const cards = [
  {
    network: 'Facebook',
    handle: '@CliftonPublicSchoolKhi',
    href: school.facebook,
    icon: Facebook,
    blurb:
      'Follow our official Facebook page for school-wide announcements, event highlights and community updates.',
    accent: 'from-[#1877F2]/15 to-transparent',
  },
  {
    network: 'Instagram',
    handle: '@cliftonpublicschool',
    href: school.instagram,
    icon: Instagram,
    blurb:
      'Catch the visual story of our classrooms, celebrations and student life over on Instagram.',
    accent: 'from-[#E1306C]/15 to-transparent',
  },
];

export default function Social() {
  return (
    <section id="social" className="relative py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Social Media</span>
          <h2 className="section-title mt-3">
            Stay close to our{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              everyday life
            </span>
            .
          </h2>
          <p className="section-sub">
            For the freshest announcements, events and behind-the-scenes moments — follow us across
            our official channels.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.a
              key={c.network}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-soft hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)] transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />
              <div className="relative flex items-start justify-between">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-ink text-soft shadow-soft">
                  <c.icon size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-mid group-hover:text-ink group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
              <div className="relative mt-6">
                <div className="text-[10px] uppercase tracking-widest2 text-mid">Follow on {c.network}</div>
                <div className="mt-1 font-display text-2xl font-semibold tracking-tight">{c.handle}</div>
                <p className="mt-3 text-[14px] text-ink/65 leading-relaxed max-w-md">{c.blurb}</p>
              </div>
              <div className="relative mt-7 inline-flex items-center gap-2 text-[12.5px] font-medium text-ink">
                <span className="h-px w-8 bg-ink" /> Follow Us
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
