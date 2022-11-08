import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
    initial={{
      opacity:0,
    }}

    animate={{
      scale:[1,2,2,3,1],
      opacity:[1,0.2,0.4,0.8,0.1,1],
      borderRadius:["20%","20%","50%","80%","20%"]
    }}

    transition={{
      duration:2.5,
    }}
    className='relative flex justify-center items-center '>
        <div className='absolute border border-[#333333] rounded-full h-[180px] w-[180px] opacity-20 mt-57 
        animate-ping'/>
        <div className='rounded-full border border-[#f1ff2b] h-[150px] w-[150px] absolute  mt-57 animate-bounce
         '/> 
        <div className='rounded-full border border-[#e83db2] h-[250px] w-[200px] absolute mt-57 animate-pulse
          ' /> 
        <div className='rounded-full border border-[#12ff16] h-[400px] w-[450px] absolute opacity-20 mt-57 animate-pulse'/>

        <div className='rounded-full border border-[#ff0c0c] h-[450px] w-[300px] absolute mt-57 animate-bounce'/> 
    </motion.div>
  )
}

export default BackgroundCircles