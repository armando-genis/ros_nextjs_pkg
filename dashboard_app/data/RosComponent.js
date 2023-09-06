"use client"
import { useEffect, useState } from 'react';
const ROSLIB = require('roslib');

function RosComponent() {
    const [ros, setRos] = useState(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const rosInstance = new ROSLIB.Ros({
            url: 'ws://localhost:9090' // Make sure the rosbridge_server is running on this address.
        });

        rosInstance.on('connection', () => {
            console.log('Connected to rosbridge WebSocket!');
            setConnected(true);
        });

        rosInstance.on('error', (error) => {
            console.log('Error connecting to rosbridge WebSocket: ', error);
        });

        rosInstance.on('close', () => {
            console.log('Connection to rosbridge WebSocket closed!');
            setConnected(false);
        });

        setRos(rosInstance);
    }, []);

    return (
        <div>
            {connected ? "Connected to ROS!" : "Not connected to ROS!"}
        </div>
    );
}

export default RosComponent;
