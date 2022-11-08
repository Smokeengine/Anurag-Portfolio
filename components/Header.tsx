import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Resume from '../components/Resume'
type Props = {};

function Header({}: Props) {
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
    <header className="sticky p-5 top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1.5,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          url="https://instagram.com/_young_._thug_"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <div className="">
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center cursor-pointer text-gray-300"
        >
          
          
          
		

          <SocialIcon
            url="https://mail.google.com/mail/u/2/#inbox"
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="upper-case hidden md:inline-flex text-sm text-gray-400">
            GET IN TOUCH
          </p>
          
        </motion.div>
      </Link>
      </div>
      
    </header>
  );
}

export default Header;
