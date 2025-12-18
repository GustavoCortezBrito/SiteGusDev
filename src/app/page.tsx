'use client'

import About from "@/components/about";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Forms from "@/components/forms";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero - Tela cheia */}
      <section id="Hero" className="min-h-screen py-24 lg:py-0 flex items-center justify-center">
        <Hero/>
      </section>
      
      {/* Seções com espaçamento consistente */}
      <section id="about" className="py-16 lg:py-24 px-4 flex items-center justify-center">
        <About/>
      </section>
      
      <section id="education" className="py-16 lg:py-24 px-4 flex items-center justify-center">
        <Education/>
      </section>
      
      <section id="skills" className="py-16 lg:py-24 px-4 flex items-center justify-center">
        <Skills/>
      </section>
      
      <section id="services" className="py-16 lg:py-24 px-4 flex items-center justify-center">
        <Services/>
      </section>
      
      <section id="projects" className="py-16 lg:py-24 px-4 flex items-center justify-center">
        <Projects/>
      </section>
      
      <section id="contact" className="py-16 lg:py-24 px-4 flex items-center justify-center">
        <Forms/>
      </section>
      
      <Footer />
      <FloatingWhatsApp className="bg-black" accountName="Gustavo Cortez" phoneNumber="+5517981404761" avatar="/GustavoCortezDev.jpg" statusMessage="Responde em cerca de 1 hora" chatMessage="Olá, como posso ajudar?👨‍💻" />
    </div>
  );
}

