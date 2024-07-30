import React from "react";

const CTA = () => {
  return (
    <div className="h-[60vh] flex flex-col justify-center px-64 ">
      <article className="bg-olive-green px-16 py-32 text-white grid grid-cols-2">
        <span>
          <h1 className="text-2xl relative flex flex-col w-full justify-center">
            Looking to collaborate or learn more about my work?
          </h1>
          <h2 className="text-xl">Get in touch with me for more information.</h2>
        </span>
        <span className="text-xl flex justify-around">
          <button>
            <a
              href="https://github.com/Mruveks"
              target="__blank"
              className="border px-4 py-2 rounded-xl hover:bg-moss-green"
            >
              Github
            </a>
          </button>{" "}
          <button>
            <a href="mailto:mrowiec.kuba.mk@gmail.com" className="border px-4 py-2 rounded-xl hover:bg-moss-green">
              E-mail
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/kuba-mrowiec-0630b2244/"
              target="__blank"
              className="border px-4 py-2 rounded-xl hover:bg-moss-green"
            >
              Linkedin
            </a>
          </button>
        </span>
      </article>
    </div>
  );
};

export default CTA;
