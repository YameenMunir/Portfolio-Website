// Fade-in animation for sections on scroll
import { useEffect } from 'react';

export default function useSectionFadeIn() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const onScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          section.classList.add('fade-in-section');
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
