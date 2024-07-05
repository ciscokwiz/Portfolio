"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from "next/link";






export default function Navbar(){
    return(
        <div className='flex justify-between'>
            <a className='text-xl mr-3 text-blue-900' href='/'>My Portfolio</a>
            <ul className=' flex justify-evenly'>
                <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
                <li>
                    <Link className=' bg-cyan-400 px-4 py-2 text-white rounded-md ml-10 hover:bg-slate-400' href="https://docs.google.com/document/d/182mmhX3ae6CSwpFyhrKKbbPj-YjeIN_trmnBnB_HB_Y/edit?usp=sharing">Resume</Link>
                </li>
            </ul>
        </div>
    )

}