'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface StoryParticleProps {
  item: {
    id: string
    title: string
    coverImage: string
    author: string
    genre: string[]
    rating: number
    description: string
  }
  orbit: number
  position: number
  total: number
  energyLevel: number
  accelerationMode: 'idle' | 'charging' | 'accelerating'
  onClick?: (story: StoryParticleProps['item']) => void
}

const StoryParticle: React.FC<StoryParticleProps> = ({
  item,
  orbit,
  position,
  total,
  energyLevel,
  accelerationMode,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const angle = (position * 360) / total
  const radius = orbit === 1 ? 140 : orbit === 2 ? 220 : 300

  const handleClick = () => {
    if (onClick) {
      onClick(item)
    } else {
      setIsClicked(true)
      // Animate particle acceleration toward center
      setTimeout(() => {
        console.log('Accelerating to story:', item.title)
      }, 800)
    }
  }

  const getParticleSize = () => {
    if (orbit === 1) return 80 // Inner orbit - largest
    if (orbit === 2) return 65 // Middle orbit - medium
    return 50 // Outer orbit - smallest
  }

  const getEnergyColor = () => {
    if (accelerationMode === 'accelerating') return '#00ffff'
    if (accelerationMode === 'charging') return '#ff6b35'
    return '#ffffff'
  }

  return (
    <div
      className={`story-particle orbit-${orbit} ${accelerationMode} ${isClicked ? 'accelerating-to-center' : ''}`}
      style={{
        '--angle': `${angle}deg`,
        '--radius': `${radius}px`,
        '--size': `${getParticleSize()}px`,
        '--energy-color': getEnergyColor(),
        '--position': position,
        '--total': total,
        '--energy-level': energyLevel
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="particle-container">
        <div className="particle-image">
          <Image
            src={item.coverImage}
            alt={item.title}
            width={getParticleSize()}
            height={getParticleSize()}
            className="cover-image"
          />
          <div className="energy-ring"></div>
          <div className="particle-glow"></div>
        </div>

        {(isHovered || accelerationMode === 'accelerating') && (
          <div className="particle-info">
            <h4>{item.title}</h4>
            <p>{item.author}</p>
            <div className="rating">
              <span>★ {item.rating}</span>
            </div>
            <div className="genres">
              {item.genre.slice(0, 2).map(genre => (
                <span key={genre} className="genre-tag">{genre}</span>
              ))}
            </div>
          </div>
        )}

        <div className="acceleration-trail"></div>
      </div>

      <style jsx>{`
        .story-particle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--size);
          height: var(--size);
          transform-origin: 0 0;
          transform: translate(-50%, -50%) 
                     rotate(var(--angle)) 
                     translateX(var(--radius)) 
                     rotate(calc(-1 * var(--angle)));
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: calc(10 - var(--orbit));
        }

        .story-particle:hover {
          transform: translate(-50%, -50%) 
                     rotate(var(--angle)) 
                     translateX(var(--radius)) 
                     rotate(calc(-1 * var(--angle)))
                     scale(1.5);
          z-index: 50;
        }

        .story-particle.accelerating-to-center {
          animation: accelerateToCenter 0.8s ease-in-out forwards;
          z-index: 100;
        }

        .particle-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .particle-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--energy-color);
          box-shadow: 0 0 calc(var(--energy-level) * 0.3px) var(--energy-color);
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .energy-ring {
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 1px solid var(--energy-color);
          border-radius: 50%;
          opacity: calc(var(--energy-level) / 100);
          animation: energyPulse 1s ease-in-out infinite;
        }

        .particle-glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: radial-gradient(circle, var(--energy-color) 0%, transparent 70%);
          border-radius: 50%;
          opacity: calc(var(--energy-level) / 200);
          animation: glow 2s ease-in-out infinite alternate;
        }

        .story-particle.charging .energy-ring,
        .story-particle.accelerating .energy-ring {
          border-width: 2px;
          animation: energyPulse 0.5s ease-in-out infinite;
        }

        .story-particle.accelerating .particle-glow {
          opacity: 0.8;
          animation: glow 0.2s ease-in-out infinite alternate;
        }

        .particle-info {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid var(--energy-color);
          border-radius: 8px;
          padding: 8px;
          min-width: 120px;
          text-align: center;
          color: white;
          font-size: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          animation: fadeInUp 0.3s ease-out;
          z-index: 1000;
        }

        .particle-info h4 {
          margin: 0 0 4px 0;
          font-size: 11px;
          font-weight: bold;
          color: var(--energy-color);
        }

        .particle-info p {
          margin: 0 0 4px 0;
          opacity: 0.8;
        }

        .rating {
          color: #ffd700;
          font-size: 9px;
          margin-bottom: 4px;
        }

        .genres {
          display: flex;
          gap: 2px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .genre-tag {
          background: rgba(255, 107, 53, 0.3);
          border: 1px solid rgba(255, 107, 53, 0.5);
          border-radius: 3px;
          padding: 1px 4px;
          font-size: 8px;
        }

        .acceleration-trail {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, var(--energy-color), transparent);
          transform: translate(-50%, -100%);
          opacity: 0;
          border-radius: 1px;
        }

        .story-particle.accelerating .acceleration-trail {
          opacity: 1;
          animation: trail 0.5s ease-in-out infinite;
          height: calc(20px + var(--energy-level) * 0.5px);
        }

        @keyframes energyPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        @keyframes glow {
          from { opacity: 0.2; }
          to { opacity: 0.6; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @keyframes trail {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -100%) scaleY(1); }
          50% { opacity: 1; transform: translate(-50%, -100%) scaleY(1.5); }
        }

        @keyframes accelerateToCenter {
          0% {
            transform: translate(-50%, -50%) 
                       rotate(var(--angle)) 
                       translateX(var(--radius)) 
                       rotate(calc(-1 * var(--angle)))
                       scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) 
                       rotate(0deg) 
                       translateX(0) 
                       rotate(0deg)
                       scale(2);
            opacity: 0;
          }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .story-particle:hover {
            transform: translate(-50%, -50%) 
                       rotate(var(--angle)) 
                       translateX(var(--radius)) 
                       rotate(calc(-1 * var(--angle)))
                       scale(1.8);
          }

          .particle-info {
            font-size: 10px;
            padding: 8px;
            min-width: 120px;
          }

          .particle-info h4 {
            font-size: 11px;
          }

          .genre-tag {
            font-size: 8px;
            padding: 2px 4px;
          }
        }
      `}</style>
    </div>
  )
}

export default StoryParticle