import React from 'react'
import { Link } from "react-router-dom"
import { products } from "../utils/api"

export default function Products({ setCart, cart }) {

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>All Products</h2>

      {products.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p><b>₹{p.price}</b></p>
          <p>{p.category}</p>

          <img src={p.img} alt={p.name} width="200px" />
          <br />

          <Link to={`/product/${p.id}`}>View</Link>
          <br />

          <button onClick={() => addToCart(p)}>Add to Cart</button>

          <hr />
        </div>
      ))}
    </div>
  );
}