import {useRef, React} from 'react'
import Navbars from "../../components/Nav/Navbar";
//  import Model from '../../model/Model';
 import ProductCard from './ProductCard';
// import { useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { Link } from 'react-router-dom';

import './shop.css'


function Shop() {

  return (

    <>
      <Navbars />
      <div className='container'>

        <div className="vertical-line-shop"></div>
        <div className="shopcontainer">
          {/* <div className='model-erea' >
            <Canvas >
               < Model />
            </Canvas>
           
          </div> */}
          <div>
            <ProductCard />
            {/* <ProductCard /> */}
          </div>
        </div>
        <div className="vertical-line1-shop"></div>
      </div>

    </>
  )
}

export default Shop