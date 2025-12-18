import { FaExternalLinkAlt, FaBolt, FaBuilding, FaGlobe } from "react-icons/fa";

// Componente para imagem do projeto
function ProjectImage({ title }: { title: string }) {
  // Ícones e cores temáticas para cada projeto
  const getProjectFallback = (title: string) => {
    if (title.includes('Eletro')) {
      return {
        icon: <FaBolt className="text-yellow-400 text-6xl" />,
        gradient: 'from-yellow-900/30 to-orange-900/30',
        color: 'text-yellow-400'
      };
    }
    if (title.includes('Li Hai')) {
      return {
        icon: <FaBuilding className="text-yellow-400 text-6xl" />,
        gradient: 'from-yellow-900/30 to-orange-900/30',
        color: 'text-yellow-400'
      };
    }
    if (title.includes('Ambitus')) {
      return {
        icon: <FaGlobe className="text-green-600 text-6xl" />,
        gradient: 'from-green-900/30 to-green-800/30',
        color: 'text-green-600'
      };
    }
    return {
      icon: <FaBuilding className="text-purple-400 text-6xl" />,
      gradient: 'from-purple-900/30 to-pink-900/30',
      color: 'text-purple-400'
    };
  };

  const fallback = getProjectFallback(title);

  // Sempre usar fallback (sem tentar carregar imagens que não existem)
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${fallback.gradient} text-white relative overflow-hidden`}>
      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        {fallback.icon}
        <h3 className={`text-xl font-bold mt-4 ${fallback.color}`}>{title}</h3>
      </div>
      
      {/* Efeito decorativo */}
      <div className="absolute top-4 right-4 opacity-20">
        <FaExternalLinkAlt className="text-2xl" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center text-white w-full px-6">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projetos que Geraram Resultados</h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto text-lg">
          Cada projeto é uma história de sucesso. Sites que não apenas impressionam, 
          mas <span className="text-green-400 font-semibold">aumentaram as vendas</span> dos meus clientes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Eletro Soluções */}
          <ProjectCard
            title="Eletro Soluções"
            description="Transformei uma empresa local em referência regional. Site otimizado que aumentou em 300% as consultas online para projetos de energia solar."
            tags={["Energia Solar", "SEO Local", "Conversão"]}
            liveUrl="https://eletrosolucoes.com.br/"
          />

          {/* Li Hai */}
          <ProjectCard
            title="Li Hai"
            description="Consultoria que precisava transmitir confiança. Criei uma identidade digital elegante que dobrou o número de clientes corporativos."
            tags={["Consultoria", "Branding", "B2B"]}
            liveUrl="https://lihai.com.br/"
          />

          {/* Ambitus Global */}
          <ProjectCard
            title="Ambitus Global"
            description="Startup de tecnologia sustentável que conquistou investidores. Site internacional que comunica inovação e credibilidade."
            tags={["Startup", "Sustentabilidade", "Global"]}
            liveUrl="https://www.ambitusglobal.com/"
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            <span className="text-purple-400 font-bold">Próximo sucesso: o seu projeto!</span><br/>
            Vamos criar algo que seus clientes nunca vão esquecer?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition hover:scale-105 shadow-lg shadow-purple-500/20"
          >
            Quero resultados assim
          </a>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
}

function ProjectCard({ title, description, tags, liveUrl }: ProjectCardProps) {
  const handleCardClick = () => {
    window.open(liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleCardClick}
      className="bg-[#1c1c1c] border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all hover:scale-105 flex flex-col h-full cursor-pointer"
    >
      {/* Imagem do projeto */}
      <div className="relative w-full h-52 bg-gray-800 overflow-hidden group">
        <ProjectImage title={title} />
      </div>

      {/* Conteúdo */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-purple-500/20 text-purple-300 px-3 py-2 rounded-full border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <div>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-6 py-3 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition font-medium"
            onClick={(e) => e.stopPropagation()} // Evita duplo clique
          >
            <FaExternalLinkAlt /> Visitar site
          </a>
        </div>
      </div>
    </div>
  );
}
