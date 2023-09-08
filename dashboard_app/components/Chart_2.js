"use client"
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js';

// Register necessary elements for Chart.js
Chart.register(LinearScale, PointElement, LineElement, CategoryScale);

const Chart_2 = ({ data_fetching }) => {
    const dateLocal = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const [array, setArray] = useState([1, 3, 3, 5, 2, 3, 5]);
    const [count, setCount] = useState(0);


    const [chartData, setChartData] = useState({
        labels: dateLocal,
        datasets: [{
            label: 'Sales $',
            data: array,
            borderColor: 'green',  // Made the chart line purple
            backgroundColor: 'rgba(128,0,128,0.7)',  // Made the background more purple-ish
            fill: true,
            pointRadius: 2,
            pointHitRadius: 4,
            pointBackgroundColor: 'mediumblue',
            borderWidth: 5,
            tension: 0.5,
        }]
    });

    const chartOptions = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                display: true,
                ticks: {
                    color: "#F5F0E0",
                    font: {
                        size: 12
                    }
                },
                grid: {
                    display: false  // Remove grid lines
                }
            },
            x: {
                display: true,  // Display labels on x-axis
            }
        }
    };

    useEffect(() => {
        // Update array with new data_fetching
        const newArray = [...array, data_fetching?.rpm];
        if (newArray.length > 7) {
            newArray.shift();
        }
        setArray(newArray);
        setCount(count + 1);

    }, [data_fetching]);



    return (
        <div className="w-full h-full">
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default Chart_2;
