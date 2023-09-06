import React from "react"
import CarVisualization from "./CarVisualization"
export default function Dashboard_ros() {
    return (
        <div className=" h-5/6 mx-auto w-11/12 grid grid-cols-4 gap-4 grid-rows-2 p-7">

            <div className="col-start-2 col-end-4 row-start-1 row-end-3 bg-gray-200 p-4 rounded shadow-md z-[3]">
                <CarVisualization />
            </div>

            <div className=" bg-gray-200 p-4 rounded shadow-md">
                <p>Card Text</p>
            </div>

            <div className=" bg-gray-200 p-4 rounded shadow-md">
                <p>Card Text</p>
            </div>


        </div>
    )
};

