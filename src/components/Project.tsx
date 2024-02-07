import Repos from "@/models/repos";
import React from "react";
import ProjectList from "./ProjectList";

const reposList: Repos[] = [
  {
    id: 1,
    image: "/login.png",
    title: "Sistema de login com NextAuth",
    description:
      "Projeto de login de usuário usa NextAuth para gerenciar as autenticações, aqui faço uso do sistema do google cloud para logar o usuário com sua conta.",
    project: "Pessoal",
    language: "NextJs - TypeScript, TailWind CSS, NextAuth, Google Cloud",
    link: "https://github.com/cardrocha/next-auth",
    deploy: "https://next-auth-theta-roan.vercel.app/",
  },
  {
    id: 2,
    image: "/nasaApi.png",
    title: "Foto astronômica do dia",
    description:
      "Projeto Foto astronômica faz uso da API da NASA para fazer a requisição da api APOD, para mostra informações da foto do dia",
    project: "Pessoal",
    language: "NextJs - TypeScript, TailWind CSS",
    link: "https://github.com/cardrocha/Nasa_APOD_api",
    deploy: "https://nasa-apod-api-six.vercel.app/",
  },
  {
    id: 3,
    image: "/project_portfolio.png",
    title: "Projeto Portfólio Developer",
    description:
      "Projeto portfolio developer aplico parte do que foi aprendido em curso, aqui apresento meus projetos pessoais e os desenvolvidos no curso",
    project: "Pessoal",
    language: "NextJs - TypeScript, TailWind CSS",
    link: "https://github.com/cardrocha/Portfolio_developer",
    deploy: "https://portfolio-developer-pi.vercel.app/",
  },
  {
    id: 4,
    image: "/fitness.png",
    title: "Landing Page - Academia",
    description:
      "Este projeto visa boas práticas, estrutura de pastas, código limpo, design responsivo e manipulação de dados.",
    project: "Designer - Jonata Ferreira",
    language: "NextJs - TypeScript, TailWind CSS",
    link: "https://github.com/cardrocha/fitness-app/",
    deploy: "https://fitness-app-rho-gules.vercel.app/",
  },
  {
    id: 5,
    image: "/efood.png",
    title: "Efood",
    description:
      "Projeto de aplicativo de serviço de delivery online, com pagameto e checkout, desenvolvido com figma e usando conhecimentos adquiridos nos módulos de react.",
    project: "Designer Ebac",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
    link: "https://github.com/cardrocha/efood_ecommerce",
    deploy: "https://efood-ecommerce.vercel.app/",
  },
  {
    id: 6,
    image: "/eplay.png",
    title: "Eplay",
    description:
      "Projeto de aplicativo de comércio online para venda de games digitais, com pagamento e checkout, desenvolvido com React e Typescript.",
    project: "Projeto Ebac",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
    link: "https://github.com/cardrocha/eplay",
    deploy: "https://eplay-one.vercel.app/",
  },
  {
    id: 7,
    image: "/todo_list.png",
    title: "Todo List",
    description:
      "Minhas Tarefas é uma aplicação web que permite adicionar, editar, excluir tarefas e marcá-las como concluídas. Com uma interface simples, os usuários podem gerenciar sua lista de tarefas de forma eficiente.",
    project: "Projeto Ebac",
    language: "React - Redux-ToolKit, TypeScript, Styled-components",
    link: "https://github.com/cardrocha/minhas-tarefas",
    deploy: "https://minhas-tarefas-wine.vercel.app/",
  },
  {
    id: 8,
    image: "/project_p.png",
    title: "Projeto Portifólio",
    description:
      "Projeto Portfólio simula uma provedora de internet banda larga ou fibra ótica.",
    project: "Pessoal",
    language: "HTML, CSS e Javascript",
    link: "https://github.com/cardrocha/projeto_portfolio",
    deploy: "https://projeto-portfolio-six.vercel.app/",
  },
  {
    id: 9,
    image: "/landing.png",
    title: "Landing Page Movie",
    description:
      "Projeto de uma landing page do filme homem-aranha atraves do Aranhaverso, projeto desenvolvido com conhecimentos do módulo clone Disney Plus",
    project: "Pessoal curso",
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
