"use client"
import React from "react"
import CarVisualization from "./CarVisualization"
import RosComponent from "../data/RosComponent"
import { useEffect, useState } from 'react';
import Vol_progressBar from "./Vol_progressBar";
import Ros_status from "./Ros_status";
import Chart_1 from "./Chart_1";
import Chart_2 from "./Chart_2";
export default function Dashboard_ros() {

    const { connected, pointCloudData } = RosComponent();

    let progress = 50;
    return (
        <div className=" h-5/6 mx-auto w-11/12 grid grid-cols-4 gap-4 grid-rows-2 p-7">

            <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-[#000] p-4 rounded shadow-md z-[3]">
                <CarVisualization pointCloudData={pointCloudData} />
            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 h-full w-full rounded shadow-md flex flex-col relative  height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">

                <Ros_status connected={connected} pointCloudData={pointCloudData} />

            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-row relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3] ">
                <div className="basis-1/2 h-full w-full">
                    <Vol_progressBar percentage={progress} />
                </div>
                <div className="basis-1/2 h-full flex flex-col justify-between p-4">
                    <div className="-space-y-1">
                        <h1 className="font-bold text-lg text-[#71717A]"> UPDATED</h1>
                        <h1 className="font-bold text-lg text-[#71717A]"> 10:35</h1>
                    </div>

                    <div className="-space-y-1">
                        <h1 className="font-bold text-[1rem] text-[#D4D4D8]"> Autonmous</h1>
                        <h1 className="font-bold text-[1rem] text-[#D4D4D8]"> car</h1>
                    </div>

                    <div className="-space-y-1">
                        <h1 className="font-bold text-2xl text-[#D4D4D8]"> 164 <span className="text-sm text-[#71717A]">mi</span></h1>
                    </div>

                    <div className="-space-y-1">
                        <h1 className="font-bold text-lg text-[#71717A]">3hr 48min</h1>
                        <h1 className="font-bold text-lg text-[#71717A]">Remaining</h1>
                    </div>

                </div>



            </div>

            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">

                <Chart_1 />

            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">
                <Chart_2 />
            </div>


        </div>
    )
};

