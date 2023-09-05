import React from "react"

export default function Header() {
    return (
        <header className="fixed bottom-0 w-full z-10 ">
            <div className="container mx-auto ">
                <div className="flex items-center justify-center mx-auto w-7/12 bg-[#176B87] h-[5rem] border-x-4 border-t-4 border-[#053B50] rounded-t-lg shadow-2xl backdrop-blur-lg">

                    <h1 className="text-xl font-bold text-black">My Website</h1>
                </div>
            </div>
        </header>

    )
};

