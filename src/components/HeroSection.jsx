"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState("/images/animalme.png");
  const [isRotating, setIsRotating] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);

  const handleImageClick = () => {
    if (isRotating) return; // Prevent spam clicking while animation runs

    setIsRotating(true);
    setRotationDegree(rotationDegree + 360); // Add 360° for two spins

    setTimeout(() => {
      setCurrentImage((prev) =>
        prev === "/images/animalme.png"
          ? "/images/pic.png"
          : "/images/animalme.png"
      ); // Change image after 2 spins
    }, 500); // Change image halfway through the full spin time

    setTimeout(() => {
      setIsRotating(false); // Allow next click after animation completes
    }, 1000); // Ensure smooth transition
  };

  return (
    <section id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold h-64 sm:mr-6">
            <br />
            <TypeAnimation
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 sm:mr-8"
              sequence={[
                "Hello! I'm Kirby Josh O. Calong.",
                1000,
                "I'm a 2nd year Computer Science Student.",
                1000,
                "Applying as a Front-End Developer for Samahan SysDev.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#191919] w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] flex items-center justify-center">
            <div
              className="relative w-[180px] h-[180px] lg:w-[275px] lg:h-[275px] transition-transform duration-[1000ms] ease-in-out"
              onClick={handleImageClick}
              style={{
                transform: `rotateY(${rotationDegree}deg)`, // Spins 360° before stopping
              }}
            >
              <Image src={currentImage} alt="id-pic" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
