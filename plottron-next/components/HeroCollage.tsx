'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../styles/hero.css';

interface ImageData {
  src: string;
  alt: string;
  size: 'L' | 'M' | 'S';
  width: number;
  height: number;
  top: number;
  left: number;
  rotation: number;
}

export default function HeroCollage() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  // 7枚の画像データ（L:1枚, M:3枚, S:3枚）
  const images: ImageData[] = [
    {
      src: '/hero/main01.png',
      alt: 'Hero Image 1',
      size: 'L',
      width: 360,
      height: 360,
      top: 15,
      left: 10,
      rotation: 2
    },
    {
      src: '/hero/main02.png',
      alt: 'Hero Image 2',
      size: 'M',
      width: 280,
      height: 280,
      top: 55,
      left: 40,
      rotation: -3
    },
    {
      src: '/hero/main03.png',
      alt: 'Hero Image 3',
      size: 'M',
      width: 280,
      height: 280,
      top: 5,
      left: 60,
      rotation: 4
    },
    {
      src: '/hero/main04.png',
      alt: 'Hero Image 4',
      size: 'M',
      width: 280,
      height: 280,
      top: 45,
      left: 20,
      rotation: -1
    },
    {
      src: '/hero/main05.png',
      alt: 'Hero Image 5',
      size: 'S',
      width: 200,
      height: 200,
      top: 75,
      left: 5,
      rotation: 3
    },
    {
      src: '/hero/main06.png',
      alt: 'Hero Image 6',
      size: 'S',
      width: 200,
      height: 200,
      top: 25,
      left: 70,
      rotation: -2
    },
    {
      src: '/hero/main07.jpg',
      alt: 'Hero Image 7',
      size: 'S',
      width: 200,
      height: 200,
      top: 65,
      left: 50,
      rotation: 1
    }
  ];

  useEffect(() => {
    // ページロード後にアニメーション開始
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // キーボードナビゲーション
  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleImageClick(images[index]);
        break;
      case 'ArrowRight':
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % images.length);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + images.length) % images.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 3 + images.length) % images.length);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 3) % images.length);
        break;
    }
  };

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [selectedImage]);

  return (
    <>
      <section className={`hero-collage ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`image-card ${focusedIndex === index ? 'focused' : ''}`}
              style={{
                '--rotation': `${image.rotation}deg`,
                position: 'absolute',
                top: `${image.top}%`,
                left: `${image.left}%`,
                transform: `rotate(${image.rotation}deg)`,
                width: `${image.width}px`,
                height: `${image.height}px`,
                zIndex: index + 1,
                animationDelay: `${index * 0.1}s`
              } as React.CSSProperties}
              onClick={() => handleImageClick(image)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              tabIndex={0}
              role="button"
              aria-label={`${image.alt}をクリックして拡大表示`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="collage-image"
                priority={index < 3} // 最初の3枚は優先読み込み
              />
            </div>
          ))}
        </div>
      </section>

      {/* モーダル */}
      {selectedImage && (
        <dialog
          open
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={closeModal} 
              aria-label="モーダルを閉じる"
            >
              ×
            </button>
            <h2 id="modal-title" className="sr-only">{selectedImage.alt}</h2>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={600}
              height={600}
              className="modal-image"
            />
          </div>
        </dialog>
      )}
    </>
  );
}