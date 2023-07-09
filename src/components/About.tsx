import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-96 font-semibold">Sobre min</h2>
      <div className="flex w-[900px] mx-auto mt-5">
        <p className="text-white text-2xl text-center">
          Me chamo Ricardo e tenho 43 anos. Atualmente cursando FullStack Python na Ebac. 
          Procurando desenvolver projetos para aprimorar minhas Skills. Hoje, minha Stack atual 
          é o React e Typescript, porém possuo experiência utilizando outras tecnologias, como:
          NodeJS, JavaScript, Styled components. E explorando NextJs 13 e TailWind, aprendendo
          utilizá-los em meus projetos.
        </p>
      </div>
    </section>
  );
};

export default About;
