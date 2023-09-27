"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import fundo from "../../public/f-bg.png";
import perfil from "../../public/minha_foto.png";

const HomePage = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        setShowUp(true);
      } else {
        setShowUp(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  });

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="container mx-auto relative">
        <h1 className="text-5xl xl:text-6xl mt-10 xl:mt-32 bg-clip-text text-transparent p-4 sm:p-2 xl:p-0 bg-gradient-to-r from-red-700 via-white font-semibold">
          Desenvolvedor Front-end
        </h1>
        <h2 className="text-white text-3xl xl:text-4xl mt-4 p-4 sm:p-2 xl:p-0">
          Criando aplicações web, atraentes, responsivas.
        </h2>
        <div className="flex flex-row gap-4 p-4 sm:p-2 xl:p-0">
          <a
            target="_blank"
            href="/ricardo_2023.pdf"
            className="border-red-800 border-b-4 hover:border-b-4 bg-red-600 p-3 mt-3 text-lg font-semibold text-white rounded-xl hover:bg-red-800 hover:border-red-950 hover:scale-110 duration-300"
          >
            Download CV
          </a>
          <a
            href="#contato"
            className="bg-transparent border-red-800 border-4 p-3 mt-3 text-lg font-semibold text-red-600 rounded-xl hover:text-white hover:bg-red-800 hover:scale-110 duration-300"
          >
            Entre em contato
          </a>
        </div>
      </div>
      <div className="relative">
        <Image
          className="absolute top-48 left-48 xl:top-14 sm:left-3/4 xl:left-3/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-md"
          src={fundo}
          width={300}
          height={300}
          alt="fundo de foto"
        />
        <Image
          className="absolute top-48 xl:top-14 left-48 sm:left-3/4 xl:left-3/4 transform -translate-x-1/2 -translate-y-1/2 rounded-md"
          src={perfil}
          width={230}
          height={230}
          alt="perfil"
        />
      </div>
      <div>
        {showUp && (
          <button
            onClick={scrollToUp}
            className="text-black text-lg font-semibold fixed bottom-44 opacity-80 right-10 sm:right-30 xl:right-10 bg-yellow-600 p-2 rounded-md z-10"
          >
            Voltar ao topo
          </button>
        )}
      </div>
    </>
  );
};

export default HomePage;
