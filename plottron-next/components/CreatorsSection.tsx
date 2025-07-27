'use client';

export default function CreatorsSection() {
  const creators = [
    {
      id: 1,
      name: "Alex Chen",
      specialty: "サイバーパンク",
      followers: "12.5K",
      works: 8,
      avatar: "🎨",
      bio: "未来的な世界観を得意とするデジタルアーティスト"
    },
    {
      id: 2,
      name: "Maria Santos",
      specialty: "ファンタジー",
      followers: "18.2K",
      works: 12,
      avatar: "🌟",
      bio: "幻想的な世界を描くストーリーテラー"
    },
    {
      id: 3,
      name: "Takeshi Yamada",
      specialty: "ホラー",
      followers: "9.8K",
      works: 6,
      avatar: "👻",
      bio: "心理的恐怖を巧みに表現するクリエイター"
    },
    {
      id: 4,
      name: "Emma Johnson",
      specialty: "アドベンチャー",
      followers: "15.7K",
      works: 10,
      avatar: "🚀",
      bio: "壮大な冒険物語の専門家"
    }
  ];

  return (
    <section id="creators" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            トップクリエイター
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PLOTTRONで活躍するクリエイターたち。それぞれが独自の世界観を持っています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator) => (
            <div key={creator.id} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {creator.avatar}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {creator.name}
                </h3>
                
                <p className="text-purple-600 font-semibold mb-3">
                  {creator.specialty}
                </p>
                
                <p className="text-gray-600 text-sm mb-4">
                  {creator.bio}
                </p>
                
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div>
                    <div className="font-semibold text-gray-900">{creator.followers}</div>
                    <div>フォロワー</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{creator.works}</div>
                    <div>作品数</div>
                  </div>
                </div>
                
                <button className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
                  フォローする
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
            すべてのクリエイターを見る
          </button>
        </div>
      </div>
    </section>
  );
}