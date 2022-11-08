import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


type Props = {};

function ContactMe({}: Props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gctj7k",
        "template_zo5nu9y",
        form.current,
        "gW2P6fBkCu0RyoT-N"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center md:px-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 pt-32">
        <h4 className="text-4xl font-semibold text-center ">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
      
      <div className="space-y-10">
        <div className="flex items-center space-x-5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-[#F7AB0A] animate-pulse"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xl">+91 9885286789</p>
        </div>
      
      
      <div className="flex items-center space-x-5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-[#F7AB0A] animate-pulse"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <p className="text-xl">anuragvemula99@gmail.com</p>
        </div>
      

      
        <div className="flex items-center space-x-5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 text-[#F7AB0A] animate-pulse"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="tetx-xl">Meerpet.</p>
        </div>
      

       
        <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className="flex space-x-2">
          
          <input type="text" placeholder="Name" name="user_name" className="contactinput"/>
          
          <input type="email" placeholder="E-Mail" name="user_email" className="contactinput"/>
          </div>
          
          <textarea name="message" placeholder="Message" className="contactinput"/>
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-sm text-black font-bold text-lg">
            <input type="submit" value="Submit" />
          </button>
        </form>
      </div> 
    </div>
    </div>
   
    
    
  );
}

export default ContactMe;
