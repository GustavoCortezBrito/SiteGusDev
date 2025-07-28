import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-4 text-white">
      {/* Texto */}
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-4xl font-bold mb-4">Oi! Eu sou o Gustavo Cortez 👨‍💻</h1>
        <p className="text-lg leading-relaxed">
          Estudo Sistemas de Informação na UFSC e foi lá que descobri minha paixão por desenvolvimento web <br/> principalmente front-end e SEO.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Hoje estou cursando Medicina na UNOESTE, mas continuo programando por hobby (e pra alguns freelas também 🚀).
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Se você precisa de um site bonito, rápido e bem ranqueado no Google, bora conversar!
        </p>

        {/* Botões */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <Button link="#contact" title="Vamos conversar" isEnhanced={true} />
          <a href="#projects" className="border hover:scale-95 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Ver projetos
          </a>
        </div>
      </div>

      {/* Imagem circular */}
      <div className="w-72 h-72 transition-all duration-200 hover:scale-110 hover:cursor-pointer rounded-full border-4 border-white overflow-hidden relative shadow-lg">
        <Image
          src="/GustavoCortezDev.jpg"
          alt="Foto do Dev"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
``
