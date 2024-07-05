"use client"
import { FaRegCopyright } from "react-icons/fa";



export default function Footer(){
    return(
        <footer className=" text-gray-900">
            <div className="container mx-auto flex flex-row justify-center place-content-center align-middle gap-3">
                <i className="mt-1 fill-blue-800"><FaRegCopyright/></i>
                <h5>Created by Kosi</h5>
            </div>
        </footer>
    )
}