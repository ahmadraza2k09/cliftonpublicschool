import React from 'react';
import { Megaphone } from 'lucide-react';
import { notices } from '../data/site.js';

export default function NoticeBar() {
  const doubled = [...notices, ...notices];
  return (
    <div className="relative bg-ink text-soft border-y border-white/5 overflow-hidden">
      <div className="container-x flex items-center gap-4 py-2.5">
        <div className="flex items-center gap-2 shrink-0 pr-4 border-r border-white/15">
          <Megaphone size={14} className="text-silver" />
          <span className="text-[10px] uppercase tracking-widest2 text-silver/90 font-semibold">
            Notice Board
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track animate-marquee whitespace-nowrap">
            {doubled.map((n, i) => (
              <span key={i} className="mx-8 text-[13px] text-silver/85">
                <span className="mr-2 text-mid">•</span>
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
