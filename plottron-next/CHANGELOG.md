# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- プロジェクト構造ガイド（PROJECT_STRUCTURE.md）
- デザイン保全ルール（DESIGN_RULES.md）
- PRテンプレート（.github/PULL_REQUEST_TEMPLATE.md）
- トップページ構造詳細ドキュメント

### Changed
- フォルダ名変更: `images/` → `original-assets/`
- パスエイリアス拡充（tsconfig.json）

### Fixed
- ESLint設定の調整（any型警告をwarnに変更）
- TypeScriptコンパイルエラーの解決

## [1.0.0] - 2025-01-27

### Added
- **AcceleratorHub**: 円形加速器UI（メインコンポーネント）
  - 中央コア（ロゴ + 発光エフェクト）
  - エネルギーメーター（充電・加速状態表示）
  - ジャンル・インジェクタ（7個のジャンルボタン）
  - オービット（3つのリングに作品配置）
  - フィルタリング機能（検索・ジャンル・評価・ソート）

- **Header**: 固定ヘッダー
  - PLOTTRONロゴ + タグライン
  - ナビゲーションボタン（Accelerate Discovery, My Collection）
  - パワーコントロール（STANDBY/ACTIVEモード切替）
  - 発光エフェクト

- **StoryParticle**: 作品アイテム
  - 円形画像表示
  - ホバー時の詳細情報表示
  - クリックでモーダル開く
  - エネルギー残量に応じた発光

- **SearchBar**: 検索・フィルタ
  - 展開式UI
  - リアルタイム検索
  - ジャンル・評価・ソートフィルタ

- **StoryDetailModal**: 作品詳細モーダル
  - 画像 + 詳細情報表示
  - アクションボタン（Accelerate Reading, Add to Collection, Share Energy）
  - キーボード・マウス操作対応

- **EnergyMeter**: エネルギーゲージ
  - 円形プログレスバー
  - モード表示（idle/charging/accelerating）
  - アニメーション効果

### Technical
- Next.js 15.4.4 + React 19.1.0
- TypeScript + Tailwind CSS
- Framer Motion（アニメーション）
- レスポンシブデザイン対応
- アクセシビリティ対応
- パフォーマンス最適化

### Data
- 13作品のサンプルデータ（canvasData.ts）
- 画像最適化（Next.js Image）
- 動的サイズ計算

### Styling
- エネルギー系カラーパレット（シアン・オレンジ・アンバー）
- 発光・パルス・スパークエフェクト
- モバイルファーストレスポンシブ
- 高コントラストモード対応

---

## Version History

### v1.0.0 (2025-01-27)
- 初回リリース
- AcceleratorHub UI完成
- 基本機能実装完了

### v0.1.0 (開発版)
- プロトタイプ段階
- 基本コンポーネント実装

---

## バージョン管理ルール

### セマンティックバージョニング
- **MAJOR**: 破壊的変更（API変更、デザイン大幅変更）
- **MINOR**: 新機能追加（後方互換性あり）
- **PATCH**: バグ修正・軽微な改善

### リリース手順
1. 機能開発完了
2. テスト・レビュー
3. バージョン番号更新（package.json）
4. CHANGELOG.md更新
5. Gitタグ作成
6. デプロイ

### 変更記録の書き方
- **Added**: 新機能
- **Changed**: 既存機能の変更
- **Deprecated**: 非推奨機能
- **Removed**: 削除された機能
- **Fixed**: バグ修正
- **Security**: セキュリティ修正
