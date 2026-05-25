import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring  = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Only on pointer:fine devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot  = dotRef.current;
    const ring_ = ringRef.current;
    if (!dot || !ring_) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const loop = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

      dot.style.transform  = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%)`;
      ring_.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;

      rafRef.current = requestAnimationFrame(loop);
    };

    const onEnterLink = () => ring_?.classList.add('ring-hover');
    const onLeaveLink = () => ring_?.classList.remove('ring-hover');

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(loop);

    // Attach hover listeners to all interactive elements
    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };
    attachHover();

    // Re-attach on DOM changes (React re-renders)
    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      mo.disconnect();
    };
  }, []);

  return { dotRef, ringRef };
}
