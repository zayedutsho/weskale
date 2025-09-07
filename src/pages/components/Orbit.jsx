import React from "react";
import one from "../../assets/service/orbit/one.svg";
import two from "../../assets/service/orbit/two.svg";
import three from "../../assets/service/orbit/three.svg";
import logo from "../../assets/service/orbit/logo.svg";

const Orbit = () => {
  const icons = [{ src: one, alt: "1" }];

  return (
    <div className="relative flex items-center justify-center h-[500px] w-[500px] mx-auto">
      {/* Orbit circle */}
      <div className="absolute w-full h-full rounded-full border border-gray-700 animate-spin-slow"></div>

      {/* Center logo */}
      <div className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-black border border-blue-500 text-white z-10">
        ⭕
      </div>

      {/* Orbiting icons */}
      {icons.map((icon, i) => {
        const angle = (i / icons.length) * 2 * Math.PI; // even spacing
        const radius = 200; // distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-full bg-white shadow-lg border border-gray-700 flex items-center justify-center"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
          </div>
        );
      })}
    </div>
  );
};

export default Orbit;
