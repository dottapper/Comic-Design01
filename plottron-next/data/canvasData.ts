export interface CanvasItem {
  id: string
  title: string
  coverImage: string
  author: string
  genre: string[]
  description: string
  rating: number
  status: 'ongoing' | 'completed' | 'hiatus'
  x: number
  y: number
  size: 'small' | 'medium' | 'large'
  rotation: number
  priority?: boolean
  // 実際の画像サイズを追加
  imageWidth: number
  imageHeight: number
}

export const canvasData: CanvasItem[] = [
  {
    id: '1',
    title: 'PLOTTRON Vol.1',
    coverImage: '/hero/main01.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Action', 'Adventure'],
    description: 'The beginning of an epic journey through the digital realm where technology meets human spirit.',
    rating: 4.8,
    status: 'ongoing',
    x: 150,
    y: 120,
    size: 'large',
    rotation: -3,
    priority: true,
    imageWidth: 1548,
    imageHeight: 812
  },
  {
    id: '2',
    title: 'PLOTTRON Vol.2',
    coverImage: '/hero/main02.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Mystery', 'Thriller'],
    description: 'Deep dive into the mysteries of the digital consciousness and artificial intelligence.',
    rating: 4.7,
    status: 'ongoing',
    x: 800,
    y: 250,
    size: 'large',
    rotation: 2,
    priority: true,
    imageWidth: 1564,
    imageHeight: 815
  },
  {
    id: '3',
    title: 'PLOTTRON Vol.3',
    coverImage: '/hero/main03.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Drama', 'Philosophy'],
    description: 'Exploring the boundaries between human consciousness and digital existence.',
    rating: 4.9,
    status: 'ongoing',
    x: 1400,
    y: 180,
    size: 'large',
    rotation: -1,
    priority: true,
    imageWidth: 582,
    imageHeight: 820
  },
  {
    id: '4',
    title: 'PLOTTRON Vol.4',
    coverImage: '/hero/main04.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Action', 'Romance'],
    description: 'A tale of love and sacrifice in the age of digital transformation.',
    rating: 4.6,
    status: 'ongoing',
    x: 400,
    y: 550,
    size: 'medium',
    rotation: 4,
    priority: true,
    imageWidth: 1443,
    imageHeight: 811
  },
  {
    id: '5',
    title: 'PLOTTRON Vol.5',
    coverImage: '/hero/main05.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Horror', 'Suspense'],
    description: 'When technology goes wrong, humanity faces its greatest challenge yet.',
    rating: 4.8,
    status: 'ongoing',
    x: 1100,
    y: 650,
    size: 'medium',
    rotation: -2,
    imageWidth: 574,
    imageHeight: 821
  },
  {
    id: '6',
    title: 'PLOTTRON Vol.6',
    coverImage: '/hero/main06.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Comedy', 'Adventure'],
    description: 'A lighthearted journey through the quirks and wonders of digital life.',
    rating: 4.5,
    status: 'ongoing',
    x: 1600,
    y: 500,
    size: 'medium',
    rotation: 1,
    imageWidth: 582,
    imageHeight: 818
  },
  {
    id: '7',
    title: 'PLOTTRON Vol.7',
    coverImage: '/hero/main07.jpg',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Drama', 'Family'],
    description: 'Family bonds tested in a world where reality and virtuality blur.',
    rating: 4.7,
    status: 'ongoing',
    x: 250,
    y: 800,
    size: 'medium',
    rotation: -4,
    imageWidth: 768,
    imageHeight: 1095
  },
  {
    id: '8',
    title: 'PLOTTRON Vol.8',
    coverImage: '/hero/main08.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Mystery', 'Detective'],
    description: 'Digital detective work in a world where every byte holds a secret.',
    rating: 4.6,
    status: 'ongoing',
    x: 900,
    y: 900,
    size: 'medium',
    rotation: 3,
    imageWidth: 986,
    imageHeight: 353
  },
  {
    id: '9',
    title: 'PLOTTRON Vol.9',
    coverImage: '/hero/main09.png',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Fantasy', 'Magic'],
    description: 'Where ancient magic meets cutting-edge technology in an epic fusion.',
    rating: 4.8,
    status: 'ongoing',
    x: 1500,
    y: 850,
    size: 'small',
    rotation: -1,
    imageWidth: 986,
    imageHeight: 353
  },
  {
    id: '10',
    title: 'PLOTTRON Vol.10',
    coverImage: '/hero/main10.jpg',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Sports', 'Competition'],
    description: 'Virtual sports where physical and digital abilities collide in spectacular fashion.',
    rating: 4.4,
    status: 'ongoing',
    x: 300,
    y: 1100,
    size: 'small',
    rotation: 2,
    imageWidth: 768,
    imageHeight: 544
  },
  {
    id: '11',
    title: 'PLOTTRON Vol.11',
    coverImage: '/hero/main11.jpg',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Psychological', 'Thriller'],
    description: 'A mind-bending journey through the depths of digital consciousness.',
    rating: 4.9,
    status: 'ongoing',
    x: 700,
    y: 1200,
    size: 'small',
    rotation: -3,
    imageWidth: 768,
    imageHeight: 1004
  },
  {
    id: '12',
    title: 'PLOTTRON Vol.12',
    coverImage: '/hero/main12.jpg',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Romance', 'Slice of Life'],
    description: 'Everyday life in a world where technology enhances human connection.',
    rating: 4.3,
    status: 'ongoing',
    x: 1200,
    y: 1100,
    size: 'small',
    rotation: 1,
    imageWidth: 768,
    imageHeight: 1014
  },
  {
    id: '13',
    title: 'PLOTTRON Vol.13',
    coverImage: '/hero/main13.jpg',
    author: 'PLOTTRON Studio',
    genre: ['Sci-Fi', 'Epic', 'Space Opera'],
    description: 'The grand finale of the digital age, where humanity reaches for the stars.',
    rating: 4.9,
    status: 'ongoing',
    x: 1700,
    y: 1200,
    size: 'small',
    rotation: -2,
    imageWidth: 768,
    imageHeight: 996
  }
]

