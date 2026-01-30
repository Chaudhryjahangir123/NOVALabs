import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function LuxuryParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: { enable: true },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.8 }, // Strong connection on hover
            },
          },
        },
        particles: {
          color: {
            value: "#1C1917", // Changed to DARK BROWN / CHARCOAL
          },
          links: {
            color: "#1C1917", // Links are also Dark Brown
            distance: 150,
            enable: true,
            opacity: 0.4, // Visible lines
            width: 1.2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5, // Good movement speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 80, // Plenty of particles
          },
          opacity: {
            value: 0.6, // Dark and visible
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 }, // Nice visible dots
          },
        },
        detectRetina: true,
      }}
    />
  );
}