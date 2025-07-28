'use client'

import About from "@/components/about";
import Forms from "@/components/forms";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="Hero" className="min-h-screen py-24 lg:py-0 flex items-center justify-center">
        <Hero/>
      </section>
      <section id="skills" className="py-12 lg:py-24 flex items-center justify-center">
        <Skills/>
      </section>
      <section id="about" className="py-12 lg:py-24 flex items-center justify-center">
        <About/>
      </section>
      <section id="contact" className="py-12 lg:py-24 flex items-center justify-center">
        <Forms/>
      </section>
      <FloatingWhatsApp className="bg-black" accountName="Gustavo Cortez" phoneNumber="+5517981404761" avatar="/LogoGC.png" statusMessage="Responde em cerca de 1 hora" chatMessage="Olá, como posso ajudar?👨‍💻" />
    </div>
  );
}

