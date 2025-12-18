'use client';

import { useState } from "react";
import Link from "next/link";
import Button from "./button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para fechar o menu mobile
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#111111]/95 backdrop-blur-sm text-white fixed top-0 left-0 z-[9999] shadow-lg border-b border-gray-800">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          Gustavo Cortez Dev
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-base">
          <Button link="/#Hero" title="Home" />
          <Button link="/#about" title="Sobre" />
          <Button link="/#education" title="Formação" />
          <Button link="/#skills" title="Skills" />
          <Button link="/#services" title="Serviços" />
          <Button link="/#projects" title="Projetos" />
          <Button link="/#contact" title="Contato" isEnhanced />
        </nav>

        {/* Tablet Menu - Simplified */}
        <nav className="hidden md:flex lg:hidden items-center gap-4 text-sm">
          <Button link="/#about" title="Sobre" />
          <Button link="/#services" title="Serviços" />
          <Button link="/#projects" title="Projetos" />
          <Button link="/#contact" title="Contato" isEnhanced />
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 py-4 lg:hidden bg-[#111111] text-lg border-t border-white/10">
          <Link href="/#Hero" onClick={closeMenu} className="px-4 py-2 text-white hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/#about" onClick={closeMenu} className="px-4 py-2 text-white hover:text-purple-400 transition">
            Sobre
          </Link>
          <Link href="/#education" onClick={closeMenu} className="px-4 py-2 text-white hover:text-purple-400 transition">
            Formação
          </Link>
          <Link href="/#skills" onClick={closeMenu} className="px-4 py-2 text-white hover:text-purple-400 transition">
            Skills
          </Link>
          <Link href="/#services" onClick={closeMenu} className="px-4 py-2 text-white hover:text-purple-400 transition">
            Serviços
          </Link>
          <Link href="/#projects" onClick={closeMenu} className="px-4 py-2 text-white hover:text-purple-400 transition">
            Projetos
          </Link>
          <Link 
            href="/#contact" 
            onClick={closeMenu} 
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:opacity-90 transition font-semibold"
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}
