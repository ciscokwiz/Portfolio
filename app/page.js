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
    <main className=' bg-gray-300 px-10 min-h-screen'>

      <div className="top">
        <button onClick={handleClick}>
          <svg className="return-logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
          </svg>
        </button>
      </div>

      {/* This is the Hero section*/} 
      
      <section className=' min-h-screen'>
        <nav >
          <Navbar />
        </nav>
        <div className=' py-10 px-20 font-mono'>
          <div className=' mb-5 mt-20'>
            <p className='py-1 text-gray-800'>My name is</p>
            <h2 className=' text-blue-900 text-6xl pt-1 pb-2 font-extrabold my-3'>Ikezogwo Kosisochukwu</h2>
            <h2 className='text-blue-900 text-xl font-bold my-2'> 
              <div className="inner-heading">
                <span>
                    Frontend Web Developer<br/>
                    React Developer<br/>
                    Node developer<br/>
    
                </span>
              </div>

            </h2>
            <p className='py-3 text-gray-800'>
              I'm software engineer based in Lagos, NG specializ ing in building (and ocassionally designing) exceptional websites, applications, and everything in between
            </p>          
          </div>
          <div className=' text-3xl flex gap-10 text-gray-900 py-3 cursor-pointer'>
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
  
      <section className='px-5 my-5' >
        <div className=' p-10 font-mono'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-2'>Skills</h2>
          <p className=' mt-1 pb-3 text-gray-800'>Here are a few technologies i've been working with recently:</p>
          <div>
            <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5'>Frontend Frameworks</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-600'>Html</li>
              <li className='py-1 hover:text-slate-600'>CSS</li>
              <li className='py-1 hover:text-slate-600'>Javascript</li>
              <li className='py-1 hover:text-slate-600'>React JS</li>
              <li className='py-1 hover:text-slate-600'>Next JS</li>
              <li className='py-1 hover:text-slate-600'>Tailwind</li>
              <li className='py-1 hover:text-slate-600'>Node JS</li>
            </ul>
          </div>
          <div>
            <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5'>Version Control</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-600'>Git</li>
              <li className='py-1 hover:text-slate-600'>GitBucket</li>
            </ul>
          </div>
          <div>
            <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5'>Tools</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-600'>VScode</li>
              <li className='py-1 hover:text-slate-600'>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* This is the Projects section*/}   

      <section className='px-5 my-5'>
        <div className='p-10 font-mono flex flex-col gap-10'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-4'>Projects</h2>
          <div className=' lg:flex gap-10 flex-row justify-evenly' >
            <div className=' text-center shadow-2xl rounded-xl p-10 bg-gray-400' >
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5 pt-2'>Webpage</h2>
              <h1 className='logo'>Hair<span className="hair-logo">Shades</span>.co</h1>
              <h3 className=' text-teal-800 text-m my-9'>HairShades.co website</h3>
              <a className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="https://github.com/ciscokwiz/interactivity">Open</a>
            </div>
            <div className=' text-center shadow-lg rounded-xl p-10 '>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5 pt-2'>Weather API</h2>
              <h1 className='logo'>Get<span className="weather-logo">Weather</span> App</h1>
              <h3 className=' text-teal-800 text-m my-5'>Weather API Page</h3>
              <a className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="/weather">Open</a>
            </div>
            <div className=' text-center shadow-lg rounded-xl p-10  bg-gray-400'>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5 pt-2'>Form</h2>
              <h1 className='logo'>Vest<span className="signin-logo"> Login</span> Page</h1>
              <h3 className=' text-teal-800 text-m my-5'> Signin Page</h3>
              <a className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="https://github.com/ciscokwiz/login-page">Open</a>
            </div>
          </div>
        </div>
      </section>

       {/* This is the Contacts section*/}   
     
      <section className=''>
        <div className='p-10 font-mono'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-4'>Contact Me</h2>
          <div className=' mt-7 ml-5 flex flex-col'>
            <input className=' my-5 h-10 max-w-80 rounded pl-5' type="text" placeholder='Your name'/>
            <input className=' my-5 h-10 max-w-80 rounded pl-5' type="email" placeholder='Email address'/>
            <input className=' my-5 h-20 max-w-80 rounded pl-5' type="text" placeholder='Message'/>
            <button className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400 h-10 w-20 text-center' formAction=''>Send</button>
          </div>
        </div>
      </section>
    </main>
  ); 
}
