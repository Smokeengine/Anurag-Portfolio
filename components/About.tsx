import React from 'react'
import {motion} from 'framer-motion'
import '../public/anurag.jpeg'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
         <motion.div className=' -mb-20 md:mb-0 flex-shrink-0 object-cover rounded-full md:rounded-t-lg  
         md:w-30 md:h- xl:w-[300px] xl:h-[600px]' 
        initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1,x:0}}
        >
          <img className='rounded-full h-56 w-56 object-cover mx-auto flex justify-center items-center mt-40' src={'adout.jpeg'}></img>
        </motion.div>
        <div className='space-y-10 px-10 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> {" "} background..</h4>
          <p className='text-base overflow-hidden'>I am Anurag👑. I'm a Computer Science student at the Osmania University. I am enthusiastic person who genuinely wants to develop the necessary skills and qualities to have a successful career and future💯. As a result, I enjoy building products and exploring fascinating topics. You can check some of them out here.</p>
        </div>
    </motion.div>
  )
}

export default About