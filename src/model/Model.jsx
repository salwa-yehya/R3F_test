import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {

  const group = useRef();
  const { nodes, materials } = useGLTF('./Donuts.gltf');
  

  return (
    <group ref={group} {...props} dispose={null}>
        <mesh
        geometry={nodes.Mesh.geometry}
        material={materials.Material}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload('./Donuts.gltf')
