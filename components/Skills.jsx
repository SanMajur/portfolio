import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-full p-4'>
        <div className="max-w-[1244px] mx-auto flex flex-col justify-center">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">skills</p>
            <h2 className="py-4">what i can do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/html.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">html</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/css.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">css</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/tailwind.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/javascript.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">javascript</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/react.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">react</h3>
                        </div>
                    </div>
                </div>
               
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/node.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">node</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/nextjs.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">nextjs</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src='/assets/github1.png' alt='' width={64} height={64} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="uppercase">github</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills