import React from 'react'
import {motion} from 'framer-motion'
import ExpeirenceCard from '../components/ExpeirenceCard'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>
        
        <div className='w-full flex items-center justify-center overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
        <ExpeirenceCard/>
        {/* <ExpeirenceCard/> */}
        </div>
        
       
        {/* experiencecard */}
        {/* experiencecard */}
        {/* experiencecard */}
        </motion.div>
  )
}

export default Experience