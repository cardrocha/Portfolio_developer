import React from "react";
import Image from "next/image";
import fundo from "../../public/f-bg.png";
import perfil from "../../public/minha_foto.png";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-6xl mt-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-white font-semibold">
          Desenvolvedor Front-end
        </h2>
        <h1 className="text-white text-4xl mt-4">
          Criando aplicações web, atraentes, responsivas.
        </h1>
      </div>
      <div className="relative">
        <Image
          className="absolute top-14 left-3/4 transform -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-md"
          src={fundo}
          width={300}
          height={300}
          alt="fundo de foto"
        />
        <Image
          className="absolute top-14 left-3/4 transform -translate-x-1/2 -translate-y-1/2 rounded-md"
          src={perfil}
          width={230}
          height={230}
          alt="perfil"
        />
      </div>
    </>
  );
};

export default HomePage;
