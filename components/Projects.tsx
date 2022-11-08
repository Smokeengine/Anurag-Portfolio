import React from 'react'
import ProjectCard from '../components/ProjectCard'
import {motion} from 'framer-motion'
import ProjectCard1 from './ProjectCard1';
import '../public/bg.png'

type Props = {};

function Projects({}: Props) {
  
  return (
    <div>
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center z-10'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory my-3 scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
      <ProjectCard/>
      <ProjectCard1/>
    </div>
    </motion.div>
    </div>
  )
}

export default Projects