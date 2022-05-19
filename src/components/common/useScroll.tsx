import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollY,
  };
}
