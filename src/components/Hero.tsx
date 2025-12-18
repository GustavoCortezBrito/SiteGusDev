import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <section 
      className="flex flex-col items-center justify-center text-white w-full px-6"
      itemScope 
      itemType="https://schema.org/Person"
    >
      <div className="max-w-7xl w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          {/* Texto */}
          <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
          Transformo ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">sites que vendem</span> 🚀
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300" itemProp="description">
          Sou <span itemProp="name">Gustavo Cortez</span>, <span itemProp="jobTitle">desenvolvedor web</span> especializado em criar sites modernos, rápidos e otimizados para SEO.
        </p>
        <p className="text-lg leading-relaxed mt-4 text-gray-400">
          Estudante de <span itemProp="studiesAt">Medicina na UNOESTE</span> com sólida experiência em <span itemProp="alumniOf">Sistemas de Informação pela UFSC</span>. Uno tecnologia e criatividade para entregar resultados reais.
        </p>

        {/* Botões */}
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <Button link="#contact" title="Iniciar meu projeto" isEnhanced={true} />
          <a 
            href="#projects" 
            className="border hover:scale-95 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            aria-label="Ver portfólio de projetos desenvolvidos"
          >
            Ver portfólio
          </a>
        </div>
      </div>

          {/* Imagem circular */}
          <div className="w-72 h-72 transition-all duration-200 hover:scale-110 hover:cursor-pointer rounded-full border-4 border-white overflow-hidden relative shadow-lg">
            <Image
              src="/GustavoCortezDev.jpg"
              alt="Gustavo Cortez - Desenvolvedor Web e Estudante de Medicina"
              fill
              className="object-cover"
              itemProp="image"
              priority
              sizes="(max-width: 768px) 288px, 288px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
