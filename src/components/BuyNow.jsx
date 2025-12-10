import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from '../utils/api';


export default function BuyNow() {
    const {id} =useParams();
    const product=products.find(p=>p.id==id);
    if(!product) return<p>Product Not Found</p>
  return (
    <div className="container" style={{padding: '2rem 1rem', textAlign: 'center'}}>
       <div className="card" style={{maxWidth: '500px', margin: '0 auto', padding: '3rem'}}>
         <div style={{fontSize: '4rem', marginBottom: '1rem'}}>✅</div>
         <h1 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--success-color)', marginBottom: '1rem'}}>Order Confirmed!</h1>
         <div style={{marginBottom: '2rem'}}>
           <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.5rem'}}>{product.name}</h3>
           <p style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)'}}>₹{product.price}</p>
         </div>
         <p style={{color: 'var(--gray-600)', marginBottom: '2rem'}}>Thank you for your purchase! Your order has been successfully placed and will be processed shortly.</p>
         <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
           <a href="/products" className="btn btn-secondary">Continue Shopping</a>
           <a href="/" className="btn btn-primary">Go Home</a>
         </div>
       </div>
    </div>
  )
}
