import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={netflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 capitalize">Netflix</h2>
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
            The Netflix Clone is a dynamic streaming platform replica developed
            with Next.js, React for a robust frontend, Tailwind CSS for a
            polished and responsive design, and Firebase for efficient backend
            services. This application offers users an immersive experience,
            allowing them to browse, search, and watch a wide range of content.
            Leveraging Next.js for server-side rendering, the Netflix Clone
            provides seamless navigation and performance. Firebase ensures
            real-time data updates, enhancing user engagement by delivering a
            Netflix-like experience in a visually appealing and user-friendly
            interface.
          </p>
          <Link href='https://netflixclone-95049.web.app/'>
            <button className="px-8 py-2 mt-4 mr-4">Demo</button>
          </Link>
          <Link href='https://github.com/SanMajur/netflix-clone'>
            <button className="px-8 py-2 mt-4">code</button>
          </Link>
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

export default netflix;
