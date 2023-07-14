'use client'

import React from "react";
import * as A from "react-icons/ai";
import * as I from "react-icons/io";
import { BsUbuntu } from "react-icons/bs";
import * as T from "react-icons/tb";
import * as S from "react-icons/si";

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
          <A.AiFillHtml5 className="text-5xl mb-2 text-white hover:scale-125 duration-300 hover:text-orange-400 shadow shadow-white/50 rounded-lg p-1 cursor-pointer" />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <I.IoLogoCss3 className="text-5xl text-white mb-2 hover:text-blue-400 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <I.IoLogoJavascript className="text-5xl mb-2 text-white hover:text-yellow-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Javascript</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <A.AiFillGithub className="text-5xl mb-2 text-white hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>GitHub</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <I.IoMdGitBranch className="text-5xl mb-2 text-white hover:text-orange-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>GIT</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <BsUbuntu className="text-5xl mb-2 text-white hover:text-orange-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Ubuntu</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <T.TbTerminal className="text-5xl mb-2 text-white hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Terminal</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiFigma className="text-5xl mb-2 text-white hover:text-purple-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Figma</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <I.IoLogoNodejs className="text-5xl mb-2 text-white hover:text-green-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>NodeJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <I.IoLogoSass className="text-5xl mb-2 text-white hover:text-pink-300 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Sass</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiReact className="text-5xl mb-2 text-white hover:text-blue-400 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>ReactJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiTypescript className="text-5xl mb-2 text-white hover:text-blue-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Typescript</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiStyledcomponents className="text-5xl mb-2 text-white hover:text-fuchsia-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Styled-Components</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiJest className="text-5xl mb-2 text-white hover:text-rose-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Jest</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiCypress className="text-5xl mb-2 text-white hover:text-emerald-500 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Cypress</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiVuedotjs className="text-5xl mb-2 text-white hover:text-green-700 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>VueJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <T.TbBrandNextjs className="text-5xl mb-2 text-white hover:text-gray-700 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>NextJs</p>
        </div>
        <div className="flex flex-col items-center hover:text-white">
          <S.SiTailwindcss className="text-5xl mb-2 text-white hover:text-sky-600 hover:scale-125 duration-300 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
          <p>Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
