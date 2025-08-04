'use client'

import React, { useState } from 'react'

const Header: React.FC = () => {
  const [accelerationMode, setAccelerationMode] = useState<'standby' | 'active'>('standby')

  return (
    <header className="plot-accelerator-header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-container">
            <h1 className="logo">PLOTTRON</h1>
            <div className="tagline">Where Stories Accelerate</div>
            <div className="energy-indicator">
              <div className="energy-bar"></div>
              <div className="energy-bar"></div>
              <div className="energy-bar"></div>
            </div>
          </div>
        </div>
        
        <nav className="navigation">
          <button className="nav-btn accelerator-btn">
            <span className="btn-icon">⚡</span>
            <span className="btn-text">Accelerate Discovery</span>
            <div className="btn-energy"></div>
          </button>
          <button className="nav-btn collection-btn">
            <span className="btn-icon">🧲</span>
            <span className="btn-text">My Collection</span>
            <div className="btn-energy"></div>
          </button>
        </nav>
        
        <div className="header-controls">
          <button 
            className={`control-btn power-btn ${accelerationMode}`}
            onClick={() => setAccelerationMode(accelerationMode === 'standby' ? 'active' : 'standby')}
            aria-label="Toggle Acceleration Mode"
          >
            <div className="power-ring">
              <div className="power-core"></div>
            </div>
            <span className="power-text">{accelerationMode === 'standby' ? 'STANDBY' : 'ACTIVE'}</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .plot-accelerator-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(20, 20, 30, 0.95) 50%, 
            rgba(0, 0, 0, 0.95) 100%);
          border-bottom: 2px solid rgba(0, 255, 255, 0.3);
          backdrop-filter: blur(10px);
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo-section {
          flex: 1;
        }

        .logo-container {
          position: relative;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          background: linear-gradient(45deg, #ff6b35 0%, #f7931e 50%, #00ffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          letter-spacing: 3px;
          text-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
          animation: logoGlow 3s ease-in-out infinite;
        }

        .tagline {
          font-size: 11px;
          color: rgba(0, 255, 255, 0.8);
          margin-top: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .energy-indicator {
          display: flex;
          gap: 2px;
          margin-top: 4px;
        }

        .energy-bar {
          width: 20px;
          height: 2px;
          background: rgba(0, 255, 255, 0.3);
          border-radius: 1px;
          animation: energyFlow 2s ease-in-out infinite;
        }

        .energy-bar:nth-child(2) {
          animation-delay: 0.3s;
        }

        .energy-bar:nth-child(3) {
          animation-delay: 0.6s;
        }

        .navigation {
          display: flex;
          gap: 1rem;
          flex: 2;
          justify-content: center;
        }

        .nav-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 25px;
          color: white;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .nav-btn:hover {
          border-color: rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .nav-btn:hover .btn-energy {
          opacity: 1;
          animation: energyPulse 0.5s ease-in-out infinite;
        }

        .btn-icon {
          font-size: 14px;
          filter: drop-shadow(0 0 5px currentColor);
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .btn-energy {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(255, 107, 53, 0.2) 0%, rgba(0, 255, 255, 0.2) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .header-controls {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        .power-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 16px;
          background: transparent;
          border: 2px solid rgba(255, 107, 53, 0.5);
          border-radius: 12px;
          color: #ff6b35;
          font-size: 8px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .power-btn.active {
          border-color: rgba(0, 255, 255, 0.8);
          color: #00ffff;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        }

        .power-ring {
          position: relative;
          width: 24px;
          height: 24px;
          border: 2px solid currentColor;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .power-core {
          width: 8px;
          height: 8px;
          background: currentColor;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .power-btn.active .power-core {
          animation: powerPulse 1s ease-in-out infinite;
        }

        .power-text {
          letter-spacing: 0.5px;
        }

        @keyframes logoGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px rgba(255, 107, 53, 0.3));
          }
          50% { 
            filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.5));
          }
        }

        @keyframes energyFlow {
          0%, 100% { 
            background: rgba(0, 255, 255, 0.3);
            transform: scaleX(1);
          }
          50% { 
            background: rgba(255, 107, 53, 0.8);
            transform: scaleX(1.2);
          }
        }

        @keyframes energyPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes powerPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .header-content {
            padding: 0 1rem;
          }

          .logo {
            font-size: 20px;
          }

          .tagline {
            font-size: 9px;
          }

          .navigation {
            gap: 0.5rem;
          }

          .nav-btn {
            padding: 8px 12px;
            font-size: 10px;
          }

          .btn-text {
            display: none;
          }

          .btn-icon {
            font-size: 16px;
          }

          .power-btn {
            padding: 6px 10px;
          }

          .power-ring {
            width: 20px;
            height: 20px;
          }

          .power-text {
            font-size: 7px;
          }
        }
      `}</style>
    </header>
  )
}

export default Header 