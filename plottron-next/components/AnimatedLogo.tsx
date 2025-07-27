'use client';

export default function AnimatedLogo() {
  return (
    <div className="relative">
      <div 
        className="plottron-comic-glitch" 
        data-text="PLOTTRON"
      >
        PLOTTRON
      </div>
      
      <style jsx>{`
        .plottron-comic-glitch {
          position: relative;
          font-family: var(--font-bungee), var(--font-anton), Impact, sans-serif;
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          line-height: 0.9;
          z-index: 10;
          user-select: none;
          cursor: pointer;
          
          color: #a855f7;
          
          text-shadow: 
            -4px -4px 0px #000,
            4px -4px 0px #000,
            -4px 4px 0px #000,
            4px 4px 0px #000,
            -4px 0px 0px #000,
            4px 0px 0px #000,
            0px -4px 0px #000,
            0px 4px 0px #000,
            -2px -2px 0px #ffffff22,
            2px 2px 0px #00000066,
            0 0 20px rgba(168, 85, 247, 0.5);
          
          filter: brightness(1.1) contrast(1.2);
          will-change: transform, filter, color;
          animation: colorFlicker 4s infinite linear;
        }

        .plottron-comic-glitch::before,
        .plottron-comic-glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          line-height: inherit;
          pointer-events: none;
          z-index: 11;
        }

        .plottron-comic-glitch::before {
          color: #fbbf24;
          text-shadow: 
            -4px -4px 0px #000,
            4px -4px 0px #000,
            -4px 4px 0px #000,
            4px 4px 0px #000,
            -4px 0px 0px #000,
            4px 0px 0px #000,
            0px -4px 0px #000,
            0px 4px 0px #000,
            -2px -2px 0px #ffffff22,
            2px 2px 0px #00000066,
            0 0 20px rgba(251, 191, 36, 0.5);
          
          animation: glitchShift1 2.5s infinite linear;
          mix-blend-mode: screen;
          opacity: 0;
        }

        .plottron-comic-glitch::after {
          color: #06d6a0;
          text-shadow: 
            -4px -4px 0px #000,
            4px -4px 0px #000,
            -4px 4px 0px #000,
            4px 4px 0px #000,
            -4px 0px 0px #000,
            4px 0px 0px #000,
            0px -4px 0px #000,
            0px 4px 0px #000,
            -2px -2px 0px #ffffff22,
            2px 2px 0px #00000066,
            0 0 20px rgba(6, 214, 160, 0.5);
          
          animation: glitchShift2 2.3s infinite linear;
          mix-blend-mode: screen;
          opacity: 0;
        }

        @keyframes colorFlicker {
          0%, 85% { color: #a855f7; }
          86%, 88% { color: #fbbf24; }
          89%, 91% { color: #06d6a0; }
          92%, 94% { color: #f59e0b; }
          95%, 100% { color: #a855f7; }
        }

        @keyframes glitchShift1 {
          0%, 90% { 
            opacity: 0; 
            transform: translateX(0px) skewX(0deg); 
            clip-path: inset(0 0 100% 0);
          }
          91% { 
            opacity: 0.8; 
            transform: translateX(-8px) skewX(-2deg); 
            clip-path: inset(0 0 75% 0);
          }
          92% { 
            opacity: 0.9; 
            transform: translateX(6px) skewX(1deg); 
            clip-path: inset(20% 0 50% 0);
          }
          93% { 
            opacity: 0.7; 
            transform: translateX(-4px) skewX(-1deg); 
            clip-path: inset(10% 0 80% 0);
          }
          94% { 
            opacity: 0.8; 
            transform: translateX(10px) skewX(3deg); 
            clip-path: inset(30% 0 30% 0);
          }
          95%, 100% { 
            opacity: 0; 
            transform: translateX(0px) skewX(0deg); 
            clip-path: inset(0 0 100% 0);
          }
        }

        @keyframes glitchShift2 {
          0%, 85% { 
            opacity: 0; 
            transform: translateX(0px) skewX(0deg); 
            clip-path: inset(100% 0 0 0);
          }
          86% { 
            opacity: 0.7; 
            transform: translateX(5px) skewX(1deg); 
            clip-path: inset(60% 0 0 0);
          }
          87% { 
            opacity: 0.9; 
            transform: translateX(-7px) skewX(-2deg); 
            clip-path: inset(40% 0 20% 0);
          }
          88% { 
            opacity: 0.6; 
            transform: translateX(3px) skewX(1deg); 
            clip-path: inset(70% 0 10% 0);
          }
          89% { 
            opacity: 0.8; 
            transform: translateX(-9px) skewX(-3deg); 
            clip-path: inset(20% 0 40% 0);
          }
          90%, 100% { 
            opacity: 0; 
            transform: translateX(0px) skewX(0deg); 
            clip-path: inset(100% 0 0 0);
          }
        }

        /* ホバー時の強烈なグリッチ */
        .plottron-comic-glitch:hover {
          animation: baseGlitch 0.3s infinite linear;
        }

        .plottron-comic-glitch:hover::before {
          animation: glitchShift1 0.15s infinite linear;
          opacity: 0.9;
        }

        .plottron-comic-glitch:hover::after {
          animation: glitchShift2 0.18s infinite linear;
          opacity: 0.9;
        }

        @keyframes baseGlitch {
          0% { 
            transform: translateX(0px) scale(1); 
            filter: brightness(1.1) contrast(1.2) hue-rotate(0deg);
          }
          10% { 
            transform: translateX(-2px) scale(1.01); 
            filter: brightness(1.3) contrast(1.5) hue-rotate(5deg);
          }
          20% { 
            transform: translateX(3px) scale(0.99); 
            filter: brightness(0.9) contrast(1.8) hue-rotate(-3deg);
          }
          30% { 
            transform: translateX(-1px) scale(1.02); 
            filter: brightness(1.4) contrast(1.1) hue-rotate(8deg);
          }
          40% { 
            transform: translateX(2px) scale(0.98); 
            filter: brightness(1.2) contrast(1.6) hue-rotate(-5deg);
          }
          50% { 
            transform: translateX(-3px) scale(1.01); 
            filter: brightness(1.1) contrast(1.3) hue-rotate(2deg);
          }
          60% { 
            transform: translateX(1px) scale(1); 
            filter: brightness(1.5) contrast(1.4) hue-rotate(-7deg);
          }
          70% { 
            transform: translateX(-2px) scale(1.02); 
            filter: brightness(0.8) contrast(1.7) hue-rotate(6deg);
          }
          80% { 
            transform: translateX(4px) scale(0.99); 
            filter: brightness(1.3) contrast(1.2) hue-rotate(-4deg);
          }
          90% { 
            transform: translateX(-1px) scale(1.01); 
            filter: brightness(1.1) contrast(1.5) hue-rotate(3deg);
          }
          100% { 
            transform: translateX(0px) scale(1); 
            filter: brightness(1.1) contrast(1.2) hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}