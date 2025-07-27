import { useRef, useEffect, useState } from 'react';

export function useFloat() {
  const buttonRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  useEffect(() => {
    function updateConstraints() {
      if (buttonRef.current) {
        const { width, height } = buttonRef.current.getBoundingClientRect();
        setConstraints({
          left: -window.innerWidth + width + 16 * 2, // 16px for right-4
          top: -window.innerHeight + height + 48 * 2, // 48px for bottom-12
          right: 0,
          bottom: 0,
        });
      }
    }
    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  return { buttonRef, constraints };
}
