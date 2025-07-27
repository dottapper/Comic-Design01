'use client';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Comic Creation
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          PLOTTRONで新しいコミック体験を。クリエイターとファンをつなぐ、
          次世代のコミックプラットフォーム。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            作品を探す
          </button>
          <button className="px-8 py-4 border border-gray-400 text-gray-300 font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
            クリエイターになる
          </button>
        </div>
        
        {/* 統計情報 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-400">作品数</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">クリエイター</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">読者</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">サポート</div>
          </div>
        </div>
      </div>
      
      {/* 浮遊する要素 */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
    </section>
  );
}