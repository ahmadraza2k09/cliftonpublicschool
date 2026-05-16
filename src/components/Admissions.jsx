import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  FileText,
  ClipboardCheck,
  CalendarCheck,
  GraduationCap,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import { school } from '../data/site.js';

const steps = [
  { icon: FileText, title: 'Enquire', desc: 'Speak with our admissions team or fill out the online form.' },
  { icon: ClipboardCheck, title: 'Apply', desc: 'Submit the prospectus form along with required documents.' },
  { icon: CalendarCheck, title: 'Assessment', desc: 'Age-appropriate evaluation and parent interaction.' },
  { icon: GraduationCap, title: 'Enrol', desc: 'Welcome to the Clifton Public School family.' },
];

const documents = [
  "Child's birth certificate (original + copy)",
  'Two recent passport-sized photographs',
  'Previous school report card (if applicable)',
  'Parent CNIC copies',
  'Vaccination record',
  'Completed admission form',
];

export default function Admissions() {
  return (
    <section id="admissions" className="relative py-24 sm:py-32 bg-soft">
      <div className="container-x">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 shadow-ring p-8 sm:p-12 text-soft"
        >
          <div className="absolute inset-0 logo-tile" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(255,255,255,0.18),transparent)]" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest2 text-silver/90">
                <span className="h-px w-8 bg-silver/60" />
                Admissions Open · 2026–27
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
                Limited seats available for the new academic year.
              </h2>
              <p className="mt-4 text-silver/85 max-w-xl">
                Begin your child's journey at Clifton Public School. Our admissions team is happy to walk
                you through the process — by phone, email, or in person.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary bg-soft text-ink hover:bg-silver">
                  Apply Now <ArrowRight size={16} />
                </a>
                <a href="#" className="btn-ghost">
                  <Download size={16} /> Download Prospectus
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest2 text-silver/90">
                  <Phone size={12} /> Admission Helpline
                </div>
                <a
                  href={`tel:${school.admission.replace(/\s/g, '')}`}
                  className="block mt-2 font-display text-2xl font-semibold tracking-tight"
                >
                  {school.admission}
                </a>
                <div className="mt-3 text-[12px] text-silver/80">
                  Mon – Sat · 8:00 AM to 2:00 PM
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <div className="mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-10">
            <div>
              <span className="eyebrow">The Process</span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                Four simple steps to enrolment.
              </h3>
            </div>
            <div className="divider-line" />
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-mid/40 to-transparent" />
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative card card-hover p-6 group"
              >
                <div className="absolute -top-3 right-5 text-[11px] font-semibold tracking-widest2 text-mid">
                  STEP 0{i + 1}
                </div>
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-soft border border-black/5 mb-5 group-hover:bg-ink group-hover:text-soft transition-colors">
                  <s.icon size={20} />
                </div>
                <div className="font-display text-[17px] font-semibold tracking-tight">{s.title}</div>
                <p className="mt-2 text-[13.5px] text-ink/65 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Eligibility + documents */}
        <div className="mt-16 grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="card p-8"
          >
            <span className="eyebrow">Eligibility</span>
            <h4 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              Age guidelines by grade.
            </h4>
            <ul className="mt-5 divide-y divide-black/5">
              {[
                ['Play Group', '2.5 – 3.5 years'],
                ['Nursery', '3.5 – 4.5 years'],
                ['KG', '4.5 – 5.5 years'],
                ['Class 1 – 5', 'Age + previous record'],
                ['Class 6 – 10', 'Subject to assessment'],
              ].map(([g, a]) => (
                <li key={g} className="flex items-center justify-between py-3 text-[14px]">
                  <span className="text-ink/80">{g}</span>
                  <span className="text-mid">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-8"
          >
            <span className="eyebrow">Required Documents</span>
            <h4 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              What to bring at the time of application.
            </h4>
            <ul className="mt-5 grid sm:grid-cols-2 gap-y-3 gap-x-6">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-2 text-[13.5px] text-ink/80">
                  <CheckCircle2 size={16} className="mt-0.5 text-ink/70 shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
