'use client'

import React from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoSass,
  IoMdGitBranch,
} from "react-icons/io";
import { BsUbuntu } from "react-icons/bs";
import { TbBrandNextjs, TbTerminal } from "react-icons/tb";
import {
  SiCypress,
  SiFigma,
  SiJest,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

const Skills = () => {
  const html = () => {
    <p>
      HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais
      básico da web.{" "}
    </p>;
  };

  return (
    <section id="skill" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-32 font-semibold border-b-2 border-red-600">
        Minhas Habilidades
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-14 place-items-center mt-12">
        <div className="flex flex-col items-center hover:text-white">
          <AiFillHtml5 className="text-5xl mb-2 text-white hover:scale-125 duration-300 hover:text-orange-400 shadow shadow-white/50 rounded-lg p-1 cursor-pointer" />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoLogoCss3 className="text-5xl text-white mb-2 hover:text-blue-400 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoLogoJavascript className="text-5xl mb-2 text-white hover:text-yellow-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <AiFillGithub className="text-5xl mb-2 text-white hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>GitHub</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoMdGitBranch className="text-5xl mb-2 text-white hover:text-orange-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>GIT</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <BsUbuntu className="text-5xl mb-2 text-white hover:text-orange-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Ubuntu</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <TbTerminal className="text-5xl mb-2 text-white hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Terminal</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiFigma className="text-5xl mb-2 text-white hover:text-purple-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Figma</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoLogoNodejs className="text-5xl mb-2 text-white hover:text-green-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>NodeJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <IoLogoSass className="text-5xl mb-2 text-white hover:text-pink-300 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Sass</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiReact className="text-5xl mb-2 text-white hover:text-blue-400 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>ReactJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiTypescript className="text-5xl mb-2 text-white hover:text-blue-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Typescript</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiStyledcomponents className="text-5xl mb-2 text-white hover:text-fuchsia-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Styled-Components</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiJest className="text-5xl mb-2 text-white hover:text-rose-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Jest</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiCypress className="text-5xl mb-2 text-white hover:text-emerald-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Cypress</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiVuedotjs className="text-5xl mb-2 text-white hover:text-green-700 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>VueJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <TbBrandNextjs className="text-5xl mb-2 text-white hover:text-gray-700 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>NextJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <SiTailwindcss className="text-5xl mb-2 text-white hover:text-sky-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
