import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';
import { school, navLinks } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="relative bg-ink text-soft pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Logo size={48} invert />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-silver/70">
              A trusted name in Karachi education for over three decades. We believe every child carries
              something extraordinary — and our work is to help it grow.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href={school.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:bg-white/10 transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href={school.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:bg-white/10 transition-colors"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-widest2 text-silver/60 mb-4">
              Quick Links
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-[13.5px] text-silver/80 hover:text-soft transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-widest2 text-silver/60 mb-4">
              Get in Touch
            </div>
            <ul className="space-y-3 text-[13.5px] text-silver/80">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-silver/60 shrink-0" />
                <span>{school.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-silver/60 shrink-0" />
                <a href={`tel:${school.phone.replace(/\s/g, '')}`} className="hover:text-soft">
                  {school.phone}
                </a>
                <span className="text-silver/30">·</span>
                <a href={`tel:${school.mobile.replace(/\s/g, '')}`} className="hover:text-soft">
                  {school.mobile}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-silver/60 shrink-0" />
                <a href={`mailto:${school.email}`} className="hover:text-soft break-all">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-silver/60">
          <div>© {new Date().getFullYear()} Clifton Public School — Each Child Is Our Concern</div>
          <div>Crafted with care · Karachi, Pakistan</div>
        </div>
      </div>
    </footer>
  );
}
