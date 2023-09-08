import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";

const Vol_progressBar = ({ percentage }) => {
    let backgroundColor = "";

    if (percentage > 75) {
        backgroundColor = "bg-green-500";
    } else if (percentage > 50) {
        backgroundColor = "bg-yellow-500";
    } else {
        backgroundColor = "bg-red-500";
    }

    return (
        <div className="relative flex flex-col items-center w-full h-full p-3">

            <div className="relative h-full w-[7rem] rounded-lg border-2 border-zinc-100/25">
                {/* bateria */}
                <div className="absolute w-full h-full bg-[#27272A] rounded-lg z-[5]"></div>
                {/* indicador */}
                <div className="absolute w-full h-full rotate-180 rounded-t-lg z-[7]">
                    <div className="absolute h-full w-full bg-[#1FFF53] rounded-t-lg " style={{ height: `${percentage}%` }}></div>
                </div>
                <div className="absolute w-full h-[3rem] bottom-0 z-[7] grid place-items-center">
                    <h1 className=" absolute font-bold text-lg text-[#000]"> {percentage}%</h1>
                </div>
                {/* 80% */}
                <div className="absolute w-full h-4/5 bg-[#00E034]/25 rounded-b-lg bottom-0 z-[6] border-t-4 border-[#1FFF53]/50">
                    <div className="absolute w-full h-[2rem] top-0 z-[5] grid place-items-center">
                        <h1 className=" absolute font-bold text-lg text-[#00A326]"> 80%</h1>

                    </div>
                </div>
                {/* icon% */}
                <div className="absolute w-full h-4/5 bottom-0 flex justify-center items-center z-[8]">
                    <div className="absolute w-[4rem] h-[4rem] bg-[#0b0b0c] rounded-full grid place-items-center border-4 border-[#1FFF53]">
                        <BsLightningChargeFill className="w-7 h-7 text-[#1FFF53]" />
                    </div>
                </div>

            </div>






            {/* <div className="w-[2rem] h-[1rem] bg-indigo-600 rounded-sm mb-1 "></div>
            <div className="w-[6rem] h-full bg-[#EFEFEF] rounded-lg rotate-180 border-4 border-indigo-600">
                <div
                    className={`h-full rounded-lg ${backgroundColor}`}
                    style={{ height: `${percentage}%` }}
                ></div>
            </div> */}


        </div>
    );
};

export default Vol_progressBar;
