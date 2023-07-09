import Repos from "@/models/repos";
import React from "react";

const reposList: Repos[] = [
  {
    id: 2,
    image: "",
    title: "Projeto Kanban",
    description:
      "Um projeto Kanban feito em React é uma aplicação visual que permite organizar e gerenciar tarefas de forma eficiente. O projeto permite adicionar, editar e excluir tarefas, os usuários podem mover cartões de tarefas entre colunas para indicar seu progresso.",
    language: "React - TypeScript, Styled-components",
  },
  {
    id: 3,
    image: "",
    title: "Efood",
    description:
      "Projeto de aplicativo de serviço de delivery online, com pagameto e checkout",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
  },
  {
    id: 4,
    image: "",
    title: "Eplay",
    description:
      "Projeto de aplicativo de comércio online de venda de games digitais, com pagameto e checkout",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
  },
  {
    id: 5,
    image: "",
    title: "Todo List",
    description:
      "Minhas Tarefas é uma aplicação web que permite adicionar, editar, excluir tarefas e marcar como concluídas. Com uma interface simples, os usuários podem gerenciar sua lista de tarefas de forma eficiente.",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
  },
  {
    id: 6,
    image: "",
    title: "Projeto Portifólio",
    description:
      "Projeto Portfólio simula uma prestadora de internet banda larga ou fibra ótica.",
    language: "HTML, CSS e Javascript",
  },
  {
    id: 7,
    image: "",
    title: "Landing Page Movie",
    description:
      "Projeto de uma landing page do filme homem-aranha atraves do Aranhaverso",
    language: "HTML, Sass, Gulp e Javascript",
  },
];

const Project = () => {
  return (
    <section id="project" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-32 font-semibold">
        Meus Projetos
      </h2>
    </section>
  );
};

export default Project;
