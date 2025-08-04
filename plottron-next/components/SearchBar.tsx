'use client'

import React, { useState, useRef, useEffect } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: {
    genre?: string
    rating?: number
    sortBy?: 'rating' | 'title' | 'latest'
  }) => void
  isActive: boolean
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterChange, isActive }) => {
  const [query, setQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState({
    genre: '',
    rating: 0,
    sortBy: 'rating' as 'rating' | 'title' | 'latest'
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const genres = ['All', 'Sci-Fi', 'Action', 'Mystery', 'Drama', 'Horror', 'Comedy', 'Fantasy']

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const clearSearch = () => {
    setQuery('')
    setFilters({ genre: '', rating: 0, sortBy: 'rating' })
    onSearch('')
    onFilterChange({ genre: '', rating: 0, sortBy: 'rating' })
  }

  return (
    <div className={`search-container ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}>
      <div className="search-main">
        <button 
          className="search-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle search"
        >
          <span className="search-icon">🔍</span>
          <span className="search-energy"></span>
        </button>

        {isExpanded && (
          <div className="search-expanded">
            <div className="search-input-container">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for stories to accelerate..."
                className="search-input"
              />
              
              {query && (
                <button 
                  className="clear-button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="search-filters">
              <div className="filter-group">
                <label>Genre</label>
                <select 
                  value={filters.genre}
                  onChange={(e) => handleFilterChange({ genre: e.target.value })}
                  className="filter-select"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre === 'All' ? '' : genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Min Rating</label>
                <div className="rating-filter">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      className={`rating-star ${filters.rating >= rating ? 'active' : ''}`}
                      onClick={() => handleFilterChange({ rating: rating === filters.rating ? 0 : rating })}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label>Sort By</label>
                <select 
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange({ sortBy: e.target.value as typeof filters.sortBy })}
                  className="filter-select"
                >
                  <option value="rating">Energy Level</option>
                  <option value="title">Title</option>
                  <option value="latest">Latest</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .search-container {
          position: fixed;
          top: 100px;
          right: 2rem;
          z-index: 100;
          transition: all 0.3s ease;
        }

        .search-container.active {
          top: 90px;
        }

        .search-main {
          position: relative;
        }

        .search-toggle {
          width: 50px;
          height: 50px;
          border: 2px solid rgba(0, 255, 255, 0.5);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.8);
          color: #00ffff;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .search-toggle:hover {
          border-color: rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .search-container.expanded .search-toggle {
          border-color: rgba(255, 107, 53, 0.8);
          color: #ff6b35;
          box-shadow: 0 0 20px rgba(255, 107, 53, 0.3);
        }

        .search-icon {
          font-size: 20px;
          z-index: 2;
        }

        .search-energy {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .search-toggle:hover .search-energy {
          opacity: 1;
          animation: energyPulse 1s ease-in-out infinite;
        }

        .search-expanded {
          position: absolute;
          top: 60px;
          right: 0;
          width: 350px;
          background: linear-gradient(135deg, 
            rgba(20, 20, 30, 0.95) 0%, 
            rgba(0, 0, 0, 0.95) 100%);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 15px;
          padding: 1.5rem;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(0, 255, 255, 0.2);
          animation: slideIn 0.3s ease-out;
        }

        .search-input-container {
          position: relative;
          margin-bottom: 1rem;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem 2.5rem 0.75rem 1rem;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid rgba(0, 255, 255, 0.3);
          border-radius: 8px;
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: rgba(0, 255, 255, 0.8);
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .clear-button {
          position: absolute;
          right: 0.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          border: none;
          background: rgba(255, 107, 53, 0.8);
          color: white;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
          transition: all 0.3s ease;
        }

        .clear-button:hover {
          background: rgba(255, 107, 53, 1);
          transform: translateY(-50%) scale(1.1);
        }

        .search-filters {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .filter-group label {
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: bold;
        }

        .filter-select {
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 6px;
          color: white;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-select:focus {
          outline: none;
          border-color: rgba(0, 255, 255, 0.8);
        }

        .filter-select option {
          background: rgba(0, 0, 0, 0.9);
          color: white;
        }

        .rating-filter {
          display: flex;
          gap: 0.25rem;
        }

        .rating-star {
          width: 32px;
          height: 32px;
          border: none;
          background: rgba(0, 0, 0, 0.7);
          color: rgba(255, 215, 0, 0.3);
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .rating-star:hover,
        .rating-star.active {
          color: #ffd700;
          background: rgba(255, 215, 0, 0.2);
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes energyPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .search-container {
            right: 1rem;
            top: 90px;
          }

          .search-expanded {
            width: 280px;
            right: -100px;
          }

          .search-toggle {
            width: 45px;
            height: 45px;
          }

          .search-icon {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  )
}

export default SearchBar