import React, { useRef } from 'react';
import { Environment, useGLTF } from '@react-three/drei';
import { OrbitControls} from '@react-three/drei'
export default function Model(props) {

  const dount =useGLTF('./dountmodel.gltf');
  // const group = useRef();
  // const { nodes, materials } = useGLTF('./Donuts.gltf');
  

  return (
    <>
     <OrbitControls/>
    <primitive object={dount.scene} 
    position-z ={-1}
   
    />
     <Environment preset={'city'}/>
    </>
    // <group ref={group} {...props} dispose={null}>
    //     <mesh
    //     geometry={nodes.Mesh.geometry}
    //     material={materials.Material}
    //     castShadow
    //     receiveShadow
    //   />
    // </group>
  )
}

useGLTF.preload('./Donuts.gltf')
