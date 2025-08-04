# 動的ASCII背景 - セットアップガイド

hello-world.studioスタイルの動くASCII背景をNext.jsプロジェクトに実装しました。

## 🚀 インストール済みパッケージ

```bash
npm install asciiground
```

## 📁 追加されたファイル

### 1. コンポーネント
- `/components/DynamicASCIIBackground.tsx` - メインの動的ASCII背景コンポーネント

### 2. 設定ファイル
- `/config/asciiConfig.ts` - カスタマイズ可能な設定オプション

### 3. ドキュメント
- `/docs/ASCII_BACKGROUND_SETUP.md` - このファイル

## 🎯 基本的な使用方法

### 既存の実装（PLOTTRON用）

```tsx
// components/InfiniteCanvas.tsx で既に実装済み
import DynamicASCIIBackground from './DynamicASCIIBackground'
import { PLOTTRON_ASCII_CONFIG } from '@/config/asciiConfig'

<DynamicASCIIBackground 
  config={PLOTTRON_ASCII_CONFIG}
  className="canvas-ascii-background"
/>
```

### 他のページでの使用

```tsx
import DynamicASCIIBackground from '@/components/DynamicASCIIBackground'
import { ASCII_PRESETS } from '@/config/asciiConfig'

// プリセットを使用
<DynamicASCIIBackground config={ASCII_PRESETS.elegant} />

// カスタム設定
<DynamicASCIIBackground 
  config={{
    pattern: 'perlin',
    characters: ['·', '•', '○', '●'],
    color: '#1B0D2D',
    fontSize: 12,
    opacity: 0.3
  }}
/>
```

## 🎨 利用可能なプリセット

### 1. `elegant` (デフォルト)
- パターン: Perlin noise
- 文字: 繊細なドットと円
- 色: 濃い紫 (#1B0D2D)
- 用途: プロフェッショナルなサイト

### 2. `cyberpunk`
- パターン: Matrix rain
- 文字: 日本語とバイナリ
- 色: 緑 (#00ff41)
- 用途: テック系サイト

### 3. `comic`
- パターン: Wave
- 文字: 星や図形
- 色: 濃い紫
- 用途: クリエイティブなサイト

### 4. `rain`
- パターン: Digital rain
- 文字: 縦線やドット
- 色: 青 (#4A90E2)
- 用途: 動的な効果が欲しいサイト

### 5. `cosmic`
- パターン: Perlin noise
- 文字: 星や宇宙関連
- 色: 金 (#FFD700)
- 用途: 宇宙・SF系サイト

### 6. `whisper`
- パターン: Perlin noise
- 文字: 極微細なドット
- 色: 薄いグレー
- 用途: ミニマルなデザイン

## ⚙️ カスタマイズオプション

### 基本設定

```tsx
interface ASCIIBackgroundConfig {
  pattern: 'perlin' | 'rain' | 'wave' | 'matrix'  // アニメーションパターン
  characters?: string[]                           // 使用する文字セット
  color?: string                                  // 文字の色
  backgroundColor?: string                        // 背景色
  fontSize?: number                               // フォントサイズ
  speed?: number                                  // アニメーション速度
  density?: number                                // 密度
  opacity?: number                                // 透明度
  responsive?: {                                  // レスポンシブ設定
    mobile?: Partial<ASCIIBackgroundConfig>
    tablet?: Partial<ASCIIBackgroundConfig>
    desktop?: Partial<ASCIIBackgroundConfig>
  }
}
```

### 文字セットのカスタマイズ

```tsx
import { ASCII_CHARACTER_SETS } from '@/config/asciiConfig'

// 既存の文字セットを使用
characters: ASCII_CHARACTER_SETS.minimal
characters: ASCII_CHARACTER_SETS.tech
characters: ASCII_CHARACTER_SETS.comic

// カスタム文字セット
characters: ['◦', '∘', '○', '●', '◎', '◯']
```

### レスポンシブ設定

```tsx
const config = {
  pattern: 'perlin',
  characters: ['·', '•', '○'],
  color: '#1B0D2D',
  fontSize: 12,
  opacity: 0.3,
  responsive: {
    mobile: { 
      fontSize: 8, 
      opacity: 0.15,
      density: 0.5 
    },
    tablet: { 
      fontSize: 10, 
      opacity: 0.2 
    },
    desktop: { 
      fontSize: 12, 
      opacity: 0.3 
    }
  }
}
```

## 🎯 パフォーマンス設定

### 最適化オプション

```tsx
// config/asciiConfig.ts で設定
export const PERFORMANCE_CONFIG = {
  targetFPS: 30,                    // 目標フレームレート
  maxParticles: 200,               // 最大パーティクル数
  enableGPUAcceleration: true,     // GPU加速
  useOffscreenCanvas: true,        // オフスクリーンキャンバス
  debounceResize: 100             // リサイズのデバウンス時間
}
```

## 📱 レスポンシブ対応

背景は自動的にデバイスサイズに応じて最適化されます：

- **モバイル（≤480px）**: 軽量化、透明度低下
- **タブレット（481-768px）**: 中程度の設定
- **デスクトップ（>768px）**: フル機能

## 🛠️ トラブルシューティング

### 1. ASCII背景が表示されない場合

```tsx
// フォールバック実装が有効化されているか確認
// ブラウザの開発者ツールでエラーをチェック
```

### 2. パフォーマンスの問題

```tsx
// 設定を軽量化
const lightConfig = {
  ...baseConfig,
  opacity: 0.1,
  density: 0.3,
  fontSize: 8
}
```

### 3. 他のコンテンツとの競合

```css
/* CSS でz-indexを調整 */
.canvas-ascii-background {
  z-index: -2 !important;
}
```

## 🔧 既存プロジェクトへの統合手順

### 1. パッケージのインストール
```bash
npm install asciiground
```

### 2. ファイルのコピー
- `components/DynamicASCIIBackground.tsx`
- `config/asciiConfig.ts`

### 3. コンポーネントの追加
```tsx
// 任意のページやレイアウトに追加
import DynamicASCIIBackground from '@/components/DynamicASCIIBackground'

export default function Layout({ children }) {
  return (
    <>
      <DynamicASCIIBackground config={yourConfig} />
      {children}
    </>
  )
}
```

### 4. CSS の設定
```css
/* 背景として機能するよう設定 */
.your-ascii-background {
  position: fixed;
  z-index: -1;
  pointer-events: none;
}
```

## 🎨 カスタムパターンの作成

独自のASCIIパターンを作成することも可能です：

```tsx
const customConfig = {
  pattern: 'perlin',
  characters: ['あ', 'い', 'う', 'え', 'お'],  // 日本語文字
  color: '#FF6B6B',
  fontSize: 14,
  speed: 0.5,
  opacity: 0.2
}
```

## 📊 パフォーマンスガイドライン

- **軽量**: opacity < 0.2, density < 0.5
- **標準**: opacity 0.2-0.4, density 0.5-0.7
- **リッチ**: opacity > 0.4, density > 0.7

---

## 🚀 実装完了

hello-world.studioスタイルの動的ASCII背景が正常に実装されました。既存のサイトに影響を与えることなく、美しい動的背景効果を提供します。

設定やカスタマイズについて質問がある場合は、`/config/asciiConfig.ts` を参照してください。