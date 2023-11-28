import Image from "next/image";
import React from "react";
import htmlImg from "../public/assets/html.png";
import cssImg from "../public/assets/css.png";
import tailwindImg from "../public/assets/tailwind.png";
import javascriptImg from "../public/assets/javascript.png";
import reactImg from "../public/assets/react.png";
import nodeImg from "../public/assets/node.png";
import githubImg from "../public/assets/github1.png";
import nextImg from "../public/assets/nextjs.png";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="max-w-[1244px] mx-auto flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          skills
        </p>
        <h2 className="py-4">what i can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill skillImage={htmlImg} title="html" />
          <Skill skillImage={cssImg} title="css" />
          <Skill skillImage={tailwindImg} title="tailwind" />
          <Skill skillImage={javascriptImg} title="javascript" />
          <Skill skillImage={reactImg} title="react" />
          <Skill skillImage={nodeImg} title="node" />
          <Skill skillImage={nextImg} title="next" />
          <Skill skillImage={githubImg} title="github" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
