import { motion } from 'framer-motion'
import React from 'react'
import '../public/php.png'

type Props = {
    directionLeft?:boolean;
};


const Skill2 = (directionLeft: Props) => {
  return (
    <div className='group relative flex cursor-pointer top-10 right-10'>
        <motion.img
        initial={{
            x :directionLeft ? -200 : 200,
            opacity:0,
        }}
        transition={{duration:1}} whileInView={{opacity:1,x:0}}
        src='php.png' className='rounded-full border-gray-500 object-cover sm:w-10 sm:h-10 md:w-20 md:h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white sm:w-10 sm:h-10 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%

            </p>
          </div>
        </div>
    </div>
  )
}

export default Skill2