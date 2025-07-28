'use client';

import { useState } from "react";
import Button from "./button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-white bg-[#111111] text-white fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold cursor-pointer">
          Gustavo Cortez Dev
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-xl">
          <Button link="/#Hero" title="Home" />
          <Button link="/#skills" title="Habilidades" />
          <Button link="/#about" title="Sobre" />
          <Button link="/#contact" title="Contato" isEnhanced />
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
        <div className="flex flex-col items-center gap-4 py-4 md:hidden bg-[#111111] text-xl border-t border-white/10">
          <Button link="/#Hero" title="Home" />
          <Button link="/#skills" title="Habilidades" />
          <Button link="/#about" title="Sobre" />
          <Button link="/#contact" title="Contato" isEnhanced />
        </div>
      )}
    </header>
  );
}
