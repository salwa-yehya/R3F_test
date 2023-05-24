import React from 'react';
import './Navbar.css';
import mylogo from '../../img/donut.png'
import { BsFillCartFill } from "react-icons/bs";


import { Link } from 'react-router-dom';



function Navbars() {
  return (

    <nav>

      <div>
        <img src={mylogo} alt="Logo" className="logo" />
      </div>
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>

          <li><Link to={'/shop'}>Shop</Link></li>

        </ul>
      </div>
      <div>

        <div className="cart-col">
          <div className="cart-links">
         
              <button className="links" href="cart.jsx">
              <BsFillCartFill />
              
              </button>
            

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbars;