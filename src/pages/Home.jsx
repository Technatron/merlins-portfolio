import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Loader from '../components/Loader.jsx';
import Castle from '../models/CastleIsland.jsx'
// import Book from '../models/Book.jsx'
import Sky from '../models/Sky.jsx';
import Phoenix from '../models/Phoenix.jsx';
import OldPLane from '../models/OldPlane.jsx';
import Astronaut from '../models/Astronaut.jsx';
import HomeInfo from '../components/HomeInfo.jsx';

const wait = (delay) => {
  return new Promise( (resolve) => {
    setTimeout( resolve, delay);
  })
}

const adjustIslandSize = () => {
  let screenPosition, screenScale;
  let screenRotate = [0, Math.PI / 2, 0];
  screenPosition= [0.1, -4.9, -22];
  
  if(window.innerWidth < 768){
    screenScale= [0.14, 0.14, 0.14];
  }else{
    screenScale= [0.18, 0.18, 0.18];
  }

  return [screenScale, screenPosition, screenRotate];
}

const adjustPlaneSize = () => {
  let screenPosition, screenScale;
  let screenRotate = [0, Math.PI / 2, 0];

  if(window.innerWidth < 768){
    screenPosition = [1,1,-1];
    screenScale = [0.004, 0.004, 0.004];
  }else{
    screenPosition = [-7,2,-3];
    screenScale = [2,2,2];
  }

  return [screenScale, screenPosition, screenRotate];
}

const adjustAstroSize = () => {
  let screenPosition, screenScale;
  let screenRotate = [0, Math.PI / 2, 0];

  if(window.innerWidth < 768){
    screenPosition = [0, -1.2, 2];
    screenScale = [0.003, 0.003, 0.003];
  }else{
    screenPosition = [0.2, -0.8, 2.1];
    screenScale = [0.004, 0.004, 0.004];
  }

  return [screenScale, screenPosition, screenRotate];
}
//to complete
const adjustSkySize = () => {
  let screenPosition, screenScale;
  let screenRotate = [0, Math.PI / 2, 0];

  if(window.innerWidth < 768){
    screenPosition = [1,1,1];
    screenScale = [0.01, 0.01, 0.01];
  }else{
    // screenPosition = [1,-1,1];
    screenPosition = [0.2, -0.8, 2.1];
    screenScale = [0.004, 0.004, 0.004];
  }

  return [screenScale, screenPosition, screenRotate];
}


const SlowComp = React.lazy( () => wait(2000).then( () => import('../dummy/SlowComp.jsx')));

function Home() {

  const [isRotating, setIsRotating] = useState(false);
   const [currentStage, setCurrentStage] = useState(1);
  const [ islandScale, islandPosition, islandRotate ] = adjustIslandSize();
  const [ astroScale, astroPosition, astroRotate ] = adjustAstroSize();
  const [ planeScale, planePosition, planeRotate ] = adjustPlaneSize();
  return (
    <section className='w-full h-screen relative'>
      {/* Pop up to display at a checkpoint */}
      <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>

      <Canvas 
      className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`}
      camera={{near: 0.1, far:1000}}
      >

      <Suspense fallback={<Loader/>}>
        <directionalLight position={[50,50,20]} intensity={2}/>
        <ambientLight intensity={0.5}/>
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"/>
        
        <Sky
        isRotating={isRotating}/>
        
        <Phoenix
        rotation={planeRotate}
        isRotating={isRotating}
        />
        
        <Astronaut
        scale ={astroScale}
        position = {astroPosition}
        rotation = {astroRotate}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        />
        
        <Castle 
        position = {islandPosition}
        scale={islandScale} 
        rotation={[0.1, 4.7, 0]}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />
        
      </Suspense> 


      </Canvas>

    </section>
  )
}

export default Home;