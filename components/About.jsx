import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-6 flex items-center py-16'>
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                <h2 className="py-4">Who I Am</h2>
                <p className="py-2 text-gray-600">
                    I'm a seasoned full-stack developer with over half a decade of hands-on experience in
                    crafting innovative and scalable solutions.
                    My passion lies in bridging the gap between elegant design and efficient functionality, 
                    ensuring seamless user experiences.
                </p>
                <p className="py-2 text-gray-600">
                    Proficient in a diverse range of technologies, I thrive in dynamic environments, delivering high quality
                    code and driving project success through my technical expertise and collaborative approach.
                </p>
                <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
                <Image src='/assets/profile1.jpg' alt='' width={600} height={50} className="rounded-xl" />
            </div>
        </div>
    </div>
  )
}

export default About