// レスポンシブ対応のビューポート計算ユーティリティ
export function getViewportDimensions() {
  if (typeof window === 'undefined') {
    return { width: 1200, height: 800 } // SSR デフォルト値
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

// デバイスタイプ判定
export function getDeviceType() {
  const { width } = getViewportDimensions()
  if (width <= 480) return 'mobile'
  if (width <= 768) return 'tablet'
  if (width <= 1024) return 'desktop-small'
  return 'desktop'
}

// レスポンシブキャンバスサイズ計算
export function getResponsiveCanvasSize() {
  const { width, height } = getViewportDimensions()
  const deviceType = getDeviceType()
  
  switch (deviceType) {
    case 'mobile':
      return { width: width * 2.5, height: height * 3 }
    case 'tablet':
      return { width: width * 3, height: height * 2.5 }
    case 'desktop-small':
      return { width: width * 2.5, height: height * 2 }
    default:
      return { width: 4000, height: 3000 }
  }
}

// レスポンシブ座標変換
export function convertToResponsivePosition(
  originalX: number, 
  originalY: number, 
  originalCanvasWidth = 4000, 
  originalCanvasHeight = 3000
) {
  const { width: newWidth, height: newHeight } = getResponsiveCanvasSize()
  
  return {
    x: (originalX / originalCanvasWidth) * newWidth,
    y: (originalY / originalCanvasHeight) * newHeight
  }
}

// Utility functions for generating random positions and rotations
export function generateRandomPosition(minX: number, maxX: number, minY: number, maxY: number) {
  return {
    x: Math.floor(Math.random() * (maxX - minX + 1)) + minX,
    y: Math.floor(Math.random() * (maxY - minY + 1)) + minY
  }
}

export function generateRandomRotation() {
  return Math.floor(Math.random() * 11) - 5 // -5 to +5 degrees
}

// 画像の縦横比に基づいてカードサイズを計算する関数
export function calculateCardSize(item: CanvasItem): { width: number; height: number } {
  const baseSizes = {
    small: 120,
    medium: 160,
    large: 200
  }
  
  const baseSize = baseSizes[item.size]
  const aspectRatio = item.imageWidth / item.imageHeight
  
  // 縦横比に基づいてサイズを調整
  if (aspectRatio > 1.5) {
    // 横長画像（1.5:1以上）
    return {
      width: baseSize * 1.5,
      height: baseSize * 1.5 / aspectRatio
    }
  } else if (aspectRatio < 0.8) {
    // 縦長画像（0.8:1以下）
    return {
      width: baseSize * 0.8,
      height: baseSize * 0.8 / aspectRatio
    }
  } else {
    // 標準的な縦横比
    return {
      width: baseSize,
      height: baseSize / aspectRatio
    }
  }
}

// レスポンシブグリッドシステム
export function generateResponsiveGrid(items: CanvasItem[]): CanvasItem[] {
  const deviceType = getDeviceType()
  const canvasSize = getResponsiveCanvasSize()
  
  // デバイス別グリッド設定
  const gridConfig = {
    mobile: { columns: 2, rows: Math.ceil(items.length / 2), spacing: 50 },
    tablet: { columns: 3, rows: Math.ceil(items.length / 3), spacing: 80 },
    'desktop-small': { columns: 4, rows: Math.ceil(items.length / 4), spacing: 100 },
    desktop: { columns: 5, rows: Math.ceil(items.length / 5), spacing: 120 }
  }
  
  const config = gridConfig[deviceType as keyof typeof gridConfig] || gridConfig.desktop
  const cellWidth = (canvasSize.width - config.spacing * (config.columns + 1)) / config.columns
  const cellHeight = (canvasSize.height - config.spacing * (config.rows + 1)) / config.rows
  
  return items.map((item, index) => {
    const col = index % config.columns
    const row = Math.floor(index / config.columns)
    
    // グリッド位置計算（ランダムなオフセット付き）
    const baseX = config.spacing + col * (cellWidth + config.spacing)
    const baseY = config.spacing + row * (cellHeight + config.spacing)
    
    // 自然な配置のためのランダムオフセット
    const offsetX = (Math.random() - 0.5) * (cellWidth * 0.3)
    const offsetY = (Math.random() - 0.5) * (cellHeight * 0.3)
    
    return {
      ...item,
      x: baseX + offsetX,
      y: baseY + offsetY,
      rotation: generateRandomRotation()
    }
  })
}

export function generateDynamicItems(count: number): CanvasItem[] {
  const items: CanvasItem[] = []
  const titles = [
    'Digital Dreams', 'Virtual Visions', 'Cyber Chronicles', 'Neo Narratives',
    'Tech Tales', 'Pixel Portraits', 'Binary Ballads', 'Quantum Quests',
    'Matrix Myths', 'Circuit Stories', 'Data Dramas', 'Code Chronicles', 'Web Worlds'
  ]
  
  // 画像サイズのマッピング
  const imageSizes = [
    { width: 1548, height: 812 }, { width: 1564, height: 815 }, { width: 582, height: 820 },
    { width: 1443, height: 811 }, { width: 574, height: 821 }, { width: 582, height: 818 },
    { width: 768, height: 1095 }, { width: 986, height: 353 }, { width: 986, height: 353 },
    { width: 768, height: 544 }, { width: 768, height: 1004 }, { width: 768, height: 1014 },
    { width: 768, height: 996 }
  ]
  
  for (let i = 0; i < count; i++) {
    const position = generateRandomPosition(100, 3500, 100, 2500)
    const imageIndex = i % imageSizes.length
    const imageSize = imageSizes[imageIndex]
    
    items.push({
      id: `dynamic-${i + 1}`,
      title: titles[i % titles.length],
      coverImage: `/hero/main${(i % 13) + 1}.${i < 7 ? 'png' : 'jpg'}`,
      author: 'PLOTTRON Studio',
      genre: ['Sci-Fi', 'Adventure'],
      description: 'A dynamic story in the PLOTTRON universe.',
      rating: 4.0 + Math.random() * 1.0,
      status: 'ongoing',
      x: position.x,
      y: position.y,
      size: i % 3 === 0 ? 'large' : i % 3 === 1 ? 'medium' : 'small',
      rotation: generateRandomRotation(),
      imageWidth: imageSize.width,
      imageHeight: imageSize.height
    })
  }
  
  // レスポンシブグリッドを適用
  return generateResponsiveGrid(items)
} 