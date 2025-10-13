import { useEffect, useState } from 'react';

const MouseGradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="absolute inset-0 pointer-events-none opacity-30 transition-all duration-300"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(45 100% 50% / 0.15), transparent 40%)`
      }}
    />
  );
};

export default MouseGradient;
