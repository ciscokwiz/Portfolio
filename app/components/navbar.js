"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from "next/link";






export default function Navbar(){
    return(
        <div className='flex justify-between'>
            <a className='text-xl mr-3 text-blue-900 cursor-default font-extrabold' href='/'>My Portfolio</a>
            <ul className=' flex justify-evenly'>
                <li><BsFillMoonStarsFill className=' fill-black cursor-pointer text-2xl'/></li>
                <li>
                    <Link className=' bg-cyan-500 px-4 py-2 text-white rounded-md ml-10 hover:bg-slate-400 cursor-pointer' href="https://docs.google.com/document/d/182mmhX3ae6CSwpFyhrKKbbPj-YjeIN_trmnBnB_HB_Y/edit?usp=sharing">Resume</Link>
                </li>
            </ul>
        </div>
    )

}