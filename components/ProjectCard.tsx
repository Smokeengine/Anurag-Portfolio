import Link from 'next/link'
import React from 'react'

type Props = {}

function projectCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
  w-[265px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <div className='px-5 md:px-5 items-center justify-center'>
        {/* <h4 className='text-4xl font-light'>HandiKart</h4> */}
        <p className='font-bold text-2xl'><i>HandiKart.</i></p>
        <div className='flex space-x-2 my-2 ml-5'>
            <img className='h-10 w-10 rounded-full' src='wordpress.png'
            ></img>
             <img className='h-10 w-10 rounded-full' src='elementor.png'
            ></img>
             <img className='h-10 w-10 rounded-full' src='sql.png'
            ></img>
        </div>
        {/* <p className='uppercase py-5 text-gray-300'>Started work..-Ended</p> */}
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Built an E-Commerce website for<i> Artisan's.</i></li>
            <li>Developed using an Open-Source Content Management System(CMS).</li>
            <li>Tech used : Wordpress, PHP, MySql, Infinityfree.</li>
        </ul>
        
        <Link href='http://youngthug.42web.io/'><button className="heroButton flex flex-col my-5">Link</button></Link>
    
    </div>
    </article>
    
  )
}

export default projectCard