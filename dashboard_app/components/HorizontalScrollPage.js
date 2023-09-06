"use client"
import React, { useEffect, useRef } from 'react';


const HorizontalScrollPage = ({ children }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWheel = (event) => {
            if (event.deltaY !== 0) {
                containerRef.current.scrollLeft += event.deltaY;
                event.preventDefault();
            }
        };

        const container = containerRef.current;
        container.addEventListener('wheel', handleWheel);

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div ref={containerRef} className="horizontal-scroll-wrapper">
            {children}
        </div>
    );
};

export default HorizontalScrollPage;
