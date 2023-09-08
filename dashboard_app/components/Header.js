"use client"
import { BsFillCarFrontFill, BsFillPlayFill, BsFillSunFill } from "react-icons/bs";

import React, { useState, useEffect } from 'react';


export default function Header() {
    const d = new Date();
    let day = d.getDate();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let month = d.getMonth();
    let year = d.getFullYear();
    let fullhour = `${hour}:${minutes}`
    let monthNumber = month;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthAbbreviation = monthNames[monthNumber];

    let fullDate = `${monthAbbreviation} ${day} of ${year}`

    const [angle, setAngle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prevAngle => (prevAngle + 5) % 360);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed bottom-0 w-full z-10 ">
            <div className="container mx-auto py-7">
                <div className="justify-center mx-auto w-7/12  h-[7rem]  rounded-lg border-zinc-100/50 shadow-2xl backdrop-blur-lg">
                    <div className="flex flex-row space-x-4 h-full">
                        <div className="basis-1/4 bg-[#0b0b0c] rounded shadow-md w-full h-full p-3 border-2 border-zinc-100/25">
                            <div className="flex flex-col items-center justify-center w-full h-full text-white">
                                <h1 className="mt-[-1rem] text-[#ff0005] font-bold text-[3rem]">{fullhour}</h1>
                                <p className="mt-[-1rem] text-lg "> {fullDate}</p>
                            </div>

                        </div>
                        <div className="basis-3/4 flex flex-row bg-[#0b0b0c] rounded shadow-md w-full h-full p-3 border-2 border-zinc-100/25">
                            <div className="basis-2/5 w-full h-full flex flex-row">

                                <div className="basis-1/2 h-full grid place-items-center relative">
                                    <div className="relative h-[5rem] w-[5rem] grid place-items-center">
                                        <div className="absolute h-[1rem] w-[1rem] bg-[#0b0b0c] top-0 z-[13]"></div>
                                        <div className="absolute h-[0.5rem] w-[0.5rem] bg-[#f8fafc] top-0 z-[13] rounded-full"></div>

                                        <div className="absolute h-[1rem] w-[1rem] bg-[#0b0b0c] bottom-0 z-[13]"></div>
                                        <div className="absolute h-[0.5rem] w-[0.5rem] bg-[#f8fafc] bottom-0 z-[13] rounded-full"></div>

                                        <div className="absolute h-[1rem] w-[1rem] bg-[#0b0b0c] left-0 z-[13]"></div>
                                        <div className="absolute h-[0.5rem] w-[0.5rem] bg-[#f8fafc] left-0 z-[13] rounded-full"></div>

                                        <div className="absolute h-[1rem] w-[1rem] bg-[#0b0b0c] right-0 z-[13]"></div>
                                        <div className="absolute h-[0.5rem] w-[0.5rem] bg-[#f8fafc] right-0 z-[13] rounded-full"></div>

                                        <div className="absolute h-[5rem] w-[5rem] rounded-full border-[0.3rem] border-[#374151] z-[12]"></div>

                                        <div className="absolute h-[3rem] w-[3rem] rounded-full z-[14] grid place-items-center">
                                            <h1 className=" absolute font-bold text-lg text-[#f8fafc]"> {angle}°</h1>
                                            <div className="absolute w-[6.5rem] h-[0.5rem]  transition-transform duration-500" style={{ transform: `rotate(${angle}deg)` }}>
                                                <div className="absolute w-[2rem] h-[2rem] rounded-full left-0 flex items-center justify-center z-[14]">
                                                    <BsFillPlayFill className="w-7 h-7 text-[#0ea5e9] rotate-[55deg]	translate-y-[-0.7rem]" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div className="basis-1/2  h-full grid place-items-center">
                                    <div className="relative h-[5rem] w-[6rem] grid place-items-center">





                                        <div className="absolute h-[5rem] w-[5rem] rounded-full border-[0.3rem] border-[#f59e0b] z-[12]"></div>

                                        <div className="absolute h-[2.5rem] w-full bg-[#0b0b0c] bottom-0 z-[13]">

                                            <div className="absolute h-[1rem] w-[1rem] bg-[#0b0b0c] left-0 z-[13]"></div>
                                            <div className="absolute h-[0.5rem] w-[0.5rem] bg-[#f8fafc] left-1 z-[13] rounded-full"></div>

                                            <div className="absolute h-[1rem] w-[1rem] bg-[#0b0b0c] right-0 z-[13]"></div>
                                            <div className="absolute h-[0.5rem] w-[0.5rem] bg-[#f8fafc] right-1 z-[13] rounded-full"></div>
                                        </div>

                                        <div className="absolute h-[4rem] w-[3rem] bottom-0 z-[13] grid place-items-center">
                                            <h1 className="font-bold text-lg text-[#f8fafc]"> 25°c</h1>
                                            <BsFillSunFill className="w-7 h-7 text-[#f59e0b]" />
                                        </div>



                                    </div>
                                </div>

                                {/* <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ring-4 ring-indigo-700">
                                    <WiDaySunnyOvercast className=" absolute w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center ">
                                    <p>Cloudy</p>
                                    <p>20°</p>
                                </div> */}
                            </div>
                            <div className=" basis-3/5 w-full h-full border-zinc-800 flex flex-col justify-center space-y-2">

                                <div className="flex flex-row items-center justify-between text-white">
                                    <div className=" flex space-x-2 flex items-center justify-center">
                                        <div className="w-[2rem] h-[2rem] bg-[#5b21b6] flex items-center justify-center rounded-lg">
                                            <BsFillCarFrontFill className="w-6 h-6 text-white" />
                                        </div>
                                        <h1 className="font-light text-sm"> <span className="font-bold text-lg">6</span> min</h1>
                                    </div>
                                    <h1 className="font-bold text-lg"> <span className="font-light text-sm ">get off after</span> park lane</h1>

                                </div>
                                <div className="relative bg-[#5b21b6] h-[2.5rem] w-full rounded-full p-1 flex items-center z-[12]">  {/* Outer container */}
                                    <div className="w-full h-1 px-3 rounded-full">
                                        <div
                                            className="h-full bg-[#5b2196] transition-all duration-500 ease-out z-[14]" // Updated duration from 100 to 500
                                            style={{ width: `${20}%` }}

                                        ></div>
                                        <div
                                            className="absolute top-1/2 transform -translate-y-1/2 bg-[#a78bfa] w-7 h-7 rounded-full flex items-center justify-center z-[14]"
                                            style={{ left: `calc(${20}% - 0.5rem)` }}
                                        >
                                            <div className="w-4 h-4 bg-white rounded-full"></div>

                                        </div>


                                    </div>
                                    <div className="absolute bg-[#8b5cf6] w-[2.5rem] h-[2rem] rounded-full  right-1 flex items-center justify-center z-[14]">
                                        <BsFillCarFrontFill className="w-6 h-6 text-white" />

                                    </div>
                                    <div className="absolute  w-full h-1 px-3 z-[13]">
                                        <div className="bg-[#8b5cf6] h-1">
                                        </div>
                                    </div>
                                    <div className="absolute  w-full h-1 px-3 flex items-center justify-center z-[13]">
                                        <div className="w-5 h-5 bg-[#5b21b6] rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
};

// Se mostrara el clima, bateria y lugar donde se encuentra el robot
