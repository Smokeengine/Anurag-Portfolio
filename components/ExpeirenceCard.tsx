import React from 'react'
import '../public/adout.jpeg'
import {motion} from 'framer-motion'
import '../public/js.png'


type Props = {}

const ExpeirenceCard = (props: Props) => {
  return <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
  w-[265px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
{/* <div>
    <motion.img initial={{opacity:0,y:-100}} whileInView={{opacity:1}} transition={{duration:1.5}}
    
    className='h-32 w-32 rounded-full
    xl:w-[150px] xl:h-[150px] object-cover object-left' src="adout.jpeg" alt="" /></div> */}
    <div className='px-0 md:px-5'>
        <h4 className='text-4xl font-light'></h4>
        <p className='font-bold text-2xl '>New Bee🐝</p>
        {/* <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full' src='js.png'
            ></img>
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work..-Ended</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
        </ul>*/}
    </div> 
  </article>
}

export default ExpeirenceCard