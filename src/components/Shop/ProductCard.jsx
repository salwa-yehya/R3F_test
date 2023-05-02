import React from 'react';
import './shop.css';



function ProductCard() {
  return (
    <div className="main-contenier">
      <div className="card-conteiner">
        <img src="https://i.pinimg.com/236x/9e/aa/53/9eaa53d3bca9ef89d4c60589b3a88a8b.jpg" alt="" />
        <h2>Classic Donuts </h2>
        <h3>2 JD </h3>
        <button>Add To Card</button>
      </div>
      <div className="card-conteiner">
        <img src="https://i.pinimg.com/564x/73/16/75/73167550371d0d4b9a45938d2f065d9b.jpg" alt="" />
        <h2>Colourful Donuts Set </h2>
        <h3>15 JD </h3>
        <button>Add To Card</button>
      </div>


      <div className="card-conteiner">
        <img src="https://i.pinimg.com/236x/3e/9d/30/3e9d304a29a1af4e489f9237673e2bbd.jpg" alt="" />
        <h2>Pink  Donuts </h2>
        <h3>2 JD </h3>
        <button>Add To Card</button>
      </div>

      <div className="card-conteiner">
        <img src="https://i.pinimg.com/236x/e2/8e/26/e28e267c17f5140a81a09488dcbbf97e.jpg" alt="" />
        <h2>lovely Nut Set</h2>
        <h3> 20 Jd</h3>
        <button>Add To Card</button>
      </div>
    </div>
  );
}

export default ProductCard;