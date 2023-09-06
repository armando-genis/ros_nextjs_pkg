"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

function CarVisualization() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        mountRef.current.appendChild(renderer.domElement);

        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
        camera.position.z = -4;
        camera.position.y = Math.tan((45 * Math.PI) / 180) * Math.abs(camera.position.z);
        camera.lookAt(0, 0, 0);
        renderer.setSize(width, height);

        // Add the AxesHelper
        const axesHelper = new THREE.AxesHelper(1);
        axesHelper.position.set(-2, 0.2, -3.5);
        scene.add(axesHelper);

        // Add the directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 5, 0);
        scene.add(directionalLight);

        const gridHelper = new THREE.GridHelper(10, 10);
        scene.add(gridHelper);

        const objLoader = new OBJLoader();
        objLoader.load('/models/Car_Base_FR_Layout_Sups_low_poly.objFB285956-E578-486A-830C-770E083C1090.obj', (object) => {
            object.scale.set(1, 1, 0.8);
            object.position.set(0, 0, -2);
            scene.add(object);
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
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default CarVisualization;
