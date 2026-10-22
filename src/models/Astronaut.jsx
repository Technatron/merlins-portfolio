import { useGLTF, useAnimations } from '@react-three/drei'
import astro from '../assets/3d/astro.glb';
import { useEffect, useRef } from 'react';
import { useControls } from 'leva';

export default function Astronaut({isRotating, ...props}) {

  const astroMeshRef = useRef()
  const { scene, animations } = useGLTF(astro)
  const { actions } = useAnimations(animations, astroMeshRef)

  // const { x, y, z, scale } = useControls('Astronaut', {
  //   x: { value: 0, min: -20, max: 20, step: 0.1 },
  //   y: { value: 0, min: -20, max: 20, step: 0.1 },
  //   z: { value: 0, min: -20, max: 20, step: 0.1 },
  //   scale: { value: 0.004, min: 0.001, max: 0.05, step: 0.001 },
  // })

  useEffect(() => {
    if(isRotating){
      actions['metarig|metarigAction.001'].play();
    }else{
      actions['metarig|metarigAction.001'].stop();
    }
  }, [isRotating, actions])

  return (
    <mesh
      {...props}
      ref={astroMeshRef}
      // position={[x, y, z]}
      // scale={[scale, scale, scale]}
    >
      <primitive object={scene}></primitive>
    </mesh>
  )
}
