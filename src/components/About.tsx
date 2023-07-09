import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-96 font-semibold">
        Sobre min
      </h2>
      <div className="flex w-[900px] mx-auto mt-5">
        <p className="text-white text-2xl text-center">
          Me chamo Ricardo e tenho 43 anos. Atualmente cursando{" "}
          <span className="underline decoration-red-500">
            FullStack Python na Ebac
          </span>
          . Procurando desenvolver projetos para aprimorar minhas Skills. Hoje,
          minha Stack atual é o{" "}
          <span className="underline decoration-blue-500">React</span> e{" "}
          <span className="underline decoration-blue-700">Typescript</span>,
          porém possuo experiência utilizando outras tecnologias, como:{" "}
          <span className="underline decoration-green-700">NodeJS</span>,{" "}
          <span className="underline decoration-yellow-600">JavaScript</span>,{" "}
          <span className="underline decoration-pink-600">
            Styled-components
          </span>
          . E explorando{" "}
          <span className="underline decoration-gray-600">NextJs 13</span> e{" "}
          <span className="underline decoration-blue-700">TailWind CSS</span>,
          aprendendo utilizá-los em meus projetos.
        </p>
      </div>
    </section>
  );
};

export default About;
