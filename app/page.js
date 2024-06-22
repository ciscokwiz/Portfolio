'use client'

import {useState} from 'react';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillMail
} from 'react-icons/ai';
import Image from 'next/image';
import waveAnimation from '../public/dev-ed-wave.png';
import next from '../public/next.svg';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from "next/link";


export default function Home() {

  const[textHover, settextHover] = useState('first')


  return (
    <main className=' bg-white'>

      {/* This is the Hero section*/} 
      
      <section className=' min-h-screen px-10'>
        <nav className=' py-6 mb-2 flex justify-between mx-10'>
          <h1 className='text-xl mr10` text-blue-900 ' >My Portfolio</h1>
          <ul className=' flex justify-evenly'>
            <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
            <li>
              <Link className=' bg-cyan-400 px-4 py-2 text-white rounded-md ml-10 hover:bg-slate-400' href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <div className=' p-10 font-mono'>
          <div className=' my-5'>
            <p className='py-1 text-gray-500'>My name is</p>
            <h2 className=' text-blue-900 text-5xl pt-2 pb-3 font-bold'>Ikezogwo Kosisochukwu</h2>
            <h2 className='text-blue-900 text-xl font-bold'>Frontend Web Developer</h2>
            <p className='py-3 text-gray-500'>
              I'm software engineer based in Lagos, NG specializ ing in building (and ocassionally designing) exceptional websites, applications, and everything in between
            </p>          
          </div>
          <div className=' text-3xl flex gap-10 text-gray-900 py-3 cursor-pointer'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillMail/>
          </div>
          <div className=' relative mx-auto bg-gray-900 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={waveAnimation} layout='fill' objectFit='cover'/>
          </div>
        </div>
      </section>
    
      {/* This is the skills section*/}     
      <section className='px-10'>
        <div className=' p-10 font-mono'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-2'>Skills</h2>
          <p className=' mt-1 pb-3 text-gray-500'>Here are a few technologies i've been working on recently:</p>
          <div>
            <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5'>Frontend Frameworks</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-400'>Html</li>
              <li className='py-1 hover:text-slate-400'>CSS</li>
              <li className='py-1 hover:text-slate-400'>Javascript</li>
              <li className='py-1 hover:text-slate-400'>React JS</li>
              <li className='py-1 hover:text-slate-400'>Next JS</li>
              <li className='py-1 hover:text-slate-400'>Tailwind</li>
              <li className='py-1 hover:text-slate-400'>Node JS</li>
            </ul>
          </div>
          <div>
            <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5'>Version Control</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-400'>Git</li>
              <li className='py-1 hover:text-slate-400'>GitBucket</li>
            </ul>
          </div>
          <div>
            <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5'>Tools</h2>
            <ul className='py-1 pl-5 text-teal-800 text-sm cursor-pointer'>
              <li className='py-1 hover:text-slate-400'>VScode</li>
              <li className='py-1 hover:text-slate-400'>Figma</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='px-10'>
        <div className='p-10 font-mono'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-4'>Projects</h2>
          <div className=' lg:flex gap-10 ' >
            <div className=' text-center shadow-lg rounded-xl p-10'>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5 pt-2'>Forms</h2>
              <Image src={next} className=' relative w-50 h-50 mb-10 mt-5'/>
              <h3 className=' text-teal-800 text-m my-5'>HairShades.co</h3>
              <a className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="#">Open</a>
            </div>
            <div className=' text-center shadow-lg rounded-xl p-10 '>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5 pt-2'>Weather API</h2>
              <Image src={next} className=' relative w-50 h-50 mb-10 mt-5'/>
              <h3 className=' text-teal-800 text-m my-5'>Weather Page</h3>
              <a className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="/weather">Open</a>
            </div>
            <div className=' text-center shadow-lg rounded-xl p-10 '>
              <h2 className='  text-blue-950 text-m font-bold mb-2 mt-5 pt-2'>Forms</h2>
              <Image src={next} className=' relative w-50 h-50 mb-10 mt-5'/>
              <h3 className=' text-teal-800 text-m my-5'>Vest Signin Page</h3>
              <a className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400' href="#">Open</a>
            </div>
          </div>

        </div>
      </section>
      <section className='px-10'>
        <div className='p-10 font-mono'>
          <h2 className='  text-blue-900 text-xl font-bold mt-4 mb-4'>Contact Me</h2>
          <div className=' mt-7 ml-5 flex flex-col'>
            <input className=' my-5 h-10 max-w-80 rounded pl-5' type="text" placeholder='Your name'/>
            <input className=' my-5 h-10 max-w-80 rounded pl-5' type="email" placeholder='Email address'/>
            <input className=' my-5 h-20 max-w-80 rounded pl-5' type="text" placeholder='Message'/>
            <button className=' bg-cyan-500 px-3 py-1 text-white rounded-md hover:bg-slate-400 h-10 w-20 text-center'>Send</button>
          </div>
        </div>
      </section>
    </main>
  );
}
 