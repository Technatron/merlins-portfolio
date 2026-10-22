import { Html } from '@react-three/drei'
import React from 'react'

function Loader() {
  return (
    <Html>
      <div className='justify-center items-center flex'>
        <div className=' h-30 w-30 border-2  border-blue-500 rounded-full animate-spin border-t-blue-500'></div>
      </div>
    </Html>
  )
}

export default Loader