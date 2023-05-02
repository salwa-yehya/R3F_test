import React from 'react'
import Navbars from "../../components/Nav/Navbar";
// import Model from '../../model/Model';
import ProductCard from './ProductCard';
import './shop.css'

const Shop = () => {

  return (

    <>
      <Navbars />
      <div className='container'>

        <div className="vertical-line-shop"></div>
        <div className="shopcontainer">
          <div className='model-erea'>
            model here !
            image animation!!!!!!!!!!!!!!
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