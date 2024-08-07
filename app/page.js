'use client'

import {useLayoutEffect, useState, useEffect} from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail
} from 'react-icons/ai';
import Image from "next/legacy/image";
import waveAnimation from '../public/dev-ed-wave.png';
import './page.css';
import Navbar from './components/navbar'
import Footer from './components/footer'



export default function Home() {

  useEffect( ()=>{
    window.addEventListener('scroll', ()=>{
      let nav = document.querySelector('nav');
      let top = document.querySelector('.top button');
      nav.classList.toggle('sticky', window.scrollY > 0)

      top.classList.toggle('returnToTop', window.scrollY > 0)
    })
    

    
  })

  const handleClick = ()=>{
    return(
      window.scrollTo({
        top: 0,
        behavior: "smooth"
        })
    )
  }

  
  

  return (
    <main className=' bg-white px-5 min-h-screen main' id='main'>

      <div className="top">
        <button onClick={handleClick}>
          <svg className="return-logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
          </svg>
        </button>
      </div>

      {/* This is the Hero section*/} 
      
      <section className=''>
        <nav >
          <Navbar />
        </nav>
        <div className=' py-10 font-mono' id='hero'>
          <div className=' mb-10 mt-20'>
            <p className='py-1 text-gray-800 hero-t1'>My name is</p>
            <h2 className=' text-blue-900 text-6xl pt-1 pb-2 font-extrabold my-3 hero-t2'>Ikezogwo Kosisochukwu</h2>
            <h2 className='text-blue-900 text-xl font-bold my-2'> 
              <div className="inner-heading hero-t3">
                <span>
                    Frontend Web Developer<br/>
                    React Developer<br/>
                    Node developer<br/>
    
                </span>
              </div>

            </h2>
            <p className='py-3 text-gray-800 hero-t1'>
              I'm software engineer based in Lagos, specializing in building (ocassionally designing) exceptional websites, applications, and everything in between.
            </p>          
          </div>
          <div className=' text-3xl flex gap-10 text-gray-900 py-3 cursor-pointer socialicon'>
            <a href= 'https://x.com/ciscoikz' target=""><AiFillTwitterCircle/></a>
            <a href='https://www.linkedin.com/in/kosiso-ikezogwo/' target=""><AiFillLinkedin/></a>
            <a href='https://ikezogwokosiso16@gmail.com' target=""><AiFillMail/></a>
          </div>
          <div className='wave'>
            <Image src={waveAnimation} layout='fill' objectFit='cover'/>
          </div>
        </div>
      </section>
    
      {/* This is the skills section*/}   
  
      <section className=' mb-5 mt-8' >
        <div className=' py-10 font-mono skill'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-3 hero-t3'>Skills</h2>
          <p className=' mt-1 pb-3 mb-8 text-gray-800 hero-t1'>Here are a few technologies i've been working with recently:</p>
          <div>
            <h2 className='  text-blue-900 text-m font-bold mb-2 mt-5'>Frontend Frameworks</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-800'>Html</li>
              <li className='py-1 hover:text-slate-800'>CSS</li>
              <li className='py-1 hover:text-slate-800'>Javascript</li>
              <li className='py-1 hover:text-slate-800'>React JS</li>
              <li className='py-1 hover:text-slate-800'>Next JS</li>
              <li className='py-1 hover:text-slate-800'>Tailwind</li>
              <li className='py-1 hover:text-slate-800'>Node JS</li>
            </ul>
          </div>
          <div>
            <h2 className='  text-blue-900 text-m font-bold mb-2 mt-5'>Version Control</h2>
            <ul className='py-1 pl-5 text-teal-800 8ext-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-800'>Git</li>
              <li className='py-1 hover:text-slate-800'>GitBucket</li>
            </ul>
          </div>
          <div>
            <h2 className='  text-blue-900 text-m font-bold mb-2 mt-5'>Tools</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-800'>VScode</li>
              <li className='py-1 hover:text-slate-800'>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* This is the Projects section*/}   

      <section className=' mb-5 mt-10'>
        <div className='py-10 font-mono flex flex-col gap-10'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-10'>Projects</h2>
          <div className=' gap-10 flex-row justify-between phone' >
            <div className=' text-center shadow-2xl rounded-xl p-10 bg-gray-400 card1' >
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-1 pt-1'>Webpage</h2>
              <h1 className='logo'>Hair<span className="hair-logo">Shades</span></h1>
              <a className=' project-link bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="https://github.com/ciscokwiz/interactivity">Open</a>
            </div>
            <div className=' text-center shadow-lg rounded-xl p-10 card2'>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-1 pt-1'>Weather API</h2>
              <h1 className='text-black logo'>Get <span className="weather-logo">Weather</span></h1>
              <a className=' project-link bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="/weather">Open</a>
            </div>
            <div className=' text-center shadow-lg rounded-xl p-10  bg-gray-400 card1'>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-1 pt-1'>Form</h2>
              <h1 className='logo'>Vest<span className="signin-logo"> Login</span></h1>
              <a className=' project-link bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="https://github.com/ciscokwiz/login-page">Open</a>
            </div>
          </div>
        </div>
      </section>

       {/* This is the Contacts section*/}   
     
      <section className='mb-10 mt-10'>
        <div className='py-10 font-mono'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-4'>Contact Me</h2>
          <div className=' mt-7 ml-5 flex flex-col pt-5'>
            <input className=' my-3 h-10 max-w-80 rounded pl-5 text-gray-900 bg-gray-300' id='contact-info name' type="text" placeholder='Your name'/>
            <input className=' my-3 h-10 max-w-80 rounded pl-5 text-gray-900 bg-gray-300' id='contact-info image' type="email" placeholder='Email address'/>
            <input className=' my-5 h-20 max-w-80 rounded pl-5 text-gray-900 bg-gray-300' id='contact-info message' type="text" placeholder='Message'/>
            <button className=' bg-cyan-500 px-1 py-1 text-white rounded-md hover:bg-slate-400 min-h-8 max-w-20 text-center mt-5 send' formAction=''>Send</button>
          </div>
        </div>
      </section>

      {/* This is the Footer section*/} 

      <section className="footer">
        <Footer/>
      </section>  


    </main>
  ); 
}
