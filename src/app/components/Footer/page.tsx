import React from "react";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section
        id="contato"
        className="container mx-auto bg-red-800 p-1 pb-1 text-white border-t-4 rounded-md
          border-solid border-red-950 mt-28"
      >
        <h2 className="text-4xl text-white text-center font-semibold">
          Entre em contato
        </h2>
        <hr className="bg-red-500 border-t-2 border-solid border-red-600 mt-2" />
        <div className="flex items-center justify-center gap-14 mt-4">
          <a href="https://github.com/cardrocha" target="_blank">
            <AiFillGithub
              className="text-5xl text-black hover:text-red-400 shadow shadow-black/100 rounded-lg p-1 cursor-pointer"
              title="Visite meu github"
            />
          </a>
          <a href="mailto: cardrocharj@gmail.com" target="_blank">
            <AiOutlineMail
              className="text-5xl text-black hover:text-red-400 shadow shadow-black/100 rounded-lg p-1 cursor-pointer"
              title="Me mande um e-mail"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-rocha-ara%C3%BAjo-b8a36a18b/"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="text-5xl text-black hover:text-red-400 shadow shadow-black/100 rounded-lg p-1 cursor-pointer"
              title="Visite meu linkedin"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521997924360"
            target="_blank"
          >
            <AiOutlineWhatsApp
              className="text-5xl text-black hover:text-red-400 shadow shadow-black/100 rounded-lg p-1 cursor-pointer"
              title="Entre em contato"
            />
          </a>
        </div>
        <p className=" text-lg text-center p-4">
          &copy; {currentYear} - Desenvolvido por Ricardo Rocha
        </p>
      </section>
    </>
  );
};

export default Footer;
