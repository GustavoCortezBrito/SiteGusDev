import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-400">
          <a href="/#Hero" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="/#about" className="hover:text-purple-400 transition">
            Sobre
          </a>
          <a href="/#services" className="hover:text-purple-400 transition">
            Serviços
          </a>
          <a href="/#projects" className="hover:text-purple-400 transition">
            Projetos
          </a>
          <a href="/#contact" className="hover:text-purple-400 transition">
            Contato
          </a>
          <a 
            href="https://www.instagram.com/gustavocortez.dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Gustavo Cortez • Feito com <FaHeart className="text-red-500" /> e muito código
          </p>
        </div>
      </div>
    </footer>
  );
}
