import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Torus3D(props) {
  const ref = useRef();
  const [clicked, click] = useState(false);
  const [hovered, hover] = useState(false);
  
  useFrame((state, delta) => {
    ref.current.rotation.y += 0.01;
    
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <torusGeometry args={[1, 0.5, 12, 24]} />

      <meshBasicMaterial
        color={hovered ? "#F3477B" : "#F195B1"}
      />
    </mesh>
  );
}

export default Torus3D;