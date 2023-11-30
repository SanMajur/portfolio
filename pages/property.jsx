import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/property.jpg";
import {RiRadioButtonFill} from 'react-icons/ri'
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
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 capitalize">property finder</h2>
          <h3 className="capitalize">react js / tailwind / firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-[#6561e5] uppercase">project</p>
          <h2 className="">overview</h2>
          <p className="">
            The Property Finder App is a sleek and responsive application
            developed using React for the frontend, Tailwind CSS for a modern
            and stylish design, and Firebase for seamless backend integration.
            This app allows users to effortlessly discover and explore various
            properties, utilizing an intuitive interface to filter results based
            on preferences. With real-time data updates from Firebase, users can
            stay informed about the latest property listings, making their home
            search experience efficient and enjoyable.
          </p>
            <button className="px-8 py-2 mt-4 mr-4">Demo</button>
            <button className="px-8 py-2 mt-4">code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p2">
                <p className="text-center font-bold pb-2">Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>NextJs</p>
                    <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React</p>
                    <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Tailwind</p>
                    <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>JavaScript</p>
                    <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Firebase</p>
                    <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Google Api</p>
                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
