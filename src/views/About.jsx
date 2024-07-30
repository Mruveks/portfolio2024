import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-2 h-full w-full overflow-hidden">
      <article className="p-32 text-xl bg-moss-green">
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will
        be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
        making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and
        the like).
      </article>
      <div className="relative">
        <img src="/about-photo.avif" className="h-full w-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-moss-green bg-opacity-50"></div>
      </div>{" "}
    </div>
  );
};

export default About;
