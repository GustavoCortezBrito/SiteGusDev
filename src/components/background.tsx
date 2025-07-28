'use client';

import { useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    import("@tsparticles/react").then(async ({ initParticlesEngine }) => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    });
  }, []);

  const particlesLoaded = () => {
    console.log("Particles carregadas ✅");
  };

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1, // isso joga as partículas para o fundo
      },
      background: {
        color: "#000", // ou remova isso se quiser deixar transparente
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 200, duration: 0.4 },
          push: { quantity: 4 },
        },
      },
      particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        size: { value: { min: 1, max: 5 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" loaded={particlesLoaded} options={options} />;
}
