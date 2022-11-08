import React from 'react'
import Link from 'next/link'


type Props = {}

function ProjectCard1({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
  w-[265px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <div className='px-0 md:px-5'>
        {/* <h4 className='text-4xl font-light'>NewBee</h4> */}
        <p className='font-bold text-2xl '>Travel Form</p>
        <div className='flex space-x-2 my-2'>
            <img className='h-10 w-10 rounded-full' src='html.png'
            ></img>
            <img className='h-10 w-10 rounded-full' src='css.png'
            ></img>
            <img className='h-10 w-10 rounded-full' src='js.png'
            ></img>
            <img className='h-10 w-10 rounded-full' src='php.png'
            ></img>
            <img className='h-10 w-10 rounded-full' src='sql.png'
            ></img>
        </div>
        {/* <p className='uppercase py-5 text-gray-300'>Started work..-Ended</p> */}
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Created a Basic Form from scratch.</li>
            <li>Collects the data and sends to server.</li>
            <li>Tech used: HTML, CSS, JS, PHP, MySql.
</li>
            
        </ul>
        <Link href='https://arctic-ways.000webhostapp.com/index.html'><button className="heroButton flex flex-col my-5">Link</button></Link>
    </div>
    </article>
  )
}

export default ProjectCard1