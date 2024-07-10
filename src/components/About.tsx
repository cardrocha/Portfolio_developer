import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto">
      <h2 className="text-4xl text-white text-center mt-96 font-semibold border-b-2 border-red-600">
        Sobre mim
      </h2>
      <div className="flex w-[400] xl:w-[900px] mx-auto mt-5">
        <p className="text-white text-2xl text-center">
          Me chamo Ricardo Rocha, sou desenvolvedor{" "}
          <span className="underline decoration-red-500">
            FullStack Python formado pela Ebac
          </span>
          . No curso adquiri habilidades e desenvolvi metodologias ageis e trabalhei em diversos projetos para aprimorar minhas competências. Hoje,
          minha Stack atual é o{" "}
          <span className="underline decoration-blue-500">React</span> e{" "}
          <span className="underline decoration-blue-700">Typescript</span>,
          porém possuo experiência utilizando outras tecnologias, como:{" "}
          <span className="underline decoration-green-700">NodeJS</span>,{" "}
          <span className="underline decoration-yellow-600">JavaScript</span>,{" "}
          <span className="underline decoration-pink-600">
            Styled-components
          </span>
          . E estou explorando{" "}
          <span className="underline decoration-gray-600">Next.Js</span> e{" "}
          <span className="underline decoration-blue-700">TailWind CSS</span>,
          aprendendo utilizá-los em meus projetos.
        </p>
      </div>
    </section>
  );
};

export default About;
