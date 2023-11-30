import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from "../public/assets/property.jpg";
import cryptoImg from "../public/assets/crypto.jpg";
import netflixImg from "../public/assets/netflix.jpg";
import twitchImg from "../public/assets/twitch.jpg";
import ProjectItems from "../components/ProjectItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 capitalize">what i've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Netflix"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
          />
          <ProjectItems
            title="Crypto app"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItems
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItems
            title="Twitch"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
