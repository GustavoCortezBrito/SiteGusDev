import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center px-6 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Projetos em Destaque</h2>
      <p className="text-gray-400 text-center mb-10 max-w-2xl">
        Alguns dos trabalhos que desenvolvi. Sites rápidos, bonitos e otimizados para conversão.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Eletro Soluções */}
        <ProjectCard
          title="Eletro Soluções"
          description="Site institucional completo para empresa de soluções elétricas. Design profissional com foco em conversão e experiência do usuário."
          tags={["Web Design", "SEO", "Responsivo"]}
          image="/eletrosolucoes.jpg"
          liveUrl="https://eletrosolucoes.com.br/"
        />

        {/* Li Hai */}
        <ProjectCard
          title="Li Hai"
          description="Site moderno e elegante para empresa de consultoria. Interface clean com navegação intuitiva e otimização para performance."
          tags={["Design Moderno", "Performance", "UX"]}
          image="/lihai.jpg"
          liveUrl="https://lihai.com.br/"
        />

        {/* Ambitus Global */}
        <ProjectCard
          title="Ambitus Global"
          description="Website corporativo internacional com design sofisticado. Foco em credibilidade e presença global da marca."
          tags={["Corporativo", "Internacional", "SEO"]}
          image="/ambitus.jpg"
          liveUrl="https://www.ambitusglobal.com/"
        />
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Gostou do que viu? Vamos criar algo incrível juntos!</p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition hover:scale-105"
        >
          Iniciar meu projeto
        </a>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
}

function ProjectCard({ title, description, tags, image, liveUrl }: ProjectCardProps) {
  return (
    <div className="bg-[#1c1c1c] border border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all hover:scale-105 flex flex-col">
      {/* Imagem do projeto */}
      <div className="relative w-full h-48 bg-gray-800 overflow-hidden group">
        <img
          src={`https://image.thum.io/get/width/600/crop/400/noanimate/${liveUrl}`}
          alt={`Screenshot de ${title}`}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full flex items-center justify-center text-gray-600 bg-gradient-to-br from-purple-900/20 to-pink-900/20';
              fallback.innerHTML = `<div class="text-center"><div class="text-3xl mb-2">🌐</div><span class="text-sm">${title}</span></div>`;
              parent.appendChild(fallback);
            }
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30"
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
            className="inline-flex items-center gap-2 text-sm bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full border border-purple-500/30 hover:bg-purple-500/30 transition"
          >
            <FaExternalLinkAlt /> Visitar site
          </a>
        </div>
      </div>
    </div>
  );
}
