import { useState, useCallback } from 'react';

export function useMouseTilt(maxTilt = 8) {
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  });

  const onMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized coordinates (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation degree
    const rotateX = -mouseY * maxTilt;
    const rotateY = mouseX * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
  }, []);

  return { style, onMouseMove, onMouseLeave };
}
export default useMouseTilt;
