import Image from "next/image";
import React from "react";
import weatherImg from "../public/assets/forecast.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={weatherImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 capitalize">Weather App</h2>
          <h3 className="capitalize">JavaScript / Tailwind / Html </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#6561e5] uppercase">project</p>
          <h2 className="">overview</h2>
          <p className="">
            Introducing "WeatherClone," a JavaScript and HTML-powered weather
            app that replicates the functionality of your favorite weather
            applications with a lightweight and accessible codebase. This app
            brings you the familiar features you love in a simplified form,
            making it easy for developers to understand and customize. Built
            entirely with JavaScript and HTML, WeatherClone mirrors the look and
            feel of popular weather apps, providing users with a seamless
            experience. Stay informed about the current weather conditions,
            forecast, and more, all while navigating a user interface that
            closely resembles the industry standard.
          </p>
        <Link href='https://sanmajur.github.io/weatherApp/public/index.html' target="blank">
            <button className="px-8 py-2 mt-4 mr-4">Demo</button>
        </Link>
         <Link href='https://github.com/SanMajur/weatherApp' target="blank">
         <button className="px-8 py-2 mt-4">code</button>
         </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Html
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

export default property;
