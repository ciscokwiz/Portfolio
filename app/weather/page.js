"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from "next/link";




async function getWeather(){
    const city = document.getElementById("cityInput").value;
    const apiKey = "35ef3d6f763967c6740eded3d117870e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(url) 
        .then(Response => Response.json())
        .then(data => {
            const Info = document.getElementById("info");
            Info.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} km/hr</p>
            `;
        })
        .catch(error =>{
            console.error( "Error fetching weather data:", error);
            const Info = document.getElementById( "info");
            Info.innerHTML = "<p>Failed to fetch weather data. Please try again.</p>";
        })
}


export default function Resume(){

    

    return(
        <section className=' bg-white'>
            <nav className=' py-6 mb-2 flex justify-between mx-10'>
            <h1 className='text-xl mr10` text-blue-900 ' >My Portfolio</h1>
            <ul className=' flex justify-evenly'>
                <li><BsFillMoonStarsFill className=' cursor-pointer text-2xl'/></li>
                <li>
                <Link className=' bg-cyan-400 px-4 py-2 text-white rounded-md ml-10 hover:bg-slate-400' href="/resume">Resume</Link>
                </li>
            </ul>
            </nav>
            <main className="h-screen flex flex-col items-center gap-3 pt-20 text-center">
                <div className="h-auto w-auto text-center flex flex-col gap-3 mt-40 bg-purple-300 rounded-md border px-3">
                    <h2 className="mt-5 font-mono">Get Weather</h2>
                    <input className="rounded-md border pl-3 py-1 px-10" type="text" id="cityInput"  placeholder="Enter City"/>
                    <button className="rounded-md text-sm font-mono text-s border px-1 py-1 text-center hover:text-cyan-300" onClick={getWeather}>Get info</button>
                    <div className="mb-5 text-cyan-400" id="info"></div>
                </div>
            </main>
        </section>

    )
}