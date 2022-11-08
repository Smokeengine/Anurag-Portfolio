import React from 'react'
import {motion} from 'framer-motion'
import Skill from '../components/Skill'
import Skill1 from '../components/Skill1'
import Skill2 from '../components/skill2'
import Skill3 from '../components/Skill3'
import Skill4 from '../components/Skill4'
import Skill5 from '../components/Skill5'
import Skill6 from '../components/Skill6'
import Skill7 from '../components/Skill7'

type Props = {}

function Skilss({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center
    '> 
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>

            hover over a Skills for concurrency proficiency
            </h3>
            <div className='grid grid-cols-3 gap-5 '>
               <Skill/>
               <Skill1/>
               <Skill2/>
               <Skill3/>
               <Skill4/>
               <Skill5/>
               <Skill6/>
               <Skill7/>
               {/* <Skill/>
               <Skill/>
               <Skill/>
               <Skill/> */}
            </div>
    </motion.div>
  )
}

export default Skilss