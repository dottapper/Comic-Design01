# プロジェクト構成ガイド（更新を楽にする運用）

更新頻度の高い変更（ページ追加、カード増減、画像差し替え、セクション追加）を素早く安全に行えるよう、配置ルールと役割分担を定義します。

## 1. ディレクトリ構成（推奨）

- `app/`
  - Next.js App Router のルート。ページ/レイアウト/メタデータのみを置く。
  - 例: `app/page.tsx`, `app/layout.tsx`。
- `components/`
  - 再利用可能な UI コンポーネント群（純粋 UI）。
  - 例: `Header.tsx`, `StoryDetailModal.tsx`, `SearchBar.tsx`。
- `styles/`
  - グローバル/スコープスタイル。Tailwind を優先し、CSS は最小限。
  - 例: `globals.css`, `hero.css`, `infinite-canvas.css`。
- `data/`
  - 表示データ・定数・モック（UI からビジネスロジックを分離）。
  - 例: `canvasData.ts`。
- `hooks/`
  - 再利用可能なカスタムフック（状態・副作用の共通化）。
- `lib/`
  - 汎用ユーティリティ（フォーマッタ、計算、API クライアントなど）。
- `types/`
  - 型定義（共有の TypeScript 型）。
- `public/`
  - 画像/フォント/静的ファイル。用途別にサブフォルダを切る（例: `hero/`, `logos/`, `icons/`）。
- リポジトリ直下 `original-assets/`
  - 最適化前の原本データ置き場（納品元・撮って出し等）。ここから最適化して `plottron-next/public/` へ投入する。

パスエイリアス（`@/components/` 等）は `tsconfig.json` に設定済み。`import` は相対ではなくエイリアスを推奨。

## 2. 役割の分離

- ページ（`app/`）は「配置とデータ受け渡し」に限定
- 見た目・振る舞いは「コンポーネント（`components/`）」へ集約
- 定数・外部データは「`data/`」から注入し、UI 直書きを避ける
- 複数コンポーネントで使う状態/処理は「`hooks/` or `lib/`」へ抽出

## 3. よくある更新の手順

- 画像の差し替え
  1. `original-assets/` に原本を保存
  2. 必要に応じて最適化（形式/サイズ）して `public/` に配置
  3. 該当データ（例: `data/canvasData.ts`）のパスを更新
  4. UI コンポーネントの `img`/`Image` の参照を確認

- カードの追加/削除
  1. `data/` の配列に項目を追加/削除
  2. レンダリングするコンポーネントが map で描画しているか確認
  3. レスポンシブの列数（Tailwind の `grid-cols-*`）を維持

- セクション追加
  1. ページ（`app/page.tsx`）に「セクション用コンポーネント」を読み込み
  2. セクション自体は `components/` に新規作成
  3. スタイルは Tailwind を基本。必要な場合のみ `styles/` に限定的 CSS

## 4. 命名と重複防止（抜粋）

- クラス名：`<Component>-<role>` または BEM 風。接頭辞で衝突回避（例：`pl-`）
- 同名/同機能クラスの重複は禁止。追加前に横断検索
- 既存に近い UI は拡張 or 共通化を優先

## 5. レスポンシブの原則（抜粋）

- モバイルを基準に上書き（`sm`→`md`→`lg`）
- PC 専用の拡大や余白は `lg:` 以上で指定。モバイルは不変

## 6. 依存と設定

- パスエイリアス：`@/app`, `@/components`, `@/styles`, `@/data`, `@/hooks`, `@/lib`, `@/types`, `@/public`
- Tailwind：`content` に `app/`, `components/` を登録済み
- ESLint/TS：`any` は警告。段階的に型を強化

## 7. 作成テンプレ（推奨）

```tsx
// components/SectionTemplate.tsx
import React from "react";

interface SectionTemplateProps {
  title: string;
  children?: React.ReactNode;
}

export function SectionTemplate({ title, children }: SectionTemplateProps) {
  return (
    <section className="py-8 lg:py-12">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
```

このテンプレに沿って、セクション単位で追加していくと構造の一貫性を保てます。

## 8. トップページ構造詳細（AcceleratorHub）

### 8.1 ページ構成
```
app/page.tsx
├── Header.tsx (固定ヘッダー)
└── AcceleratorHub.tsx (メインUI - 円形加速器)
    ├── SearchBar.tsx (検索・フィルタ)
    ├── EnergyMeter.tsx (エネルギーゲージ)
    ├── StoryParticle.tsx (リング上の作品アイテム)
    └── StoryDetailModal.tsx (作品詳細モーダル)
```

### 8.2 主要コンポーネントの役割

#### `AcceleratorHub.tsx` (メインUI)
- **中央コア**: ロゴ + 発光エフェクト
- **エネルギーメーター**: 充電・加速状態の円形ゲージ
- **ジャンル・インジェクタ**: 円周上のジャンルボタン（7個）
- **オービット**: 3つのリング（内・中・外）に作品を配置
- **フィルタリング**: 検索・ジャンル・評価・ソート機能内蔵
- **状態管理**: `energyLevel`, `accelerationMode`, `selectedGenre` など

