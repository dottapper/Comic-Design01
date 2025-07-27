'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ロゴ・説明 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">PLOTTRON</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              次世代のコミックプラットフォーム。クリエイターと読者をつなぎ、
              新しいストーリー体験を提供します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <span className="text-sm">📷</span>
              </a>
            </div>
          </div>
          
          {/* リンク */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">作品を読む</a></li>
              <li><a href="#" className="hover:text-white transition-colors">作品を投稿</a></li>
              <li><a href="#" className="hover:text-white transition-colors">クリエイター登録</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プレミアム</a></li>
            </ul>
          </div>
          
          {/* サポート */}
          <div>
            <h4 className="text-lg font-semibold mb-4">サポート</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">ヘルプセンター</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
        
        {/* 区切り線 */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PLOTTRON. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for creators and readers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}