import React from "react"
import { WiDaySunnyOvercast } from "react-icons/wi";
import { BsFillCarFrontFill } from "react-icons/bs";
import RosComponent from "../data/RosComponent";

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





    return (
        <header className="fixed bottom-0 w-full z-10 ">
            <div className="container mx-auto py-7">
                <div className="justify-center mx-auto w-7/12 bg-zinc-50/70 h-[7rem] border-4 rounded-lg border-zinc-100/50 shadow-2xl backdrop-blur-lg">
                    <div className="flex flex-row space-x-4 h-full">
                        <div className="basis-1/4 bg-gray-300 rounded shadow-md w-full h-full p-3">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h1 className="mt-[-1rem] font-bold text-[3rem]">{fullhour}</h1>
                                <p className="mt-[-1rem] text-lg "> {fullDate}</p>
                            </div>

                        </div>
                        <div className="basis-3/4 flex flex-row bg-gray-300 rounded shadow-md w-full h-full p-3">
                            <div className=" basis-2/5 w-full h-full flex flex-row items-center justify-center">
                                <di>
                                    <RosComponent />
                                </di>
                                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ring-4 ring-indigo-700">
                                    <WiDaySunnyOvercast className=" absolute w-10 h-10" />
                                </div>

                                <div className="flex flex-col items-center justify-center ">
                                    <p>Cloudy</p>
                                    <p>20°</p>
                                </div>
                            </div>
                            <div className=" basis-3/5 w-full h-full border-zinc-800 flex flex-col justify-center space-y-2">

                                <div className="flex flex-row items-center justify-between ">
                                    <div className=" flex space-x-2">
                                        <div className="w-[2rem] h-[2rem] bg-indigo-600 flex items-center justify-center rounded-lg">
                                            <BsFillCarFrontFill className="w-6 h-6 text-white" />
                                        </div>
                                        <h1> 6 min</h1>
                                    </div>
                                    <h1> get off after park lane</h1>

                                </div>
                                <div className="relative bg-indigo-600/70 h-[2.5rem] w-full rounded-full p-1 flex items-center">  {/* Outer container */}
                                    <div className="w-full h-1">
                                        <div
                                            className="h-full bg-[#191D88] transition-all duration-500 ease-out" // Updated duration from 100 to 500
                                            style={{ width: `${20}%` }}

                                        ></div>
                                        <div
                                            className="absolute top-1/2 transform -translate-y-1/2 bg-[#191D88] w-4 h-4 rounded-full"
                                            style={{ left: `calc(${20}% - 0.5rem)` }}
                                        ></div>
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
