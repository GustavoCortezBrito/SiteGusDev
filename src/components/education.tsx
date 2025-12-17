import { FaGraduationCap, FaUserMd, FaLaptopCode } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="flex flex-col items-center justify-center px-6 text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Formação Acadêmica</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* Medicina */}
        <div className="bg-[#1c1c1c] border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:scale-105">
          <div className="flex items-center gap-4 mb-4">
            <FaUserMd className="text-5xl text-red-400" />
            <div>
              <h3 className="text-2xl font-bold">Medicina</h3>
              <p className="text-gray-400">UNOESTE</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Atualmente cursando Medicina, onde desenvolvo minha paixão pela área da saúde e pelo cuidado com as pessoas.
            Busco unir conhecimento médico com tecnologia para criar soluções inovadoras.
          </p>
        </div>

        {/* Sistemas de Informação */}
        <div className="bg-[#1c1c1c] border border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-all hover:scale-105">
          <div className="flex items-center gap-4 mb-4">
            <FaLaptopCode className="text-5xl text-blue-400" />
            <div>
              <h3 className="text-2xl font-bold">Sistemas de Informação</h3>
              <p className="text-gray-400">UFSC</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Foi na UFSC que descobri minha paixão por desenvolvimento web, front-end e SEO.
            Aprendi a criar soluções digitais eficientes e com foco em experiência do usuário.
          </p>
        </div>
      </div>

      {/* Diferencial */}
      <div className="mt-10 max-w-3xl text-center">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-6">
          <FaGraduationCap className="text-4xl text-purple-400 mx-auto mb-3" />
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-purple-400">Meu diferencial:</span> Uno conhecimentos em tecnologia e saúde para criar 
            soluções digitais simples, modernas e eficientes, com foco em boa experiência do usuário, 
            design limpo, performance e clareza na comunicação.
          </p>
        </div>
      </div>
    </section>
  );
}
