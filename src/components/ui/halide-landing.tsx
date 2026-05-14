import React, { useEffect, useRef } from 'react';

const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #d0ff59; /* Project lime color */
          --grain-opacity: 0.15;
          --gradient-1: #d0ff59;
          --gradient-2: #34d399;
        }

        .halide-body {
          background-color: var(--bg);
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(208, 255, 89, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(52, 211, 153, 0.05) 0%, transparent 40%);
          color: var(--silver);
          font-family: 'Syncopate', sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .halide-grain {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100%; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          background-image: url('/hero.jpg');
        }

        .layer-1 { 
          filter: grayscale(1) contrast(1.2) brightness(0.4); 
          transform: scale(1.1);
        }
        .layer-2 { 
          filter: grayscale(1) contrast(1.1) brightness(0.6); 
          opacity: 0.4; 
          mix-blend-mode: screen; 
          transform: scale(1.05);
        }
        .layer-3 { 
          filter: contrast(1.3) brightness(0.8) sepia(0.3) hue-rotate(45deg); 
          opacity: 0.2; 
          mix-blend-mode: overlay; 
        }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(208, 255, 89, 0.03) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: absolute;
          inset: 0;
          padding: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .interface-grid {
            padding: 4rem;
          }
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(1.8rem, 7vw, 7rem);
          line-height: 0.9;
          letter-spacing: -0.05em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #fff 30%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 10px 30px rgba(208, 255, 89, 0.2));
        }

        .cta-button {
          pointer-events: auto;
          background: var(--silver);
          color: var(--bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transitinpm rund ev on: 0.3s;
          font-family: sans-serif;
          box-shadow: 0 0 20px rgba(208, 255, 89, 0.2);
        }

        .cta-button:hover { 
          background: var(--accent); 
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(208, 255, 89, 0.4);
        }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <div className="halide-body">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div style={{ fontWeight: 700, letterSpacing: '0.2em', fontSize: '0.8rem' }}>OLAMILEKAN (Lekjason)_CORE</div>
          <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.7rem' }}>
            <div>LATITUDE: 6.5244° N</div>
            <div>SECTOR: AI & FULL-STACK</div>
          </div>

          <h1 className="hero-title">BUILDING SCALABLE<br />AI & WEB SOLUTIONS</h1>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', opacity: 0.8 }}>
              <p>[ STATUS: ACTIVE ]</p>
              <p>PRECISION ARCHITECTURE & MACHINE INTELLIGENCE</p>
            </div>
            <a href="#portfolio" className="cta-button">VIEW ARCHIVE</a>
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el) => { if (el) layersRef.current[0] = el; }}></div>
            <div className="layer layer-2" ref={(el) => { if (el) layersRef.current[1] = el; }}></div>
            <div className="layer layer-3" ref={(el) => { if (el) layersRef.current[2] = el; }}></div>
            <div className="contours"></div>
          </div>
        </div>

        <div className="scroll-hint"></div>
      </div>
    </>
  );
};

export default HalideLanding;
