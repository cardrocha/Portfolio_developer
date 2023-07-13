import Repos from "@/models/repos";
import React from "react";
import ProjectList from "./ProjectList";

const reposList: Repos[] = [
  {
    id: 1,
    image: "/nasaApi.png",
    title: "Foto astronômica do dia",
    description:
      "Projeto Foto astronômica faço uso da Api da Nasa para fazer a requisição da api APOD, para mostra informações da foto do dia",
    language: "NextJs - TypeScript, TailWind CSS",
    link: "https://github.com/cardrocha/Nasa_APOD_api",
    deploy: "https://nasa-apod-api-six.vercel.app/",
  },
  {
    id: 2,
    image: "/project_portfolio.png",
    title: "Projeto Portfólio Developer",
    description:
      "Projeto portfolio developer aplico parte do que foi aprendido em curso, aqui apresento meus projetos pessoais e os desenvolvidos no curso",
    language: "NextJs - TypeScript, TailWind CSS",
    link: "https://github.com/cardrocha/Portfolio_developer",
    deploy: "https://portfolio-developer-pi.vercel.app/",
  },
  {
    id: 3,
    image: "/kanban.png",
    title: "Projeto Kanban",
    description:
      "Projeto Kanban feito em React é uma aplicação visual que permite organizar e gerenciar tarefas de forma eficiente. O projeto permite adicionar, editar e excluir tarefas, os usuários podem mover cartões de tarefas entre colunas para indicar seu progresso.",
    language: "React - TypeScript, Styled-components",
    link: "https://github.com/cardrocha/projeto_kanban",
    deploy: "https://projeto-kanban-ten.vercel.app/",
  },
  {
    id: 4,
    image: "/efood.png",
    title: "Efood",
    description:
      "Projeto de aplicativo de serviço de delivery online, com pagameto e checkout",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
    link: "https://github.com/cardrocha/efood_ecommerce",
    deploy: "https://efood-ecommerce.vercel.app/",
  },
  {
    id: 5,
    image: "/eplay.png",
    title: "Eplay",
    description:
      "Projeto de aplicativo de comércio online de venda de games digitais, com pagameto e checkout",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
    link: "https://github.com/cardrocha/eplay",
    deploy: "https://eplay-one.vercel.app/",
  },
  {
    id: 6,
    image: "/todo_list.png",
    title: "Todo List",
    description:
      "Minhas Tarefas é uma aplicação web que permite adicionar, editar, excluir tarefas e marcar como concluídas. Com uma interface simples, os usuários podem gerenciar sua lista de tarefas de forma eficiente.",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
    link: "https://github.com/cardrocha/minhas-tarefas",
    deploy: "https://minhas-tarefas-wine.vercel.app/",
  },
  {
    id: 7,
    image: "/project_p.png",
    title: "Projeto Portifólio",
    description:
      "Projeto Portfólio simula uma prestadora de internet banda larga ou fibra ótica.",
    language: "HTML, CSS e Javascript",
    link: "https://github.com/cardrocha/projeto_portfolio",
    deploy: "https://projeto-portfolio-six.vercel.app/",
  },
  {
    id: 8,
    image: "/landing.png",
    title: "Landing Page Movie",
    description:
      "Projeto de uma landing page do filme homem-aranha atraves do Aranhaverso",
    language: "HTML, Sass, Gulp e Javascript",
    link: "https://github.com/cardrocha/Landing-Page-Movie",
    deploy: "https://landing-page-movie.vercel.app/",
  },
];

const Project = () => {
  return (
    <section id="project" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-32 font-semibold border-b-2 border-red-600">
        Meus Projetos
      </h2>
      <ProjectList repo={reposList} />
    </section>
  );
};

export default Project;
