import React from "react";

const Header = () => {
  return (
    <div>
      <div
        className="container mx-auto bg-red-800 flex items-center justify-between p-6 text-white border-b-4 hover:bg-transparent rounded-md
        hover:border-solid
        hover:border-b-4
        border-red-950"
      >
        <h2 className="text-3xl ml-4">
          Bem vindo ao meu <span className="text-yellow-500">Portfólio</span>
        </h2>
        <nav className="flex gap-3 text-xl font-semibold">
          <a
            className="bg-red-900 p-2 rounded-full hover:text-white hover:bg-red-700 shadow shadow-black/100"
            href="#"
          >
            Home
          </a>
          <a
            className="bg-red-900 p-2 rounded-full hover:text-white hover:bg-red-700 shadow shadow-black/100"
            href="#about"
          >
            Sobre mim
          </a>
          <a
            className="bg-red-900 rounded-full p-2 hover:text-white hover:bg-red-700 shadow shadow-black/100"
            href="#skill"
          >
            Skill
          </a>
          <a
            className="bg-red-900 rounded-full p-2 hover:text-white hover:bg-red-700 shadow shadow-black/100"
            href="#"
          >
            Projetos
          </a>
          <a
            className="bg-red-900 p-2 rounded-full hover:text-white hover:bg-red-700 shadow shadow-black/100"
            href="#contato"
          >
            Contatos
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
