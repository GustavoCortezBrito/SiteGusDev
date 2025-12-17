import { FaHeart, FaCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center px-6 text-white">
      <div className="max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Um pouco sobre mim</h2>
        
        {/* Texto principal */}
        <div className="text-center mb-10">
          <p className="text-lg leading-relaxed">
            Meu nome é <span className="font-bold text-purple-400">Gustavo Cortez de Brito</span> e minha jornada começou na UFSC, 
            onde cursei Sistemas de Informação. Foi lá que descobri o quanto gosto de desenvolvimento web — 
            especialmente front-end e SEO.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Hoje, sigo minha formação em <span className="font-bold text-red-400">Medicina pela UNOESTE</span>, 
            mas continuo conectado com a tecnologia sempre que posso. A programação virou mais do que uma habilidade — 
            é um hobby que me inspira e que aplico em freelas para empresas e pessoas que querem marcar presença online.
          </p>
        </div>

        {/* Cards de valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ValueCard
            icon={<FaHeart className="text-red-400" />}
            title="Paixão pela Saúde"
            description="Grande afinidade com a área médica, buscando sempre o cuidado e bem-estar das pessoas."
          />
          <ValueCard
            icon={<FaCode className="text-blue-400" />}
            title="Amor por Código"
            description="Desenvolvimento web é meu hobby favorito. Criar sites bonitos e funcionais me motiva."
          />
          <ValueCard
            icon={<FaLightbulb className="text-yellow-400" />}
            title="Soluções Criativas"
            description="Uno tecnologia e saúde para criar soluções digitais simples, modernas e eficientes."
          />
        </div>

        {/* Conclusão */}
        <div className="text-center bg-[#1c1c1c] border border-gray-700 rounded-lg p-6">
          <p className="text-lg leading-relaxed">
            Se você busca alguém <span className="font-bold text-purple-400">comprometido, criativo</span> e 
            que entrega com foco em <span className="font-bold text-purple-400">qualidade, performance e boa experiência do usuário</span>, 
            estou aqui pra ajudar! 🚀
          </p>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#1c1c1c] border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:scale-105 text-center">
      <div className="text-4xl mb-3 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
