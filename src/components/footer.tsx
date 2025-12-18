import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-400">
          <Link href="/#Hero" className="hover:text-purple-400 transition">
            Home
          </Link>
          <Link href="/#about" className="hover:text-purple-400 transition">
            Sobre
          </Link>
          <Link href="/#services" className="hover:text-purple-400 transition">
            Serviços
          </Link>
          <Link href="/#projects" className="hover:text-purple-400 transition">
            Projetos
          </Link>
          <Link href="/#contact" className="hover:text-purple-400 transition">
            Contato
          </Link>
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
          <p className="mb-2">
            © {new Date().getFullYear()} Gustavo Cortez. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a 
              href="https://www.instagram.com/gustavocortez.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-purple-400 transition"
            >
              Gustavo Cortez de Brito
            </a>
            <a 
              href="https://www.instagram.com/gustavocortez.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white ml-1 hover:text-purple-400 transition"
            >
              ©
            </a>
            , Dev Web
          </p>
        </div>
      </div>
    </footer>
  );
}
