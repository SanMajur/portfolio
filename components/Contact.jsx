import Image from "next/image";
import React from "react";
import contcatImg from "../public/assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          contact
        </p>
        <h2 className="py-4 capitalize">Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4 rounded-xl">
            <div className="lg:p4 h-full ">
              <div className="">
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 opacity-60"
                  src={contcatImg}
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="py-2">Name Here</h2>
                <p className="py-4">
                  I'm available for freelance or full-time position. Contact me
                  and let's talk
                </p>
              </div>
              <div className="">
                <p className="uppercase pt-8">contact me with</p>
                <div className="flex justify-between items-center  py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
                <form action="">
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Phone number</label>
                            <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300" />
                        </div>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input type="email" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">subject</label>
                        <input type="text" className="border-2 rounded-lg p-3 flex border-gray-300"/>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="uppercase text-sm py-2">message</label>
                        <textarea rows="10" className="border-2 rounded-lg p-3 flex border-gray-300"></textarea>
                    </div>
                    <button className="uppercase w-full p-4 text-gray-100 mt-4">send message</button>
                </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
            <Link href='/'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
