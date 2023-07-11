import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  language: string;
  link: string
  deploy: string
};

const RepoBox = ({ image, title, description, language, link, deploy }: Props) => {
  return (
    <>
      <div className="flex flex-col-reverse xl:flex-row gap-4 items-center mt-14 text-white order-last">
        <div>
          <h2 className="text-4xl font-semibold text-center text-purple-600">
            {title}
          </h2>
          <p className="text-2xl text-center border-x-4 border-green-600 p-4">
            {description}
          </p>
          <p className="text-xl text-center p-2 text-blue-600 font-semibold">
            Languages: {language}
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <a
              href={link}
              target="_blank"
              title="Visite o github do projeto"
              className="bg-red-600 text-2xl text-white p-1 pl-2 pr-2 border-red-900 border-4 rounded-lg hover:brightness-150 cursor-pointer hover:scale-110 duration-300"
            >
              Github
            </a>
            <a
              href={deploy}
              target="_blank"
              title="Visite o deploy do projeto"
              className="bg-red-600 text-2xl text-white p-1 pl-2 pr-2 border-red-900 border-4 rounded-lg hover:brightness-150 cursor-pointer hover:scale-110 duration-300"
            >
              Deploy
            </a>
          </div>
        </div>
        <Image src={image} alt={title} width={600} height={600} />
      </div>
    </>
  );
};

export default RepoBox;
