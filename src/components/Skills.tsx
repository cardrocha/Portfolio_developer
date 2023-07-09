import React from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoSass, IoMdGitBranch } from "react-icons/io";
import { BsUbuntu } from "react-icons/bs";
import { TbBrandNextjs, TbTerminal } from "react-icons/tb";
import { SiCypress, SiFigma, SiJest, SiReact, SiStyledcomponents, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skill" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-32 font-semibold">
        Minhas Habilidades
      </h2>
      <div className="grid grid-cols-6 gap-14 place-items-center mt-12">
        <AiFillHtml5 className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <IoLogoCss3 className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <IoLogoJavascript className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <AiFillGithub className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <IoMdGitBranch className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <BsUbuntu className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <TbTerminal className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiFigma className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <IoLogoNodejs className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <IoLogoSass className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiReact className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiTypescript className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiStyledcomponents className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiJest className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiCypress className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiVuedotjs className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <TbBrandNextjs className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
        <SiTailwindcss className="text-5xl text-white hover:text-red-400 shadow shadow-white/100 rounded-lg p-1 cursor-pointer" />
      </div>
    </section>
  );
};

export default Skills;
