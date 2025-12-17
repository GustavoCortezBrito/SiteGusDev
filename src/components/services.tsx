import { FaCode, FaSearch, FaMobile, FaRocket } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center justify-center px-6 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">O que eu faço</h2>
      <p className="text-gray-400 text-center mb-10 max-w-2xl">
        Trabalho com freelas criando sites e landing pages que convertem. 
        Foco em qualidade, performance e resultados reais para o seu negócio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {/* Sites Institucionais */}
        <ServiceCard
          icon={<FaCode className="text-blue-400" />}
          title="Sites Institucionais"
          description="Sites profissionais para empresas e profissionais que querem marcar presença online com credibilidade."
        />

        {/* Landing Pages */}
        <ServiceCard
          icon={<FaRocket className="text-purple-400" />}
          title="Landing Pages"
          description="Páginas de conversão otimizadas para capturar leads e vender seus produtos ou serviços."
        />

        {/* SEO */}
        <ServiceCard
          icon={<FaSearch className="text-green-400" />}
          title="Otimização SEO"
          description="Sites bem ranqueados no Google para você ser encontrado pelos seus clientes."
        />

        {/* Design Responsivo */}
        <ServiceCard
          icon={<FaMobile className="text-pink-400" />}
          title="Design Responsivo"
          description="Sites que funcionam perfeitamente em qualquer dispositivo: celular, tablet ou desktop."
        />
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">Pronto para tirar seu projeto do papel?</p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition hover:scale-105"
        >
          Vamos conversar sobre seu projeto
        </a>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#1c1c1c] border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:scale-105 flex flex-col items-center text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
