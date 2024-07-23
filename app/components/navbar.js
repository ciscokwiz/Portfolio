"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from "next/link";
import { useEffect } from 'react';
import './navbar.css'






export default function Navbar(){

    const darkMode =() =>{
        let body = document.querySelector('body')

        body.classList.toggle('dark')

    }



    return(
        <div className='flex justify-between nav'>
            <div>
                <a className='text-l mr-1 text-blue-900 cursor-default font-bold' href='/'>My Portfolio</a>
            </div>
            <div>
                <ul className=' flex justify-evenly gap-3'>
                    <li><button onClick={darkMode}><BsFillMoonStarsFill className=' fill-black cursor-pointer mt-1 mode'/></button></li>
                    <li>
                        <Link className=' bg-cyan-500 px-1 py-1 text-white rounded-md ml-5 hover:bg-slate-400 cursor-pointer resume' href="https://docs.google.com/document/d/182mmhX3ae6CSwpFyhrKKbbPj-YjeIN_trmnBnB_HB_Y/edit?usp=sharing">Resume</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}