'use client'

import React, { useState, useEffect, useRef } from 'react'
import StoryParticle from './StoryParticle'
import EnergyMeter from './EnergyMeter'

interface AcceleratorHubProps {
  items: Array<{
    id: string
    title: string
    coverImage: string
    author: string
    genre: string[]
    rating: number
    description: string
  }>
}

const AcceleratorHub: React.FC<AcceleratorHubProps> = ({ items }) => {
  const [energyLevel, setEnergyLevel] = useState(0)
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
  const [accelerationMode, setAccelerationMode] = useState<'idle' | 'charging' | 'accelerating'>('idle')
  const hubRef = useRef<HTMLDivElement>(null)

  const genres = ['Sci-Fi', 'Action', 'Mystery', 'Drama', 'Horror', 'Comedy', 'Fantasy']

  // Energy charging effect
  useEffect(() => {
    if (accelerationMode === 'charging') {
      const interval = setInterval(() => {
        setEnergyLevel(prev => Math.min(prev + 2, 100))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [accelerationMode])

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre)
    setAccelerationMode('charging')
    setTimeout(() => setAccelerationMode('accelerating'), 1500)
  }

  const getParticlesByOrbit = (orbitLevel: number) => {
    const filteredItems = selectedGenre 
      ? items.filter(item => item.genre.includes(selectedGenre))
      : items

    switch (orbitLevel) {
      case 1: // Inner orbit - highest rated
        return filteredItems
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3)
      case 2: // Middle orbit - recommended
        return filteredItems.slice(3, 9)
      case 3: // Outer orbit - all others
        return filteredItems.slice(9)
      default:
        return []
    }
  }

  return (
    <div className="accelerator-hub" ref={hubRef}>
      <div className="accelerator-container">
        
        {/* Central Core */}
        <div className="accelerator-core">
          <div className="core-logo">
            <h1>PLOTTRON</h1>
            <p>Where Stories Accelerate</p>
          </div>
          
          {/* Energy Meter */}
          <EnergyMeter level={energyLevel} mode={accelerationMode} />
        </div>

        {/* Genre Selectors - Particle Injectors */}
        <div className="genre-injectors">
          {genres.map((genre, index) => (
            <button
              key={genre}
              className={`genre-injector ${selectedGenre === genre ? 'active' : ''}`}
              style={{ 
                '--angle': `${(index * 360 / genres.length)}deg`,
                '--delay': `${index * 0.1}s`
              } as React.CSSProperties}
              onClick={() => handleGenreSelect(genre)}
            >
              <span className="injector-label">{genre}</span>
              <div className="injector-beam"></div>
            </button>
          ))}
        </div>

        {/* Accelerator Rings */}
        {[1, 2, 3].map(orbit => (
          <div 
            key={orbit}
            className={`accelerator-ring orbit-${orbit} ${accelerationMode}`}
            style={{ '--orbit': orbit } as React.CSSProperties}
          >
            {getParticlesByOrbit(orbit).map((item, index) => (
              <StoryParticle
                key={item.id}
                item={item}
                orbit={orbit}
                position={index}
                total={getParticlesByOrbit(orbit).length}
                energyLevel={energyLevel}
                accelerationMode={accelerationMode}
              />
            ))}
          </div>
        ))}

        {/* Particle Effects */}
        <div className="particle-effects">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="energy-particle"
              style={{
                '--random-x': Math.random(),
                '--random-y': Math.random(),
                '--delay': `${Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Information Panel */}
        <div className="info-panel">
          <div className="acceleration-status">
            <span className={`status-indicator ${accelerationMode}`}>
              {accelerationMode === 'idle' && 'Ready to Accelerate'}
              {accelerationMode === 'charging' && 'Charging Energy...'}
              {accelerationMode === 'accelerating' && 'Stories Accelerating!'}
            </span>
          </div>
          
          {selectedGenre && (
            <div className="genre-info">
              <h3>Accelerating: {selectedGenre}</h3>
              <p>Discovering stories that will spark your imagination</p>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .accelerator-hub {
          min-height: 100vh;
          background: radial-gradient(circle at center, #0a0a0a 0%, #000 70%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .accelerator-container {
          position: relative;
          width: min(90vw, 800px);
          height: min(90vw, 800px);
          border-radius: 50%;
          border: 2px solid rgba(0, 255, 255, 0.3);
          box-shadow: 
            0 0 50px rgba(0, 255, 255, 0.2),
            inset 0 0 50px rgba(0, 255, 255, 0.1);
        }

        .accelerator-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #ff6b35 0%, #f7931e 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.8);
          z-index: 10;
        }

        .core-logo h1 {
          font-size: 14px;
          font-weight: bold;
          color: white;
          margin: 0;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        .core-logo p {
          font-size: 8px;
          color: rgba(255, 255, 255, 0.8);
          margin: 2px 0 0 0;
        }

        .genre-injectors {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
        }

        .genre-injector {
          position: absolute;
          top: 10px;
          left: 50%;
          width: 80px;
          height: 30px;
          background: linear-gradient(45deg, #1e3c72 0%, #2a5298 100%);
          border: 1px solid rgba(0, 255, 255, 0.5);
          border-radius: 15px;
          color: white;
          font-size: 10px;
          cursor: pointer;
          transform-origin: 50% 390px;
          transform: translateX(-50%) rotate(var(--angle));
          transition: all 0.3s ease;
          animation: pulse 2s infinite var(--delay);
        }

        .genre-injector:hover,
        .genre-injector.active {
          background: linear-gradient(45deg, #ff6b35 0%, #f7931e 100%);
          box-shadow: 0 0 15px rgba(255, 107, 53, 0.8);
          transform: translateX(-50%) rotate(var(--angle)) scale(1.1);
        }

        .injector-label {
          display: block;
          transform: rotate(calc(-1 * var(--angle)));
          line-height: 28px;
        }

        .accelerator-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1px solid rgba(0, 255, 255, 0.2);
          transform: translate(-50%, -50%);
        }

        .orbit-1 {
          width: 250px;
          height: 250px;
          border-color: rgba(255, 107, 53, 0.4);
          animation: rotate 20s linear infinite;
        }

        .orbit-2 {
          width: 400px;
          height: 400px;
          border-color: rgba(0, 255, 255, 0.3);
          animation: rotate 30s linear infinite;
        }

        .orbit-3 {
          width: 550px;
          height: 550px;
          border-color: rgba(147, 51, 234, 0.3);
          animation: rotate 40s linear infinite;
        }

        .accelerator-ring.charging {
          border-color: rgba(255, 107, 53, 0.8);
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.4);
        }

        .accelerator-ring.accelerating {
          animation-duration: calc(var(--orbit) * 5s);
          border-color: rgba(0, 255, 255, 1);
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
        }

        .particle-effects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .energy-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ffff;
          border-radius: 50%;
          left: calc(var(--random-x) * 100%);
          top: calc(var(--random-y) * 100%);
          animation: sparkle 1s infinite var(--delay);
        }

        .info-panel {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          color: white;
        }

        .status-indicator {
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .status-indicator.idle { color: rgba(255, 255, 255, 0.6); }
        .status-indicator.charging { 
          color: #ff6b35; 
          animation: glow 0.5s ease-in-out infinite alternate;
        }
        .status-indicator.accelerating { 
          color: #00ffff; 
          animation: glow 0.2s ease-in-out infinite alternate;
        }

        .genre-info {
          margin-top: 10px;
          opacity: 0.8;
        }

        .genre-info h3 {
          margin: 0;
          font-size: 14px;
          color: #ff6b35;
        }

        .genre-info p {
          margin: 5px 0 0 0;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }

        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes glow {
          from { text-shadow: 0 0 5px currentColor; }
          to { text-shadow: 0 0 15px currentColor, 0 0 25px currentColor; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .accelerator-container {
            width: 95vw;
            height: 95vw;
          }

          .genre-injector {
            width: 60px;
            height: 25px;
            font-size: 8px;
          }

          .orbit-1 { width: 200px; height: 200px; }
          .orbit-2 { width: 320px; height: 320px; }
          .orbit-3 { width: 440px; height: 440px; }

          .info-panel {
            bottom: -80px;
          }

          .status-indicator {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default AcceleratorHub