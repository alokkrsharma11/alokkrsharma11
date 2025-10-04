// src/components/Particles.js
import React, { useEffect } from "react";
import { loadFull } from "tsparticles";

const Particles = () => {
  useEffect(() => {
    const initParticles = async () => {
      const engine = await loadFull(); // create engine with all features

      // Load particles into container
      await engine.load("tsparticles", {
        background: {
          color: "#000",
        },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
        },
      });
    };

    initParticles();
  }, []);

  return (
    <div
      id="tsparticles"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default Particles;