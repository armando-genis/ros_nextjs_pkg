"use client"
import React from "react"
import CarVisualization from "./CarVisualization"
import RosComponent from "../data/RosComponent"
import { useEffect, useState } from 'react';

import { BsBroadcastPin } from "react-icons/bs";
export default function Dashboard_ros() {

    const { connected, pointCloudData } = RosComponent();
    // console.log(connected);
    return (
        <div className=" h-5/6 mx-auto w-11/12 grid grid-cols-4 gap-4 grid-rows-2 p-7">

            <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-[#000] p-4 rounded shadow-md z-[3]">
                <CarVisualization pointCloudData={pointCloudData} />

            </div>

            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">
                <div>
                    <div className="relative w-12 h-12 overflow-hidden bg-[#0D0F45] rounded-full grid place-items-center">
                        <BsBroadcastPin className=" absolute w-10 h-10 text-[#c93eaa]" />
                    </div>
                </div>
            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3] ">
                <p className="text-white">Card text one</p>
            </div>

            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">
                <p className="text-white">Card text one</p>
            </div>
            <div className="bg-[#0b0b0c] bg-opacity-50 p-4 rounded shadow-md flex flex-col relative overflow-hidden height-auto text-foreground box-border backdrop-blur-md rounded-lg saturate-100 z-[3]">
                <p className="text-white">Card text one</p>
            </div>


        </div>
    )
};