#### `Header.tsx` (固定ヘッダー)
- **ロゴ**: PLOTTRON + タグライン
- **ナビゲーション**: "Accelerate Discovery", "My Collection" ボタン
- **パワーコントロール**: STANDBY/ACTIVE モード切替
- **発光エフェクト**: ホバー時のエネルギー表示

#### `StoryParticle.tsx` (作品アイテム)
- **表示**: 円形の画像 + オーバーレイ情報
- **ホバー**: タイトル・著者・評価・ジャンル表示
- **クリック**: 詳細モーダルを開く
- **アニメーション**: エネルギー残量に応じた発光

#### `SearchBar.tsx` (検索・フィルタ)
- **展開式UI**: ボタンクリックで検索パネル表示
- **検索機能**: タイトル・著者・説明・ジャンルから検索
- **フィルタ**: ジャンル選択・最小評価・ソート順
- **リアルタイム**: 入力と同時にフィルタ適用

#### `StoryDetailModal.tsx` (詳細モーダル)
- **表示**: 画像 + 詳細情報（タイトル・著者・説明・評価・ジャンル）
- **アクション**: "Accelerate Reading", "Add to Collection", "Share Energy"
- **閉じる**: Esc キー・背景クリック・×ボタン
- **アニメーション**: フェードイン・スライドイン

#### `EnergyMeter.tsx` (エネルギーゲージ)
- **表示**: 円形プログレスバー + パーセンテージ
- **モード**: idle/charging/accelerating の状態表示
- **アニメーション**: パルス・スパーク・回転エフェクト

### 8.3 データ構造

#### `data/canvasData.ts`
```typescript
interface CanvasItem {
  id: string
  title: string
  coverImage: string
  author: string
  genre: string[]
  description: string
  rating: number
  status: 'ongoing' | 'completed' | 'hiatus'
  x: number, y: number
  size: 'small' | 'medium' | 'large'
  rotation: number
  imageWidth: number, imageHeight: number
}
```

### 8.4 よく触る変更ポイント

#### 作品データの追加・編集
- **ファイル**: `data/canvasData.ts`
- **項目**: タイトル・著者・ジャンル・説明・評価・画像パス
- **画像**: `public/hero/` に配置、パスを `coverImage` に設定

#### ジャンルの変更
- **ファイル**: `components/AcceleratorHub.tsx`
- **箇所**: `genres` 配列（7個のジャンルボタン）
- **影響**: インジェクタの配置・フィルタ機能

#### ヘッダーの文言・ロゴ
- **ファイル**: `components/Header.tsx`
- **箇所**: ロゴテキスト・タグライン・ナビボタン文言

#### 検索・フィルタ機能
- **ファイル**: `components/SearchBar.tsx` + `AcceleratorHub.tsx`
- **箇所**: 検索ロジック・フィルタ条件・ソート順

#### モーダルの項目・見た目
- **ファイル**: `components/StoryDetailModal.tsx`
- **箇所**: 表示項目・ボタン文言・レイアウト

#### 色・発光の全体トーン
- **ファイル**: `app/globals.css`
- **箇所**: CSS変数（`--energy-primary`, `--energy-secondary` など）

### 8.5 未使用コンポーネント（別案UI）

#### `InfiniteCanvas.tsx`
- **機能**: ドラッグで広い平面に画像を散りばめる
- **用途**: 別デザイン案（現状は AcceleratorHub がメイン）
- **差し替え**: `app/page.tsx` で `AcceleratorHub` → `InfiniteCanvas` へ変更可能

#### `DynamicASCIIBackground.tsx`
- **機能**: 動的ASCII背景（InfiniteCanvas 用）
- **用途**: 別デザイン案の背景エフェクト

### 8.6 レスポンシブ対応

#### ブレークポイント
- **モバイル**: 480px以下（1列グリッド）
- **タブレット**: 768px以下（2列グリッド）
- **デスクトップ**: 1024px以上（3列グリッド）

#### デバイス別調整
- **画像サイズ**: モバイルで縮小、PCで拡大
- **レイアウト**: グリッド列数・余白・フォントサイズ
- **インタラクション**: タッチ対応・ホバー無効化

### 8.7 パフォーマンス最適化

#### 画像最適化
- **Next.js Image**: 自動最適化・遅延読み込み
- **プレースホルダー**: ぼかし効果付き
- **サイズ調整**: デバイス別の最適サイズ

#### アニメーション
- **GPU加速**: `transform`, `opacity` を優先
- **will-change**: 必要な要素のみ指定
- **reduced-motion**: アクセシビリティ対応

### 8.8 アクセシビリティ

#### キーボード操作
- **フォーカス**: タブ順序・フォーカスリング
- **ショートカット**: Esc（モーダル閉じる）
- **スクリーンリーダー**: aria-label・role 属性

#### 色・コントラスト
- **高コントラスト**: `prefers-contrast: high` 対応
- **色覚異常**: 色だけでなく形状でも情報提供
- **フォーカス**: 視認可能なフォーカスリング
