import Image from "next/image";
import React from "react";
import twitchImg from "../public/assets/twitch.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={twitchImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 capitalize">twitch</h2>
          <h3 className="capitalize">
            next js / react js / tailwind / firebase
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#6561e5] uppercase">project</p>
          <h2 className="">overview</h2>
          <p className="">
            The Twitch App Clone is a dynamic streaming platform replica
            developed with Next.js and React for a performant frontend, Tailwind
            CSS for a polished and responsive design, and Firebase for seamless
            backend services. This application provides users with a captivating
            live-streaming experience, allowing them to discover, watch, and
            interact with a variety of content creators. Leveraging Next.js for
            server-side rendering, the Twitch App Clone ensures smooth
            navigation and optimal performance. Firebase handles real-time
            updates and user authentication, delivering an engaging and
            feature-rich platform for the gaming and streaming community."
          </p>
          <button className="px-8 py-2 mt-4 mr-4">Demo</button>
          <button className="px-8 py-2 mt-4">code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                nextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google Api
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
