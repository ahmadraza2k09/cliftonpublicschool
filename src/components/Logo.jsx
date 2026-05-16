import React from 'react';

/**
 * School logo mark + wordmark.
 * The logo image (public/logo.png) already has a clean white rounded background,
 * so we render it on a soft surface with a subtle halo — letting the mark breathe.
 * On dark backgrounds (invert=true / hero), a soft glow lifts it for prominence.
 */
export default function Logo({ size = 44, withWordmark = true, invert = false }) {
  const [errored, setErrored] = React.useState(false);
  const dim = `${size}px`;

  return (
    <a href="#home" className="group inline-flex items-center gap-3 select-none">
      <div
        className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
          invert
            ? 'bg-white shadow-[0_8px_28px_-6px_rgba(255,255,255,0.25)] ring-1 ring-white/30'
            : 'bg-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/5'
        }`}
        style={{ width: dim, height: dim }}
        aria-hidden="true"
      >
        {!errored ? (
          <img
            src="/logo.jpg"
            alt=""
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-contain p-0.5"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center font-display font-bold text-ink text-base tracking-tight">
            CPS
          </span>
        )}
      </div>

      {withWordmark && (
        <div className="leading-tight">
          <div
            className={`font-display font-semibold text-[15px] sm:text-[16px] tracking-tight ${
              invert ? 'text-soft' : 'text-ink'
            }`}
          >
            Clifton Public School
          </div>
          <div
            className={`text-[10px] tracking-widest2 uppercase ${
              invert ? 'text-silver/80' : 'text-mid'
            }`}
          >
            Each Child Is Our Concern
          </div>
        </div>
      )}
    </a>
  );
}
