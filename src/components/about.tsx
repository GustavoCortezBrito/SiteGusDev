import { FaHeart, FaCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section 
      id="about" 
      className="flex flex-col items-center justify-center text-white w-full px-6"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" itemProp="headline">Por que escolher meu trabalho?</h2>
        
        {/* Texto principal */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Sou <span className="font-bold text-white">Gustavo Cortez de Brito</span>, e minha história é única: 
            estudei <span className="font-bold text-white">Sistemas de Informação na UFSC</span> e atualmente 
            curso <span className="font-bold text-white">Medicina na UNOESTE</span>.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Essa combinação me dá uma visão diferenciada: <span className="font-bold text-white">precisão técnica</span> 
            da medicina e <span className="font-bold text-white">criatividade tecnológica</span> do desenvolvimento. 
            Resultado? Sites que não apenas impressionam, mas <span className="font-bold text-white">geram resultados reais</span> 
            para o seu negócio.
          </p>
        </div>

        {/* Cards de valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ValueCard
            icon={<FaHeart className="text-red-400" />}
            title="Cuidado com Detalhes"
            description="Formação médica me ensinou precisão. Cada pixel, cada linha de código é pensada para entregar a melhor experiência."
          />
          <ValueCard
            icon={<FaCode className="text-blue-400" />}
            title="Tecnologia de Ponta"
            description="Sempre atualizado com as últimas tendências. React, Next.js, SEO avançado - seu site sempre moderno."
          />
          <ValueCard
            icon={<FaLightbulb className="text-yellow-400" />}
            title="Visão de Negócio"
            description="Não faço apenas sites bonitos. Crio ferramentas que atraem clientes e aumentam suas vendas."
          />
        </div>

        {/* Conclusão */}
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-bold text-white">Resultado garantido:</span> Sites que carregam em menos de 3 segundos, 
            aparecem no Google e <span className="font-bold text-white">convertem visitantes em clientes</span>. 
            Sua presença digital merece o melhor! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#1c1c1c] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all hover:scale-105 text-center h-full">
      <div className="text-5xl mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
