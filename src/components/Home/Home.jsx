import React from 'react'
import '../Home/home.css';
import img from '../../img/hero.png'
// import { FaInstagram } from 'react-icons/fa';
import Navbars from "../../components/Nav/Navbar";
import { Link } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import Torus3D from "../../components/Torus";
import { OrbitControls} from '@react-three/drei'

const Home = () => {

  return (
    <>
      <Navbars />



      <div className='container'>

        <div className="vertical-line"></div>
        <div className='bannercontainer'>
          <div className='dountseara'>
            <Canvas>
              <Torus3D />
              <OrbitControls/>
            </Canvas>
          </div>
          <div className="banner">
            <h1>Donuts Shop</h1>
            <img src={img} alt="img" className="banner_img" />
            <button>
              <Link to={'/shop'}> Shop Now</Link>
            </button>
          </div>
          <div className='dountseara2'>
            <Canvas>
              <Torus3D />
              <OrbitControls/>
            </Canvas>
          </div>
        </div>

        <div className="vertical-line1"></div>
      </div>





    </>
  )
}

export default Home