'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="fixed-header">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo">PLOTTRON</h1>
        </div>
        
        <nav className="navigation">
          <button className="nav-btn">
            <span>&lt; discovery</span>
          </button>
          <button className="nav-btn">
            <span>collect &gt;</span>
          </button>
        </nav>
        
        <div className="header-controls">
          <button className="control-btn" aria-label="Settings">
            <span>⚙️</span>
          </button>
          <button className="control-btn" aria-label="Info">
            <span>ℹ️</span>
          </button>
          <button className="control-btn" aria-label="Menu">
            <span>☰</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 