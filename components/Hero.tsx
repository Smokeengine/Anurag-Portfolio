import { LayoutGroup } from 'framer-motion';
import React from 'react';
import { Cursor , useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles'
import '../public/anurag.jpeg'
import Link from 'next/link';
import {motion} from 'framer-motion'
import Image from 'next/image'

  

type Props = {};

export default function Hero({}: Props) {

    const  [text , count] = useTypewriter({
        words:["Hi, The Name's  Anurag Vemula ",
            "Guy, who Loves NM.tsx",
            "<ButLovestoCodeMore />"
    ],
        loop:true,
        delaySpeed:2000,
    });

    const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch('SamplePDF.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'resume.pdf';
				alink.click();
			})
		})
	}
    
  return (
    <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
        <BackgroundCircles/>
       
        <div>
               <img className='relative h-32 w-32 rounded-full mx-auto object-cover' 
        src={'anurag.jpeg'} alt=''></img>  
        {/* <Image src={'/anurag.jpeg'} height={'32px'} width={'32px'}></Image> */}

        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-20'>
                Software engineer
            </h2>
        <h1 className='text-sm lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>
                {text}
            </span>
            <Cursor cursorColor='#f7ab0a'/>
        </h1>
        <div className='pt-5'>
            <Link href='#about'><button className='heroButton'>About</button></Link>
            <Link href='#experience'><button className='heroButton'>Experience</button></Link>
            <Link href='#section'><button className='heroButton'>Skills</button></Link>
            <Link href='#project'><button className='heroButton'>Projects</button></Link>
            <button className="heroButton" onClick={onButtonClick}>RESUME</button>
           
            
            
            
            
        </div>
        </div>
       
        </div>
        
       
    </div>
  )
}