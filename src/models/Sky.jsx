import React, { useEffect } from 'react'
import SkyObj from "../assets/3d/sky.glb";
import { useAnimations, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

function Sky({isRotating}) {

    const skyMeshRef = useRef();
    const { scene, animations} = useGLTF(SkyObj);
    const { actions } = useAnimations(animations);
    console.log("Sky animatinos",actions);
    

    useFrame( () => {
        if(isRotating){
        }
        skyMeshRef.current.rotation.y += 0.001;
    });

    useEffect( () => {
        // actions["get Animation"].play();
    })

    // const { x, y, z, scale } = useControls('Sky', {
    //     x: { value: 0, min: -20, max: 20, step: 0.1 },
    //     y: { value: 0, min: -20, max: 20, step: 0.1 },
    //     z: { value: 0, min: -20, max: 20, step: 0.1 },
    //     scale: { value: 1, min: 0.1, max: 10, step: 0.1 },
    // })

    return (
        <mesh
        ref={skyMeshRef}
        // position={[x, y, z]}
        // scale={[scale, scale, scale]}
        position={[-3.2, 20, -20]}
        scale={[0.1, 0.1, 0.1]}
        >
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default Sky;