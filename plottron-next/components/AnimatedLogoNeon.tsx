'use client';

export default function AnimatedLogoNeon() {
  return (
    <div className="relative">
      <div 
        className="plottron-neon-logo" 
        data-text="PLOTTRON"
      >
        PLOTTRON
      </div>
      
      <style jsx>{`
        .plottron-neon-logo {
          position: relative;
          font-family: var(--font-chewy), cursive;
          font-size: 3rem;
          font-weight: 400;
          letter-spacing: 0.2em;
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1;
          z-index: 1;
          user-select: none;
          cursor: pointer;
          
          text-shadow:
            0 0 3px rgba(255, 255, 255, 0.8),
            0 0 6px rgba(255, 255, 255, 0.5),
            0 0 10px rgba(255, 255, 255, 0.3),
            0 0 15px rgba(255, 255, 255, 0.2);
          
          filter: brightness(1.1) contrast(1.1);
          animation: textGlow 3s ease-in-out infinite alternate;
          border-radius: 4px;
          padding: 0.1em 0.3em;
          overflow: visible;
        }

        .plottron-neon-logo::before, 
        .plottron-neon-logo::after {
          content: attr(data-text);
          position: absolute;
          left: 0; 
          top: 0;
          width: 100%; 
          height: 100%;
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: 0.8;
          z-index: 2;
          filter: blur(0.2px);
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          line-height: inherit;
        }

        .plottron-neon-logo::before {
          color: #ff0040;
          transform: translate(-1px, -1px);
          animation: redStatic 0.08s steps(5) infinite;
          text-shadow: 0 0 5px #ff0040;
        }

        .plottron-neon-logo::after {
          color: #00ffff;
          transform: translate(1px, 1px);
          animation: cyanStatic 0.1s steps(8) infinite;
          text-shadow: 0 0 5px #00ffff;
        }

        @keyframes textGlow {
          0% {
            text-shadow:
              0 0 3px rgba(255, 255, 255, 0.8),
              0 0 6px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.3),
              0 0 15px rgba(255, 255, 255, 0.2);
            filter: brightness(1.1) contrast(1.1);
          }
          100% {
            text-shadow:
              0 0 4px rgba(255, 255, 255, 0.9),
              0 0 8px rgba(255, 255, 255, 0.6),
              0 0 12px rgba(255, 255, 255, 0.4),
              0 0 18px rgba(255, 255, 255, 0.3);
            filter: brightness(1.2) contrast(1.15);
          }
        }

        .plottron-neon-logo:hover {
          animation: textGlowHover 0.4s ease-in-out infinite alternate, staticShake 0.1s steps(3) infinite;
          text-shadow:
            0 0 8px rgba(255, 255, 255, 1),
            0 0 16px rgba(255, 255, 255, 0.9),
            0 0 24px rgba(255, 255, 255, 0.7),
            0 0 32px rgba(255, 255, 255, 0.5),
            0 0 48px rgba(255, 255, 255, 0.4),
            0 0 64px rgba(255, 255, 255, 0.3);
          filter: brightness(1.4) contrast(1.3);
        }

        .plottron-neon-logo:hover::before {
          animation: redStatic 0.03s steps(10) infinite;
          opacity: 1;
        }

        .plottron-neon-logo:hover::after {
          animation: cyanStatic 0.04s steps(12) infinite;
          opacity: 1;
        }

        @keyframes redStatic {
          0% { 
            transform: translate(-1px, -1px);
            clip-path: polygon(0 0, 100% 0, 100% 30%, 0 25%);
          }
          20% { 
            transform: translate(-2px, 0px);
            clip-path: polygon(0 10%, 100% 15%, 100% 60%, 0 55%);
          }
          40% { 
            transform: translate(-1px, -2px);
            clip-path: polygon(0 0, 100% 0, 100% 80%, 0 75%);
          }
          60% { 
            transform: translate(-2px, -1px);
            clip-path: polygon(0 20%, 100% 25%, 100% 45%, 0 40%);
          }
          80% { 
            transform: translate(-1px, 1px);
            clip-path: polygon(0 0, 100% 0, 100% 70%, 0 65%);
          }
          100% { 
            transform: translate(-1px, -1px);
            clip-path: polygon(0 0, 100% 0, 100% 50%, 0 45%);
          }
        }

        @keyframes cyanStatic {
          0% { 
            transform: translate(1px, 1px);
            clip-path: polygon(0 75%, 100% 80%, 100% 100%, 0 100%);
          }
          25% { 
            transform: translate(2px, 0px);
            clip-path: polygon(0 40%, 100% 45%, 100% 85%, 0 80%);
          }
          50% { 
            transform: translate(1px, 2px);
            clip-path: polygon(0 65%, 100% 70%, 100% 100%, 0 95%);
          }
          75% { 
            transform: translate(2px, 1px);
            clip-path: polygon(0 55%, 100% 60%, 100% 75%, 0 70%);
          }
          100% { 
            transform: translate(1px, 1px);
            clip-path: polygon(0 85%, 100% 90%, 100% 100%, 0 100%);
          }
        }

        @keyframes staticShake {
          0% { transform: translateX(0px); }
          33% { transform: translateX(-1px); }
          66% { transform: translateX(1px); }
          100% { transform: translateX(0px); }
        }

        @keyframes textGlowHover {
          0% { filter: brightness(1.4) contrast(1.3); }
          100% { filter: brightness(1.6) contrast(1.4); }
        }
      `}</style>
    </div>
  );
}