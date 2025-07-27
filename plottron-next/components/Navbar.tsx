'use client';

import { useState } from 'react';
import AnimatedLogo from './AnimatedLogo';
import AnimatedLogoNeon from './AnimatedLogoNeon';

export default function Navbar() {
  const [logoType, setLogoType] = useState<'comic' | 'neon'>('comic');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-gray-900/20">
      {/* ロゴ */}
      <div className="flex items-center">
        {logoType === 'comic' ? <AnimatedLogo /> : <AnimatedLogoNeon />}
      </div>

      {/* ナビリンク */}
      <div className="hidden md:flex gap-6 uppercase text-sm text-white">
        <a href="#works" className="hover:text-purple-400 transition-colors">Works</a>
        <a href="#creators" className="hover:text-purple-400 transition-colors">Creators</a>
        <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
      </div>

      {/* ロゴ切り替えボタン */}
      <div className="flex gap-2">
        <button
          onClick={() => setLogoType('comic')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            logoType === 'comic' 
              ? 'bg-purple-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Comic
        </button>
        <button
          onClick={() => setLogoType('neon')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            logoType === 'neon' 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Neon
        </button>
      </div>
    </nav>
  );
}