import { FaGraduationCap, FaUserMd, FaLaptopCode } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="flex flex-col items-center justify-center text-white w-full px-6">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Formação que Faz a Diferença</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Medicina */}
          <div className="bg-[#1c1c1c] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all hover:scale-105">
            <div className="flex items-center gap-6 mb-6">
              <FaUserMd className="text-6xl text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">Medicina</h3>
                <p className="text-gray-400 text-lg">UNOESTE</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              A medicina me ensina <span className="text-red-400 font-semibold">precisão, cuidado e atenção aos detalhes</span>. 
              Cada diagnóstico precisa ser certeiro - assim como cada linha de código no seu site.
            </p>
          </div>

          {/* Sistemas de Informação */}
          <div className="bg-[#1c1c1c] border border-gray-700 rounded-xl p-8 hover:border-purple-500 transition-all hover:scale-105">
            <div className="flex items-center gap-6 mb-6">
              <FaLaptopCode className="text-6xl text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">Sistemas de Informação</h3>
                <p className="text-gray-400 text-lg">UFSC - Experiência Acadêmica</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Na UFSC desenvolvi <span className="text-blue-400 font-semibold">sólida base em programação e desenvolvimento web</span>. 
              Algoritmos, estruturas de dados, arquitetura - conhecimento que aplico para criar sites que realmente funcionam.
            </p>
          </div>
        </div>

        {/* Diferencial */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8">
            <FaGraduationCap className="text-5xl text-purple-400 mx-auto mb-6" />
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="font-bold text-purple-400">Meu diferencial único:</span> Combino a 
              <span className="text-red-400 font-semibold"> precisão da medicina</span> com a 
              <span className="text-blue-400 font-semibold"> inovação da tecnologia</span>. 
              Resultado? Sites que funcionam perfeitamente e <span className="text-white font-semibold">entregam resultados reais</span> 
              para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
