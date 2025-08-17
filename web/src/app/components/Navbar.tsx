// src/app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full px-4 sm:px-8 py-6 z-50 flex items-center justify-between">
        {/* Lado Esquerdo: N & M */}
        <div className="text-white font-montserrat font-bold text-3xl [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)]">
          <Link href="#home">N & M</Link>
        </div>

        {/* Lado Direito: Links de Navegação (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)]">
          <Link href="#about" className="text-lg hover:text-gray-300 font-montserrat font-medium transition-colors">
            Sobre nós
          </Link>
          <Link href="#gifts" className="text-lg hover:text-gray-300 font-montserrat font-medium transition-colors">
            Presentes
          </Link>
          <Link href="#place" className="text-lg hover:text-gray-300 font-montserrat font-medium transition-colors">
            Local e Data
          </Link>
        </div>

        {/* Botão de Menu (Mobile) */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Overlay (Mobile) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 gap-8">
          <Link href="#home" className="text-2xl font-medium text-gray-800 hover:text-gray-500" onClick={handleLinkClick}>
            Início
          </Link>
          <Link href="#about" className="text-2xl font-medium text-gray-800 hover:text-gray-500" onClick={handleLinkClick}>
            Sobre nós
          </Link>
          <Link href="#gifts" className="text-2xl font-medium text-gray-800 hover:text-gray-500" onClick={handleLinkClick}>
            Presentes
          </Link>
          <Link href="#place" className="text-2xl font-medium text-gray-800 hover:text-gray-500" onClick={handleLinkClick}>
            Local e Data
          </Link>
        </div>
      </div>
    </>
  );
}