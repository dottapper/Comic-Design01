// ASCII Background Configuration
export interface ASCIIBackgroundConfig extends Record<string, unknown> {
  pattern: 'perlin' | 'rain' | 'wave' | 'matrix'
  characters?: string[]
  color?: string
  backgroundColor?: string
  fontSize?: number
  speed?: number
  density?: number
  opacity?: number
  responsive?: {
    mobile?: Partial<ASCIIBackgroundConfig>
    tablet?: Partial<ASCIIBackgroundConfig>
    desktop?: Partial<ASCIIBackgroundConfig>
  }
}

// Predefined character sets for different themes
export const ASCII_CHARACTER_SETS = {
  // Minimalist dots and circles
  minimal: ['·', '•', '∘', '○', '●', '◎', '◯'],
  
  // Tech/Programming theme
  tech: ['{', '}', '[', ']', '<', '>', '/', '\\', '|', '-', '+', '='],
  
  // Matrix/Digital rain
  matrix: ['0', '1', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ'],
  
  // Comic/Manga theme
  comic: ['★', '☆', '◆', '◇', '♦', '♢', '▲', '△', '▼', '▽'],
  
  // Organic/Nature
  organic: ['~', '≈', '∼', '⌇', '≋', '◊', '◈', '※', '◌', '○'],
  
  // Rain drops
  rain: ['|', '¦', '!', ';', ':', "'", '`', '.', ','],
  
  // Geometric
  geometric: ['□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩'],
  
  // Binary/Digital
  binary: ['0', '1', '□', '■', '▪', '▫', '◦', '•'],
  
  // Space theme
  space: ['*', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯'],
  
  // Delicate/Fine
  delicate: ['⁚', '⁛', '⁜', '⁝', '⁞', '∶', '∷', '∴', '∵', '∸']
}

// Predefined configurations for different moods/themes
export const ASCII_PRESETS: Record<string, ASCIIBackgroundConfig> = {
  // Subtle and elegant for professional sites
  elegant: {
    pattern: 'perlin',
    characters: ASCII_CHARACTER_SETS.minimal,
    color: '#1B0D2D',
    backgroundColor: 'transparent',
    fontSize: 10,
    speed: 0.3,
    density: 0.6,
    opacity: 0.2,
    responsive: {
      mobile: { fontSize: 8, opacity: 0.15 },
      tablet: { fontSize: 9, opacity: 0.18 },
      desktop: { fontSize: 10, opacity: 0.2 }
    }
  },
  
  // Tech/coding theme
  cyberpunk: {
    pattern: 'matrix',
    characters: ASCII_CHARACTER_SETS.matrix,
    color: '#00ff41',
    backgroundColor: 'transparent',
    fontSize: 12,
    speed: 1.2,
    density: 0.8,
    opacity: 0.4
  },
  
  // Comic book style
  comic: {
    pattern: 'wave',
    characters: ASCII_CHARACTER_SETS.comic,
    color: '#1B0D2D',
    backgroundColor: 'transparent',
    fontSize: 14,
    speed: 0.8,
    density: 0.7,
    opacity: 0.3
  },
  
  // Rain effect
  rain: {
    pattern: 'rain',
    characters: ASCII_CHARACTER_SETS.rain,
    color: '#4A90E2',
    backgroundColor: 'transparent',
    fontSize: 16,
    speed: 2.0,
    density: 0.5,
    opacity: 0.25
  },
  
  // Space theme
  cosmic: {
    pattern: 'perlin',
    characters: ASCII_CHARACTER_SETS.space,
    color: '#FFD700',
    backgroundColor: 'transparent',
    fontSize: 13,
    speed: 0.4,
    density: 0.6,
    opacity: 0.3
  },
  
  // Very subtle for clean designs
  whisper: {
    pattern: 'perlin',
    characters: ASCII_CHARACTER_SETS.delicate,
    color: '#E8E8E8',
    backgroundColor: 'transparent',
    fontSize: 8,
    speed: 0.2,
    density: 0.4,
    opacity: 0.1,
    responsive: {
      mobile: { opacity: 0.05 },
      tablet: { opacity: 0.08 },
      desktop: { opacity: 0.1 }
    }
  }
}

// Current configuration for the PLOTTRON site
export const PLOTTRON_ASCII_CONFIG: ASCIIBackgroundConfig = {
  pattern: 'perlin',
  characters: [
    '◦', '∘', '○', '●', '◎', '◯',  // Circles
    '◊', '◈', '◇', '♦',            // Diamonds  
    '⁚', '⁛', '∶', '∷',           // Delicate dots
    '✦', '✧', '✩', '✪',           // Stars
    '·', '•', '※', '◌'            // Subtle marks
  ],
  color: '#1B0D2D',
  backgroundColor: 'transparent',
  fontSize: 11,
  speed: 0.4,
  density: 0.7,
  opacity: 0.25,
  responsive: {
    mobile: { 
      fontSize: 9, 
      opacity: 0.15,
      density: 0.5 
    },
    tablet: { 
      fontSize: 10, 
      opacity: 0.2,
      density: 0.6 
    },
    desktop: { 
      fontSize: 11, 
      opacity: 0.25,
      density: 0.7 
    }
  }
}

// Performance settings
export const PERFORMANCE_CONFIG = {
  targetFPS: 30,
  maxParticles: 200,
  enableGPUAcceleration: true,
  useOffscreenCanvas: true,
  debounceResize: 100
}

// Utility function to get responsive config
export function getResponsiveASCIIConfig(
  baseConfig: ASCIIBackgroundConfig,
  screenWidth: number
): ASCIIBackgroundConfig {
  let deviceConfig: Partial<ASCIIBackgroundConfig> = {}
  
  if (screenWidth <= 480) {
    deviceConfig = baseConfig.responsive?.mobile || {}
  } else if (screenWidth <= 768) {
    deviceConfig = baseConfig.responsive?.tablet || {}
  } else {
    deviceConfig = baseConfig.responsive?.desktop || {}
  }
  
  return {
    ...baseConfig,
    ...deviceConfig
  }
}

// Utility to blend two configs
export function blendASCIIConfigs(
  config1: ASCIIBackgroundConfig,
  config2: Partial<ASCIIBackgroundConfig>
): ASCIIBackgroundConfig {
  return {
    ...config1,
    ...config2,
    characters: config2.characters || config1.characters,
    responsive: {
      ...config1.responsive,
      ...config2.responsive
    }
  }
}