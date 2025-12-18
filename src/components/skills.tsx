import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiE } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center text-white w-full">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tecnologias que Domino</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          <SkillItem icon={<FaHtml5 className="text-orange-500" />} label="HTML" />
          <SkillItem icon={<FaCss3Alt className="text-blue-500" />} label="CSS" />
          <SkillItem icon={<SiTailwindcss className="text-cyan-400" />} label="TailwindCSS" />
          <SkillItem icon={<FaJs className="text-yellow-400" />} label="JavaScript" />
          <SkillItem icon={<SiTypescript className="text-blue-400" />} label="TypeScript" />
          <SkillItem icon={<FaReact className="text-cyan-300" />} label="React" />
          <SkillItem icon={<SiNextdotjs className="text-white" />} label="Next.js" />
          <SkillItem icon={<FaPython className="text-yellow-300" />} label="Python" />
          <SkillItem icon={<SiE className="text-green-400" />} label="SEO" />
        </div>
      </div>
    </section>
  );
}

function SkillItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 hover:scale-110 transition-transform p-4 rounded-xl hover:bg-[#1c1c1c]/50">
      <div className="text-6xl">{icon}</div>
      <span className="text-sm font-medium text-center">{label}</span>
    </div>
  );
}
