'use client'

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, PanInfo } from 'framer-motion'
import { CanvasItem, calculateCardSize } from '@/data/canvasData'

interface InfiniteCanvasProps {
  items: CanvasItem[]
  className?: string
}

const InfiniteCanvas: React.FC<InfiniteCanvasProps> = ({
  items,
  className = ''
}) => {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedItem, setSelectedItem] = useState<CanvasItem | null>(null)
  
  // パン用のモーション値
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // ズーム用のモーション値
  const scale = useMotionValue(1)
  
  // キャンバスサイズ（実際のコンテンツエリア）
  const canvasWidth = 4000
  const canvasHeight = 3000
  
  // メモ化されたアイテムレンダリング（縦横比対応）
  const renderedItems = useMemo(() => {
    return items.map((item) => {
      const cardSize = calculateCardSize(item)
      
      return (
        <motion.div
          key={item.id}
          className={`canvas-item ${item.size}`}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            transform: `rotate(${item.rotation}deg)`,
            zIndex: item.size === 'large' ? 3 : item.size === 'medium' ? 2 : 1,
            // 動的に計算されたサイズを適用
            width: `${cardSize.width}px`,
            height: `${cardSize.height}px`
          }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 10,
            transition: { duration: 0.2 }
          }}
          onClick={(e) => {
            e.stopPropagation()
            setSelectedItem(item)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setSelectedItem(item)
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`${item.title} by ${item.author} - Click to view details`}
        >
          <div className="item-image-container">
            <Image
              src={item.coverImage}
              alt={`${item.title} cover`}
              width={item.imageWidth}
              height={item.imageHeight}
              className="item-image"
              priority={item.priority}
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="item-overlay">
              <div className="item-info">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-author">by {item.author}</p>
                <div className="item-genres">
                  {item.genre.slice(0, 2).map((genre, idx) => (
                    <span key={idx} className="genre-tag">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="item-rating">★ {item.rating.toFixed(1)}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    })
  }, [items])
  
  // パン処理の最適化
  const handlePan = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isDragging) return
    
    const newX = x.get() + info.delta.x
    const newY = y.get() + info.delta.y
    
    // キャンバス境界内に制限
    const maxX = window.innerWidth * 0.5
    const maxY = window.innerHeight * 0.5
    const minX = -(canvasWidth - window.innerWidth * 0.5)
    const minY = -(canvasHeight - window.innerHeight * 0.5)
    
    x.set(Math.max(minX, Math.min(maxX, newX)))
    y.set(Math.max(minY, Math.min(maxY, newY)))
  }, [isDragging, x, y, canvasWidth, canvasHeight])
  
  // マウスダウン
  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])
  
  // マウスアップ
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])
  
  // モーダル閉じる
  const closeModal = useCallback(() => {
    setSelectedItem(null)
  }, [])
  
  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeModal])
  
  // マウスイベント
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }
    
    document.addEventListener('mouseup', handleGlobalMouseUp)
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  return (
    <div className="infinite-canvas-container">
      {/* 無限キャンバス */}
      <motion.div
        ref={canvasRef}
        className={`infinite-canvas ${className}`}
        style={{
          width: canvasWidth,
          height: canvasHeight,
          x,
          y,
          scale,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onPan={handlePan}
        onPanStart={handleMouseDown}
        onPanEnd={handleMouseUp}
        drag
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={{
          left: -(canvasWidth - window.innerWidth),
          right: 0,
          top: -(canvasHeight - window.innerHeight),
          bottom: 0
        }}
      >
        {/* 背景パターン */}
        <div className="canvas-background">
          <div className="grid-pattern" />
          <div className="floating-elements" />
        </div>
        
        {/* キャンバスアイテム */}
        {renderedItems}
      </motion.div>
      
      {/* ナビゲーションガイド */}
      <div className="canvas-navigation">
        <div className="navigation-hint">
          <span>🖱️ ドラッグして探索</span>
        </div>
        <div className="zoom-controls">
          <button
            onClick={() => scale.set(Math.min(scale.get() * 1.2, 3))}
            className="zoom-btn"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={() => scale.set(Math.max(scale.get() / 1.2, 0.5))}
            className="zoom-btn"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>
      </div>
      
      {/* モーダル */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="modal-body">
              <div className="modal-image-container">
                <Image
                  src={selectedItem.coverImage}
                  alt={`${selectedItem.title} cover`}
                  width={selectedItem.imageWidth}
                  height={selectedItem.imageHeight}
                  className="modal-image"
                  quality={100}
                />
              </div>
              
              <div className="modal-info">
                <h2 id="modal-title" className="modal-title">
                  {selectedItem.title}
                </h2>
                <p className="modal-author">by {selectedItem.author}</p>
                <p className="modal-description">{selectedItem.description}</p>
                
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Genre:</span>
                    <div className="detail-value">
                      {selectedItem.genre.join(', ')}
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">{selectedItem.status}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Rating:</span>
                    <span className="detail-value">★ {selectedItem.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default InfiniteCanvas 