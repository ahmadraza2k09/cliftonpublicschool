import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, { duration = 1600, start = false } = {}) {
  const [value, setValue] = useState(0);
  const raf = useRef(0);
  const startedAt = useRef(0);

  useEffect(() => {
    if (!start) return;
    const tick = (t) => {
      if (!startedAt.current) startedAt.current = t;
      const elapsed = t - startedAt.current;
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setValue(Math.round(target * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration, start]);

  return value;
}
