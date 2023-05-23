import React, { useRef } from 'react';
import { Text, Environment, useGLTF } from '@react-three/drei';
import { OrbitControls} from '@react-three/drei'
export default function Model(props) {

  const dount =useGLTF('./dountmodel.gltf');
  return (
    <>
     {/* <OrbitControls/> */}
    <primitive object={dount.scene} 
    position-z ={-1}
    scale ={0.7}
   
    /> 
    <Text
    fontSize={3}
    rotation-Y = {1}
    color ={"#AAA"}
    position={[-0.6 , 1.2 , 1.2]}

    >
      DONUTS SHOP
      </Text>
     <Environment preset={'city'}/>
    </>

  )
}

useGLTF.preload('./Donuts.gltf')
