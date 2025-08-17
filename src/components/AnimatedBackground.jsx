import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const spheresRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize spheres
    const initializeSpheres = () => {
      const sphereCount = Math.floor((canvas.width * canvas.height) / 50000);
      spheresRef.current = [];

      for (let i = 0; i < sphereCount; i++) {
        spheresRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 60 + 20,
          opacity: Math.random() * 0.15 + 0.05,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
          blur: Math.random() * 40 + 20
        });
      }
    };

    initializeSpheres();

    // Animation loop
    const animate = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spheresRef.current.forEach((sphere, index) => {
        // Update position
        sphere.x += sphere.vx;
        sphere.y += sphere.vy;

        // Wrap around edges
        if (sphere.x < -sphere.radius) sphere.x = canvas.width + sphere.radius;
        if (sphere.x > canvas.width + sphere.radius) sphere.x = -sphere.radius;
        if (sphere.y < -sphere.radius) sphere.y = canvas.height + sphere.radius;
        if (sphere.y > canvas.height + sphere.radius) sphere.y = -sphere.radius;

        // Pulsing effect
        const pulse = Math.sin(timestamp * sphere.pulseSpeed + sphere.pulseOffset) * 0.3 + 0.7;
        const currentRadius = sphere.radius * pulse;
        const currentOpacity = sphere.opacity * pulse;

        // Create radial gradient for bokeh effect
        const gradient = ctx.createRadialGradient(
          sphere.x, sphere.y, 0,
          sphere.x, sphere.y, currentRadius
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        gradient.addColorStop(0.4, `rgba(255, 255, 255, ${currentOpacity * 0.6})`);
        gradient.addColorStop(0.7, `rgba(255, 255, 255, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        // Apply blur effect
        ctx.filter = `blur(${sphere.blur}px)`;
        ctx.globalCompositeOperation = 'screen';
        
        // Draw sphere
        ctx.beginPath();
        ctx.arc(sphere.x, sphere.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Reset filter and composite operation
        ctx.filter = 'none';
        ctx.globalCompositeOperation = 'source-over';
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.015) 0%, transparent 50%), #000000'
      }}
    />
  );
};

export default AnimatedBackground;