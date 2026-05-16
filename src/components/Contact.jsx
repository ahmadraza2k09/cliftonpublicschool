import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Smartphone,
  MessageCircle,
  Navigation,
  Send,
  Facebook,
  Instagram,
} from 'lucide-react';
import { school } from '../data/site.js';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = f.get('name');
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`
    );
    window.location.href = `mailto:${school.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-title mt-3">
            Let's{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              start a conversation
            </span>
            .
          </h2>
          <p className="section-sub">
            Visit us at the campus, send us a message, or pick up the phone — we're delighted to help.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-ink text-soft shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest2 text-mid">Address</div>
                  <div className="mt-1 text-[14.5px] text-ink/85 leading-relaxed">{school.address}</div>
                  <a
                    href={school.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-[12.5px] font-medium text-ink hover:gap-2.5 transition-all"
                  >
                    <Navigation size={13} /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href={`tel:${school.phone.replace(/\s/g, '')}`}
                className="card card-hover p-6 block"
              >
                <Phone size={18} className="text-ink" />
                <div className="mt-3 text-[10px] uppercase tracking-widest2 text-mid">Landline</div>
                <div className="font-display text-[15px] mt-0.5">{school.phone}</div>
              </a>
              <a
                href={`tel:${school.mobile.replace(/\s/g, '')}`}
                className="card card-hover p-6 block"
              >
                <Smartphone size={18} className="text-ink" />
                <div className="mt-3 text-[10px] uppercase tracking-widest2 text-mid">Mobile</div>
                <div className="font-display text-[15px] mt-0.5">{school.mobile}</div>
              </a>
              <a
                href={`https://wa.me/${school.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="card card-hover p-6 block"
              >
                <MessageCircle size={18} className="text-ink" />
                <div className="mt-3 text-[10px] uppercase tracking-widest2 text-mid">WhatsApp</div>
                <div className="font-display text-[15px] mt-0.5">Chat Now</div>
              </a>
              <a href={`mailto:${school.email}`} className="card card-hover p-6 block">
                <Mail size={18} className="text-ink" />
                <div className="mt-3 text-[10px] uppercase tracking-widest2 text-mid">Email</div>
                <div className="font-display text-[13px] mt-0.5 break-all">{school.email}</div>
              </a>
            </div>

            <div className="card p-6 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest2 text-mid">Follow Us</div>
                <div className="font-display text-[15px] mt-0.5">Stay connected</div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={school.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid place-items-center w-10 h-10 rounded-full bg-soft border border-black/5 hover:bg-ink hover:text-soft transition-colors"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href={school.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid place-items-center w-10 h-10 rounded-full bg-soft border border-black/5 hover:bg-ink hover:text-soft transition-colors"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form + map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <form onSubmit={submit} className="card p-7">
              <div className="text-[10px] uppercase tracking-widest2 text-mid">Send a Message</div>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                We'll get back within a working day.
              </h3>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Input name="name" label="Full Name" required />
                <Input name="phone" label="Phone" type="tel" required />
              </div>
              <div className="mt-4">
                <Input name="email" label="Email" type="email" required />
              </div>
              <div className="mt-4">
                <label className="block text-[11px] uppercase tracking-widest2 text-mid mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-black/10 bg-soft/60 focus:bg-white focus:border-ink/40 outline-none px-4 py-3 text-[14px] resize-none transition-colors"
                  placeholder="Tell us about your enquiry..."
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-3 flex-wrap">
                <p className="text-[12px] text-mid">
                  By submitting you agree to be contacted by our admissions team.
                </p>
                <button type="submit" className="btn-primary">
                  {sent ? 'Opening Mail…' : 'Send Message'} <Send size={14} />
                </button>
              </div>
            </form>

            <div className="rounded-2xl overflow-hidden border border-black/5 shadow-soft h-[320px]">
              <iframe
                title="Clifton Public School location"
                src={school.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Input({ name, label, type = 'text', required }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-widest2 text-mid mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-black/10 bg-soft/60 focus:bg-white focus:border-ink/40 outline-none px-4 py-3 text-[14px] transition-colors"
      />
    </div>
  );
}
