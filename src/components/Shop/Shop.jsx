import {useRef, React} from 'react'
import Navbars from "../../components/Nav/Navbar";
// import Model from '../../model/Model';
import ProductCard from './ProductCard';
import { useGLTF } from '@react-three/drei';
import './shop.css'

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./dountmodel.gltf')
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

function Shop() {

  return (

    <>
      <Navbars />
      <div className='container'>

        <div className="vertical-line-shop"></div>
        <div className="shopcontainer">
          <div className='model-erea'>
            {/* < Model /> */}
          </div>
          <div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="vertical-line1-shop"></div>
      </div>

    </>
  )
}

export default Shop