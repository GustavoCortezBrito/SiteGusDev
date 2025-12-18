import { FaCode, FaSearch, FaMobile, FaRocket } from "react-icons/fa";

export default function Services() {
  return (
    <section id="services" className="flex flex-col items-center justify-center text-white w-full">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Como posso transformar seu negócio</h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto text-lg">
          Especializado em criar presenças digitais que <span className="text-purple-400 font-semibold">geram resultados</span>. 
          Cada projeto é único e focado em <span className="text-green-400 font-semibold">aumentar suas vendas</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Sites Institucionais */}
          <ServiceCard
            icon={<FaCode className="text-blue-400" />}
            title="Sites que Impressionam"
            description="Sites institucionais modernos que transmitem credibilidade e profissionalismo. Seu cliente vai lembrar de você."
          />

          {/* Landing Pages */}
          <ServiceCard
            icon={<FaRocket className="text-purple-400" />}
            title="Landing Pages que Vendem"
            description="Páginas focadas em conversão. Cada elemento é estrategicamente posicionado para transformar visitantes em clientes."
          />

          {/* SEO */}
          <ServiceCard
            icon={<FaSearch className="text-green-400" />}
            title="SEO que Funciona"
            description="Seu site na primeira página do Google. Mais visibilidade = mais clientes encontrando seu negócio."
          />

          {/* Design Responsivo */}
          <ServiceCard
            icon={<FaMobile className="text-pink-400" />}
            title="Perfeito em Qualquer Tela"
            description="Design responsivo que funciona perfeitamente no celular, tablet e desktop. Seus clientes sempre terão a melhor experiência."
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg md:text-xl mb-6">
            <span className="text-purple-400 font-bold">Seu concorrente já tem um site profissional.</span><br/>
            Não deixe ele sair na frente!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Quero meu site agora
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#1c1c1c] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all hover:scale-105 flex flex-col items-center text-center h-full">
      <div className="text-6xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
    </div>
  );
}
