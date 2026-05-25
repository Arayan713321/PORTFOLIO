import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Find both .reveal and .reveal-left targets
    const targets = Array.from(
      el.querySelectorAll('.reveal, .reveal-left, [data-reveal-child]')
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            // CRITICAL: unobserve so strips never disappear
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.08,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return ref;
}
