'use client'

import React from 'react'

interface EnergyMeterProps {
  level: number // 0-100
  mode: 'idle' | 'charging' | 'accelerating'
}

const EnergyMeter: React.FC<EnergyMeterProps> = ({ level, mode }) => {
  const getEnergyColor = () => {
    if (level < 30) return '#ff4444'
    if (level < 70) return '#ff6b35'
    return '#00ffff'
  }

  const getEnergyIntensity = () => {
    return Math.min(level / 100, 1)
  }

  return (
    <div className="energy-meter">
      <div className="meter-container">
        <div className="meter-ring">
          <svg width="80" height="80" viewBox="0 0 80 80">
            {/* Background ring */}
            <circle
              cx="40"
              cy="40"
              r="35"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3"
            />
            
            {/* Energy level ring */}
            <circle
              cx="40"
              cy="40"
              r="35"
              fill="none"
              stroke={getEnergyColor()}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 35}`}
              strokeDashoffset={`${2 * Math.PI * 35 * (1 - level / 100)}`}
              transform="rotate(-90 40 40)"
              className="energy-progress"
            />

            {/* Energy particles around the ring */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180)
              const x = 40 + 35 * Math.cos(angle)
              const y = 40 + 35 * Math.sin(angle)
              
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill={getEnergyColor()}
                  opacity={getEnergyIntensity()}
                  className="energy-particle"
                  style={{ 
                    '--delay': `${i * 0.1}s`,
                    '--angle': `${i * 45}deg`
                  } as React.CSSProperties}
                />
              )
            })}
          </svg>
        </div>

        <div className="meter-display">
          <div className="energy-level">
            {level}
            <span className="unit">%</span>
          </div>
          <div className="energy-mode">{mode.toUpperCase()}</div>
        </div>

        {/* Central energy core */}
        <div className="energy-core">
          <div className="core-inner"></div>
          {mode === 'accelerating' && (
            <div className="core-explosion"></div>
          )}
        </div>

        {/* Energy sparks */}
        {mode !== 'idle' && (
          <div className="energy-sparks">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="spark"
                style={{
                  '--angle': `${i * 30}deg`,
                  '--delay': `${i * 0.05}s`,
                  '--intensity': getEnergyIntensity()
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .energy-meter {
          position: absolute;
          top: -45px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 80px;
        }

        .meter-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .meter-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          animation: ${mode === 'accelerating' ? 'spin 1s linear infinite' : 'none'};
        }

        .energy-progress {
          transition: stroke-dashoffset 0.3s ease, stroke 0.3s ease;
          filter: drop-shadow(0 0 5px currentColor);
        }

        .energy-particle {
          animation: sparkle 1s ease-in-out infinite var(--delay);
          transform-origin: 40px 40px;
        }

        .meter-display {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          font-weight: bold;
          z-index: 2;
        }

        .energy-level {
          font-size: 14px;
          line-height: 1;
          color: ${getEnergyColor()};
          text-shadow: 0 0 5px currentColor;
        }

        .unit {
          font-size: 8px;
          opacity: 0.7;
        }

        .energy-mode {
          font-size: 6px;
          opacity: 0.8;
          margin-top: 2px;
          letter-spacing: 0.5px;
        }

        .energy-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, ${getEnergyColor()} 0%, transparent 70%);
          opacity: ${getEnergyIntensity()};
          z-index: 1;
        }

        .core-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${getEnergyColor()};
          box-shadow: 0 0 10px ${getEnergyColor()};
          animation: ${mode === 'charging' ? 'pulse 0.5s ease-in-out infinite' : 'none'};
        }

        .core-explosion {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, transparent 70%);
          animation: explode 0.3s ease-out infinite;
        }

        .energy-sparks {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .spark {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 8px;
          background: linear-gradient(to top, ${getEnergyColor()} 0%, transparent 100%);
          transform-origin: 0 0;
          transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-45px);
          opacity: calc(var(--intensity) * 0.8);
          animation: sparkShoot 0.3s ease-out infinite var(--delay);
        }

        @keyframes sparkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.8) rotate(var(--angle));
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2) rotate(var(--angle));
          }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }

        @keyframes explode {
          0% { 
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% { 
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes sparkShoot {
          0% { 
            height: 8px;
            opacity: calc(var(--intensity) * 0.8);
          }
          50% { 
            height: 15px;
            opacity: calc(var(--intensity) * 1);
          }
          100% { 
            height: 8px;
            opacity: calc(var(--intensity) * 0.8);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .energy-meter {
            width: 60px;
            height: 60px;
            top: -35px;
          }

          .energy-level {
            font-size: 12px;
          }

          .energy-mode {
            font-size: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default EnergyMeter