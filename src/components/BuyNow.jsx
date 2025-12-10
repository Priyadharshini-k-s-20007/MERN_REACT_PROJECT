import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../utils/api';


export default function BuyNow() {
    const {id} =useParams();
    const product=products.find(p=>p.id==id);
    if(!product) return<p>Product Not Found</p>
  return (
    <div>
       <h2>BuY NoW</h2>
       <h3>{product.name}</h3>
       <p>{product.price}</p>
       <p>🫡Order has been Placed </p>
       </div>
    
  )
}
