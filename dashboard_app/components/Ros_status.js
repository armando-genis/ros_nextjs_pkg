import React from "react"

import { BsBroadcastPin, BsWebcamFill } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { FaCarAlt } from "react-icons/fa";

import { MdFlipCameraAndroid } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa6";
export default function Ros_status(props) {
    const { connected, pointCloudData } = props;

    // const timestampInSeconds = pointCloudData.header.stamp.sec;
    // const date = new Date(timestampInSeconds * 1000);
    // const humanReadableDate = date.toUTCString();

    // pointCloudData.header.stamp.sec, you're accessing the number of seconds part of that timestamp. If it returns 1693069563, it indicates that the point cloud data was timestamped approximately 53.6 years after the epoch (January 1, 1970).

    // let timeAgoString = "Waiting for data..."; // Default message
    // let backgroundColor = "bg-[#b91c1c]";
    // let backgroundColor_front = "bg-[#ef4444]";

    // const DATA_TIMEOUT_SECONDS = 10;

    // if (pointCloudData && pointCloudData.header && pointCloudData.header.stamp) {

    //     // Get the current time in seconds since the epoch
    //     const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

    //     // Determine how many seconds ago the data was received
    //     const secondsAgo = currentTimestampInSeconds - pointCloudData?.header.stamp.sec;

    //     if (secondsAgo < 60) {
    //         timeAgoString = `${secondsAgo} seconds ago`;
    //         backgroundColor = "bg-[#1FFF53]";
    //         backgroundColor_front = "bg-[#00E034]";
    //     } else if (secondsAgo < 3600) { // Less than an hour
    //         timeAgoString = `${Math.floor(secondsAgo / 60)} minutes ago`;
    //         backgroundColor = "bg-[#1FFF53]";
    //         backgroundColor_front = "bg-[#00E034]";
    //     } else {
    //         // You can expand this further for days, weeks, etc.
    //         timeAgoString = `${Math.floor(secondsAgo / 3600)} hours ago`;
    //         backgroundColor = "bg-[#1FFF53]";
    //         backgroundColor_front = "bg-[#00E034]";
    //     }
    //     // Check for data timeout
    //     if (secondsAgo > DATA_TIMEOUT_SECONDS) {
    //         timeAgoString = "Data not received for too long!";
    //         backgroundColor = "bg-[#b91c1c]"; // red indicating data hasn't been received
    //         backgroundColor_front = "bg-[#ef4444]";
    //     }
    // }


    let timeAgoString = "Waiting for data..."; // Default message
    let backgroundColor = "bg-[#b91c1c]";
    let backgroundColor_front = "bg-[#ef4444]";


    if (pointCloudData) {

        // Get the current time in seconds since the epoch
        const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

        // Determine how many seconds ago the data was received
        const secondsAgo = currentTimestampInSeconds - pointCloudData?.header.stamp.sec;

        if (secondsAgo < 60) {
            timeAgoString = `${secondsAgo} seconds ago`;
            backgroundColor = "bg-[#1FFF53]";
            backgroundColor_front = "bg-[#00E034]";
        } else if (secondsAgo < 3600) { // Less than an hour
            timeAgoString = `${Math.floor(secondsAgo / 60)} minutes ago`;
            backgroundColor = "bg-[#1FFF53]";
            backgroundColor_front = "bg-[#00E034]";
        } else {
            // You can expand this further for days, weeks, etc.
            timeAgoString = `${Math.floor(secondsAgo / 3600)} hours ago`;
            backgroundColor = "bg-[#1FFF53]";
            backgroundColor_front = "bg-[#00E034]";
        }

    }

    return (
        <div className="relative h-full w-full flex flex-col relative space-y-1 p-4">

            <div className=" w-full h-full flex flex-col justify-center items-center space-y-2">
                <div className="text-[1.5rem] font-bold text-[#71717A] flex flex-row w-full justify-center items-center space-x-2">

                    <div className="text-[#D4D4D8]">{connected ? "Connected to ROS" : "Not connected to ROS"} </div>
                </div>

                <span className="absolute flex h-3 w-3 top-1 right-[1rem]">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${backgroundColor} opacity-75`} ></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${backgroundColor_front}`}></span>
                </span>

                <div className="w-full h-full flex flex-row ">
                    <div className="w-full h-full basis-2/5 flex flex-col p-2 justify-between">
                        {/* Lidar */}
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <div className="h-[2.7rem] w-[2.7rem] bg-[#111827] rounded-full grid place-items-center border-4 border-[#0f172a]">
                                    <FiTarget className=" absolute w-[1.8rem] h-[1.8rem] text-[#D4D4D8]" />
                                </div>
                            </div>
                            <div className="basis-3/4 grid place-items-center">
                                <h1 className="font-bold text-lg text-[#D4D4D8]"> LIDAR</h1>
                            </div>
                        </div>
                        {/* camara */}
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <div className="h-[2.7rem] w-[2.7rem] bg-[#111827] rounded-full grid place-items-center border-4 border-[#0f172a]">
                                    <BsWebcamFill className=" absolute w-[1.8rem] h-[1.8rem] text-[#D4D4D8]" />
                                </div>
                            </div>
                            <div className="basis-3/4 grid place-items-center">
                                <h1 className="font-bold text-lg text-[#D4D4D8]"> CAMARA</h1>
                            </div>
                        </div>
                        {/* IMU */}
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <div className="h-[2.7rem] w-[2.7rem] bg-[#111827] rounded-full grid place-items-center border-4 border-[#0f172a]">
                                    <MdFlipCameraAndroid className=" absolute w-[1.8rem] h-[1.8rem] text-[#D4D4D8]" />
                                </div>
                            </div>
                            <div className="basis-3/4 grid place-items-center">
                                <h1 className="font-bold text-lg text-[#D4D4D8]"> IMU</h1>
                            </div>
                        </div>
                        {/* GPS */}
                        <div className="flex flex-row">
                            <div className="basis-1/4">
                                <div className="h-[2.7rem] w-[2.7rem] bg-[#111827] rounded-full grid place-items-center border-4 border-[#0f172a]">
                                    <FaSatelliteDish className=" absolute w-[1.8rem] h-[1.8rem] text-[#D4D4D8]" />
                                </div>
                            </div>
                            <div className="basis-3/4 grid place-items-center ">
                                <h1 className="font-bold text-lg text-[#D4D4D8]"> GPS</h1>
                            </div>
                        </div>

                    </div>
                    <div className="basis-3/5 w-full h-full  rounded-lg flex justify-center items-center">
                        <div className="h-[12rem] w-[12rem]  grid place-items-center relative">

                            {/* Lidar & gps */}
                            <div className="absolute h-[12rem] w-[12rem] rounded-full border-[1.2rem] border-[#5b21b6] z-[12] "></div>
                            <div className="absolute h-[11.2rem] w-[11.2rem] rounded-full border-[0.4rem] border-[#a78bfa] z-[13]"></div>
                            <div className="absolute h-[2.7rem] w-[2.7rem] bg-[#5b21b6] left-[0.8rem] top-[1rem] z-[14] rounded-full grid place-items-center border-4 border-[#0f172a]">
                                <FiTarget className=" absolute w-[1.8rem] h-[1.8rem] text-[#f8fafc]" />
                            </div>
                            <div className="absolute h-[2.7rem] w-[2.7rem] bg-[#5b21b6] right-[0.8rem] bottom-[1rem] z-[14] rounded-full grid place-items-center border-4 border-[#0f172a] ">
                                <FaSatelliteDish className=" absolute w-[1.8rem] h-[1.8rem] text-[#f8fafc]" />
                            </div>
                            {/* Camara */}
                            <div className="absolute h-[8.5rem] w-[8.5rem] rounded-full border-[1.2rem] border-[#1e3a8a] z-[12]"></div>
                            <div className="absolute h-[7.7rem] w-[7.7rem] rounded-full border-[0.4rem] border-[#2563eb] z-[13]"></div>
                            <div className="absolute h-[2.7rem] w-[2.7rem] bg-[#1e3a8a] left-[1.5rem] top-[6.5rem] z-[14] rounded-full grid place-items-center border-4 border-[#0f172a]">
                                <BsWebcamFill className=" absolute w-[1.8rem] h-[1.8rem] text-[#f8fafc]" />
                            </div>
                            {/* IMu */}
                            <div className="absolute h-[5.2rem] w-[5.2rem] rounded-full border-[1.2rem] border-[#b91c1c] z-[12]"></div>
                            <div className="absolute h-[4.7rem] w-[4.7rem] rounded-full border-[0.4rem] border-[#ef4444] z-[13]"></div>
                            <div className="absolute h-[2.7rem] w-[2.7rem] bg-[#b91c1c] left-[6.5rem] top-[4.5rem] z-[14] rounded-full grid place-items-center border-4 border-[#0f172a] ">
                                <MdFlipCameraAndroid className=" absolute w-[1.8rem] h-[1.8rem] text-[#f8fafc]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                        <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                        </svg>
                        {timeAgoString}
                    </span>
                    <span className=" text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300">Quick scan</span>
                </div>

                {/* {pointCloudData ? `${pointCloudData.header.stamp.sec}s ${pointCloudData.header.stamp.nanosec}ns` : "No data yet"} */}
            </div>






        </div>
    )
};

