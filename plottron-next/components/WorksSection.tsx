'use client';

import Image from 'next/image';

export default function WorksSection() {
  const works = [
    {
      id: 1,
      title: "Digital Dreams",
      creator: "Alex Chen",
      genre: "SF",
      image: "/hero/hero-01.webp",
      description: "未来の東京を舞台にしたサイバーパンク作品"
    },
    {
      id: 2,
      title: "Forest Tales",
      creator: "Maria Santos",
      genre: "Fantasy",
      image: "/hero/hero-02.webp", 
      description: "魔法の森に住む精霊たちの物語"
    },
    {
      id: 3,
      title: "Urban Legends",
      creator: "Takeshi Yamada",
      genre: "Horror",
      image: "/hero/hero-03.webp",
      description: "現代の都市で起こる不可思議な現象"
    },
    {
      id: 4,
      title: "Space Odyssey",
      creator: "Emma Johnson",
      genre: "Adventure",
      image: "/hero/hero-04.webp",
      description: "宇宙を舞台にした壮大な冒険物語"
    },
    {
      id: 5,
      title: "Neon Nights",
      creator: "Hiroshi Sato",
      genre: "Drama",
      image: "/hero/hero-05.webp",
      description: "ネオンサインが輝く夜の街の人間ドラマ"
    },
    {
      id: 6,
      title: "Ancient Mysteries",
      creator: "Sophie Laurent",
      genre: "Mystery",
      image: "/hero/hero-06.webp",
      description: "古代文明に隠された謎を解く考古学者の物語"
    }
  ];

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            注目の作品
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            PLOTTRONで人気の作品をご紹介。多様なジャンルの作品が揃っています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full">
                      {work.genre}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {work.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    {work.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <span>by {work.creator}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
            すべての作品を見る
          </button>
        </div>
      </div>
    </section>
  );
}