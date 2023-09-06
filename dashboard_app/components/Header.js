import React from "react"

export default function Header() {
    return (
        <header className="fixed bottom-0 w-full z-10 ">
            <div className="container mx-auto py-7">
                <div className="justify-center mx-auto w-7/12 bg-zinc-50/70 h-[5rem] border-4 rounded-lg border-zinc-100/50 shadow-2xl backdrop-blur-lg">
                    <div className="flex flex-row space-x-4 h-full">
                        <div className="basis-1/4">
                            <div className="bg-gray-300 rounded shadow-md w-full h-full flex items-center justify-center">
                                <p>Clima</p>
                            </div>
                        </div>
                        <div className="basis-3/4 flex flex-row bg-gray-300 rounded shadow-md">

                            <div className=" basis-1/4 w-full h-full flex items-center justify-center border-zinc-800">
                                <p>batery</p>
                            </div>
                            <div className=" basis-3/4 w-full h-full flex items-center justify-center  border-zinc-800 ">
                                <p>place</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
};

// Se mostrara el clima, bateria y lugar donde se encuentra el robot
