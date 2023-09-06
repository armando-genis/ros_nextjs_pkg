import React, { useEffect, useState } from 'react';

const ProgressBar = ({ scrollContainer }) => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        if (!scrollContainer.current) return;
        const totalScroll = scrollContainer.current.scrollWidth - scrollContainer.current.clientWidth;
        const currentScroll = scrollContainer.current.scrollLeft;
        const scrollPercentage = (currentScroll / totalScroll) * 100;
        setScroll(scrollPercentage);
    };

    useEffect(() => {
        const container = scrollContainer.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [scrollContainer]);

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-1">
            <div
                className="h-full bg-[#191D88] transition-all duration-500 ease-out" // Updated duration from 100 to 500
                style={{ width: `${scroll}%` }}

            ></div>
        </div>
    );
};

export default ProgressBar;
