"use client"
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';



export default function HorizontalScrollPage() {
    const scrollContainer = useRef(null);

    let scrollAmount = 0;

    const smoothScroll = () => {
        scrollContainer.current.scrollLeft += scrollAmount / 5;
        if (Math.abs(scrollAmount) > 1) {
            scrollAmount *= 0.8;
            requestAnimationFrame(smoothScroll);
        } else {
            scrollAmount = 0;
        }
    };

    const handleScroll = (e) => {
        scrollAmount += e.deltaY;
        e.preventDefault(); // Prevent the page from scrolling vertically
        requestAnimationFrame(smoothScroll);
    };

    useEffect(() => {
        const container = scrollContainer.current;
        container.addEventListener('wheel', handleScroll, { passive: false });

        // Clean up the event listener when the component is unmounted
        return () => container.removeEventListener('wheel', handleScroll);
    }, []); // The empty array causes this effect to run only when the component is mounted


    return (
        <div className="relative w-full h-full">
            <ProgressBar scrollContainer={scrollContainer} />
            <Header />

            <div className="horizontalScroll h-screen bg-[#000] relative" ref={scrollContainer}>


            </div>
        </div>
    )
};
