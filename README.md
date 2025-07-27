# PLOTTRON Comic Site

アニメーションロゴと Hero 画像ギャラリーを含むコミックサイトの最小セットです。

## 構成

- **ロゴアニメーション**: ネオングリッチマシュマロ風の PLOTTRON ロゴ
- **Hero ギャラリー**: 7 枚の画像をグリッドレイアウトで表示
- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応

## ファイル構成

```
comic-site-Design01/
├── index.html              # メインHTMLファイル
├── styles/
│   └── main.css           # メインCSSファイル
├── scripts/
│   └── main.js            # メインJavaScriptファイル
├── images/                # Hero画像（7枚）
│   ├── main01.png
│   ├── main02.png
│   ├── main03.png
│   ├── main04.png
│   ├── main05.png
│   ├── main06.png
│   └── main07.jpg
└── title/                 # ロゴアニメーションのバリエーション
```

## セットアップ

1. リポジトリをクローンまたはダウンロード
2. `index.html`をブラウザで開く
3. ローカルサーバーで実行する場合：

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server

   # PHP
   php -S localhost:8000
   ```

## 機能

### ロゴアニメーション

- ホバー時のグリッチエフェクト
- マシュマロ風の柔らかいグロー効果
- スキャンラインアニメーション

### Hero ギャラリー

- グリッドレイアウト
- ホバー時の拡大・浮上エフェクト
- スクロール時のフェードインアニメーション

### レスポンシブ対応

- デスクトップ: 3 列グリッド
- タブレット: 2 列グリッド
- モバイル: 1 列グリッド

## 技術仕様

- **HTML5**: セマンティックマークアップ
- **CSS3**: Flexbox, Grid, アニメーション
- **JavaScript**: ES6+, Intersection Observer API
- **フォント**: Google Fonts (Fredoka One, Bubblegum Sans, etc.)

## ブラウザ対応

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 開発者向け

### ロゴアニメーションのカスタマイズ

`styles/main.css`の`.plottron-logo`セクションを編集

### 画像の追加・変更

`images/`フォルダに画像を追加し、`index.html`の`hero-gallery`セクションを更新

### アニメーションの調整

CSS の`@keyframes`セクションと JavaScript の`observerOptions`を調整

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
