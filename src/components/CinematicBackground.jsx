import { useEffect, useRef } from 'react';

const CinematicBackground = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    const particleCount = 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random initial position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.opacity = `${Math.random()}`;
      
      container.appendChild(particle);
    }

    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <>
      <div className="background-animation" />
      <div className="particles" ref={particlesRef} />
    </>
  );
};

export default CinematicBackground;
