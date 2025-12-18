'use client';

import { useState } from "react";
import Button from "./button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Button link="/#Hero" title="Home" />
          <Button link="/#about" title="Sobre" />
          <Button link="/#education" title="Formação" />
          <Button link="/#skills" title="Skills" />
          <Button link="/#services" title="Serviços" />
          <Button link="/#projects" title="Projetos" />
          <Button link="/#contact" title="Contato" isEnhanced />
        </div>
      )}
    </header>
  );
}
