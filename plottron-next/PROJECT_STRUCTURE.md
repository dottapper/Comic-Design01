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

パスエイリアス（`@/components/` 等）は `tsconfig.json` に設定済み。`import` は相対ではなくエイリアスを推奨。

## 2. 役割の分離

- ページ（`app/`）は「配置とデータ受け渡し」に限定
- 見た目・振る舞いは「コンポーネント（`components/`）」へ集約
- 定数・外部データは「`data/`」から注入し、UI 直書きを避ける
- 複数コンポーネントで使う状態/処理は「`hooks/` or `lib/`」へ抽出

## 3. よくある更新の手順

- 画像の差し替え
  1. `public/hero/` 等に画像を追加
  2. 該当データ（例: `data/canvasData.ts`）のパスを更新
  3. UI コンポーネントの `img`/`Image` の参照を確認

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
