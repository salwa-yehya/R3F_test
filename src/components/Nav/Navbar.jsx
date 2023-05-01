import React from 'react';
import './Navbar.css';
import mylogo  from '../../img/donut.png'

function Navbars() {
  return (

  <nav>
      <div className="logo-container">
        <img src={mylogo} alt="Logo" className="logo" />
      </div>
        
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="shop">Shop</a></li>

      </ul>
    </nav>
  );
}

export default Navbars;