import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Principal() {
  return (
    <section id="principal" className="relative py-24 sm:py-32 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-ink via-[#1a1a1a] to-mid shadow-ring">
              {/* Principal portrait placeholder. Drop /public/principal.jpg to replace. */}
              <img
                src="/principal.jpg"
                alt="Principal of Clifton Public School"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-soft px-8 text-center">
                <div
                  className="font-display italic text-[110px] leading-none text-silver/15"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  P
                </div>
                <div className="-mt-6 text-[11px] uppercase tracking-widest2 text-silver/80">
                  Principal · CPS
                </div>
                <div className="mt-2 font-display text-2xl">A Message of Welcome</div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-4 sm:-right-8 max-w-[260px] rounded-2xl bg-white border border-black/5 shadow-soft p-5"
            >
              <Quote size={20} className="text-ink/70" />
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/80">
                "Education is the most powerful tool we hand to a child. We hand it with care."
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">Principal's Message</span>
          <h2 className="section-title mt-3">
            "We don't just teach lessons.{' '}
            <span className="italic font-light" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              We raise people.
            </span>
            "
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/75 max-w-2xl">
            <p>
              Welcome to Clifton Public School. For more than three decades, our institution has been a
              second home to thousands of young learners. We believe that education is a partnership —
              between teacher, parent, and child — and we take that responsibility with deep seriousness.
            </p>
            <p>
              Our promise is simple: every child who walks through our gate is seen, supported, and pushed
              to grow. We celebrate effort, build resilience, and protect curiosity. The world our children
              are entering needs not just skilled minds, but kind hearts and steady character.
            </p>
            <p>
              Thank you for considering us. We look forward to walking alongside you and your child.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div
              className="font-display italic text-2xl text-ink"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              — The Principal
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-black/15 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
