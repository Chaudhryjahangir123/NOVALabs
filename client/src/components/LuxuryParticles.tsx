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
              mode: "grab", // Stronger connection to mouse
            },
            resize: { enable: true },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 1 }, // Solid lines when hovering
            },
          },
        },
        particles: {
          color: {
            value: "#C5A059", // Rich Metallic Gold
          },
          links: {
            color: "#C5A059",
            distance: 150,
            enable: true,
            opacity: 0.6, // Much more visible lines
            width: 1.5,   // Thicker lines
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2, // Faster movement (Alive!)
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100, // MORE particles
          },
          opacity: {
            value: 0.8, // Almost fully solid (Very visible)
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 4 }, // Much bigger dots
          },
        },
        detectRetina: true,
      }}
    />
  );
}