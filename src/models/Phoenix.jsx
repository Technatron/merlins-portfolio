import { useAnimations, useGLTF } from '@react-three/drei'
import bird from '../assets/3d/bird.glb';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Phoenix({isRotating,...props}) {


  const birdMeshRef = useRef();
  const { scene, animations } = useGLTF(bird);
  const { actions } = useAnimations(animations, birdMeshRef);

  useEffect( () => {
    console.log("Phoenix Actions:",actions);
    actions["Take 001"].play();
    // if(isRotating){
    // }
  }, [actions, isRotating]);

  useFrame(({ clock, camera}) => {
    birdMeshRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2+2;

    if(birdMeshRef.current.position.x > camera.position.x + 10){
      birdMeshRef.current.rotation.y = Math.PI;
    }
    else if(birdMeshRef.current.position.x < camera.position.x-10){
      birdMeshRef.current.rotation.y = 0;
    }

    if(birdMeshRef.current.rotation.y === 0 ){
      birdMeshRef.current.position.x += 0.03;
      birdMeshRef.current.position.z -= 0.03;
    }else{
      birdMeshRef.current.position.x -= 0.03;
      birdMeshRef.current.position.z += 0.03;
      
    }
  })

  return (
    <mesh
    ref={birdMeshRef}
      // position={[-2, -1, 2]}
      scale={[0.004, 0.004, 0.004  ]}
    >
      <primitive object={scene}></primitive>
    </mesh>
  )
}

export default Phoenix