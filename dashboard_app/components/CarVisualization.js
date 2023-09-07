"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
const ROSLIB = require('roslib');

function CarVisualization() {


    const mountRef = useRef(null);

    let vertices = [];
    let colors = [];
    const permanent = false;
    const pointGeometry = useRef(new THREE.BufferGeometry()).current;

    function base64ToArrayBuffer(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }


    function processMessage(cloud) {
        const buffer = base64ToArrayBuffer(cloud.data);
        if (!permanent) {
            vertices = [];
            colors = [];
        }
        const color = new THREE.Color();
        for (let i = 0; i <= buffer.byteLength - cloud.point_step; i += cloud.point_step) {
            const data = new DataView(buffer);
            vertices.push(
                data.getFloat32(i, true),
                data.getFloat32(i + 8, true),
                data.getFloat32(i + 4, true)
            );
            color.setHSL(i / buffer.byteLength, 1, 0.5);
            colors.push(color.r, color.g, color.b);
        }
        pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    }


    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        mountRef.current.appendChild(renderer.domElement);

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
        camera.position.z = -4;
        // camera.position.y = Math.tan((35 * Math.PI) / 180) * Math.abs(camera.position.z);
        camera.position.y = Math.tan((35 * Math.PI) / 180) * Math.abs(camera.position.z);

        camera.lookAt(0, 0, 1);
        renderer.setSize(width, height);

        // Add the AxesHelper
        // const axesHelper = new THREE.AxesHelper(1);
        // axesHelper.position.set(-2, 0.2, -3.5);
        // scene.add(axesHelper);

        // Add the directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
        directionalLight.position.set(-1, 5, 0);
        scene.add(directionalLight);

        // Add the grid helper
        const gridHelper = new THREE.GridHelper(3, 4);
        scene.add(gridHelper);

        const objLoader = new OBJLoader();
        objLoader.load('/models/Car_Base_FR_Layout_Sups_low_poly.objFB285956-E578-486A-830C-770E083C1090.obj', (object) => {
            object.scale.set(1, 1, 0.8);
            object.position.set(0, 0, 0);
            scene.add(object);
        });

        // Create a geometry to hold all the points
        const pointMaterial = new THREE.PointsMaterial({ size: 0.09, vertexColors: true });
        const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
        pointCloud.rotation.y = Math.PI / 2;
        pointCloud.position.set(0, 1, 0);
        scene.add(pointCloud);


        const ros = new ROSLIB.Ros({
            url: 'ws://localhost:9090'
        });

        const listener = new ROSLIB.Topic({
            ros: ros,
            name: '/points_raw',
            messageType: 'sensor_msgs/PointCloud2'
        });

        listener.subscribe((message) => {
            processMessage(message);
        });


        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            listener.unsubscribe();
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default CarVisualization;
