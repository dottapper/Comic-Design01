'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

interface StoryDetailModalProps {
  story: {
    id: string
    title: string
    coverImage: string
    author: string
    genre: string[]
    rating: number
    description: string
  } | null
  isOpen: boolean
  onClose: () => void
  onRead: (storyId: string) => void
}

const StoryDetailModal: React.FC<StoryDetailModalProps> = ({
  story,
  isOpen,
  onClose,
  onRead
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !story) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleReadClick = () => {
    onRead(story.id)
    onClose()
  }

  return (
    <div className="story-detail-backdrop" onClick={handleBackdropClick}>
      <div className="story-detail-modal">
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          <span>×</span>
        </button>

        <div className="modal-content">
          <div className="story-cover">
            <Image
              src={story.coverImage}
              alt={story.title}
              width={300}
              height={400}
              className="cover-image"
            />
            <div className="energy-overlay"></div>
          </div>

          <div className="story-info">
            <div className="story-header">
              <h2>{story.title}</h2>
              <p className="author">by {story.author}</p>
              
              <div className="rating-genres">
                <div className="rating">
                  <span className="stars">★ {story.rating}</span>
                  <span className="score">/5.0</span>
                </div>
                
                <div className="genres">
                  {story.genre.map(genre => (
                    <span key={genre} className="genre-tag">{genre}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="story-description">
              <h3>Synopsis</h3>
              <p>{story.description}</p>
            </div>

            <div className="story-stats">
              <div className="stat-item">
                <span className="stat-label">Energy Level</span>
                <div className="energy-bar">
                  <div className="energy-fill" style={{ width: `${story.rating * 20}%` }}></div>
                </div>
              </div>
              
              <div className="stat-item">
                <span className="stat-label">Acceleration Ready</span>
                <span className="stat-value">✓ Optimized</span>
              </div>
            </div>

            <div className="action-buttons">
              <button className="read-button" onClick={handleReadClick}>
                <span className="button-icon">🚀</span>
                <span>Accelerate Reading</span>
                <div className="button-energy"></div>
              </button>
              
              <button className="collection-button">
                <span className="button-icon">🧲</span>
                <span>Add to Collection</span>
              </button>
              
              <button className="share-button">
                <span className="button-icon">⚡</span>
                <span>Share Energy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background particle effects */}
        <div className="modal-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="modal-particle"
              style={{
                '--delay': `${i * 0.1}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .story-detail-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          animation: fadeIn 0.3s ease-out;
        }

        .story-detail-modal {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(20, 20, 30, 0.95) 0%, 
            rgba(0, 0, 0, 0.95) 50%, 
            rgba(30, 30, 40, 0.95) 100%);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 20px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(0, 255, 255, 0.2);
          animation: modalSlideIn 0.4s ease-out;
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 40px;
          height: 40px;
          border: 2px solid rgba(255, 107, 53, 0.5);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          color: #ff6b35;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          border-color: rgba(0, 255, 255, 0.8);
          color: #00ffff;
          transform: rotate(90deg) scale(1.1);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        }

        .modal-content {
          display: flex;
          height: 100%;
          max-height: 90vh;
          overflow: hidden;
        }

        .story-cover {
          position: relative;
          width: 300px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(45deg, 
            rgba(255, 107, 53, 0.1) 0%, 
            rgba(0, 255, 255, 0.1) 100%);
          padding: 2rem;
        }

        .cover-image {
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 2px solid rgba(0, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .energy-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, 
            transparent 40%, 
            rgba(0, 255, 255, 0.1) 70%, 
            rgba(255, 107, 53, 0.1) 100%);
          pointer-events: none;
          animation: energyPulse 3s ease-in-out infinite;
        }

        .story-info {
          flex: 1;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .story-header h2 {
          font-size: 2rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ff6b35 0%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.5rem 0;
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .author {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.1rem;
          margin: 0 0 1.5rem 0;
        }

        .rating-genres {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stars {
          color: #ffd700;
          font-size: 1.2rem;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .score {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .genres {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .genre-tag {
          background: rgba(0, 255, 255, 0.2);
          border: 1px solid rgba(0, 255, 255, 0.4);
          border-radius: 15px;
          padding: 0.3rem 0.8rem;
          font-size: 0.8rem;
          color: #00ffff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .story-description {
          margin-bottom: 2rem;
        }

        .story-description h3 {
          color: #ff6b35;
          font-size: 1.2rem;
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-description p {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          font-size: 1rem;
        }

        .story-stats {
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .energy-bar {
          width: 150px;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          overflow: hidden;
        }

        .energy-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35 0%, #00ffff 100%);
          border-radius: 3px;
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .stat-value {
          color: #00ff88;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }

        .action-buttons button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 12px;
          background: rgba(0, 255, 255, 0.1);
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .read-button {
          flex: 2;
          border-color: rgba(255, 107, 53, 0.5);
          background: rgba(255, 107, 53, 0.1);
        }

        .read-button:hover {
          border-color: rgba(255, 107, 53, 0.8);
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
          transform: translateY(-2px);
        }

        .collection-button:hover,
        .share-button:hover {
          border-color: rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .button-icon {
          font-size: 1.2rem;
          filter: drop-shadow(0 0 5px currentColor);
        }

        .button-energy {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(255, 107, 53, 0.2) 0%, 
            rgba(0, 255, 255, 0.2) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .action-buttons button:hover .button-energy {
          opacity: 1;
          animation: energyFlow 1s ease-in-out infinite;
        }

        .modal-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .modal-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ffff;
          border-radius: 50%;
          left: var(--x);
          top: var(--y);
          animation: modalSparkle 2s ease-in-out infinite var(--delay);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes energyFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes modalSparkle {
          0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .story-detail-backdrop {
            padding: 1rem;
          }

          .modal-content {
            flex-direction: column;
            max-height: 90vh;
            overflow-y: auto;
          }

          .story-cover {
            width: 100%;
            padding: 1.5rem;
          }

          .story-info {
            padding: 1.5rem;
          }

          .story-header h2 {
            font-size: 1.5rem;
          }

          .rating-genres {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .close-button {
            width: 35px;
            height: 35px;
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}

export default StoryDetailModal