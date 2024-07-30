import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-64 text-white">
      <article className="flex flex-col">
        <div className="flex gap-4 items-center justify-between border-b border-gray-400 pb-16">
          <p>Let me know what I can do for You!</p>
          <a href="mailto:mrowiec.kuba.mk@gmail.com" className="text-white">
            mrowiec.kuba.mk@gmail.com
          </a>
        </div>

        <span className="flex justify-between pt-16 items-center">
          <p></p>
          <p>&copy; 2024 Kuba Mrowiec</p>
        </span>
      </article>
    </footer>
  );
};

export default Footer;
