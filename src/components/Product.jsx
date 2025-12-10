import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../utils/api';

export default function Product() {
    const {id} = useParams();
    const product=products.find(p=>p.id==id);
    if(!product) return <p>Product not found</p>
    return (
    <div style={{padding: '20px', maxWidth: '600px'}}>
        <img src={product.img} width="300" style={{marginBottom: '20px'}}/>
        <h2>{product.name}</h2>
        <p style={{fontSize: '18px', margin: '10px 0'}}><strong>Price: ₹{product.price}</strong></p>
        <p style={{margin: '15px 0', lineHeight: '1.5'}}><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> {product.stock} available</p>
        <Link to={`/buynow/${product.id}`}>
        <button style={{padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px'}}>Buy Now</button>
        </Link>
    </div>
  )
}
