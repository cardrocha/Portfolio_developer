'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import fundo from "../../public/f-bg.png";
import perfil from "../../public/minha_foto.png";

const HomePage = () => {
  const [showUp, setShowUp] = useState(false)

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        setShowUp(true)
      } else {
        setShowUp(false)
      }
    }

    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  })

  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="container mx-auto relative">
        <h1 className="text-5xl xl:text-6xl mt-32 bg-clip-text text-transparent p-2 sm:p-2 xl:p-0 bg-gradient-to-r from-red-700 via-white font-semibold">
          Desenvolvedor Front-end
        </h1>
        <h2 className="text-white text-3xl xl:text-4xl mt-4 p-2 sm:p-2 xl:p-0">
          Criando aplicações web, atraentes, responsivas.
        </h2>
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
            className="text-black text-lg font-semibold fixed bottom-44 opacity-80 right-56 xl:right-20 bg-yellow-600 p-2 rounded-md z-10"
          >
            Voltar ao topo
          </button>
        )}
      </div>
    </>
  );
};

export default HomePage;
