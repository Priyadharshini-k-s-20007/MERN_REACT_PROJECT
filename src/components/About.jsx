import React from 'react'

export default function About() {
  return (
    <div style={{padding: '2rem', maxWidth: '800px', margin: '0 auto', minHeight: '70vh'}}>
      <h1>About E-Shop</h1>
      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
           alt="About us" 
           style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', margin: '2rem 0'}} />
      
      <p style={{fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem'}}>
        Welcome to E-Shop, your premier destination for quality products and exceptional shopping experience. 
        Founded with a vision to make online shopping simple, secure, and enjoyable.
      </p>
      
      <h2>Our Mission</h2>
      <p style={{lineHeight: '1.6', marginBottom: '1.5rem'}}>
        To provide customers with high-quality products at competitive prices while ensuring 
        excellent customer service and fast, reliable delivery.
      </p>
      
      <h2>Why Choose Us?</h2>
      <ul style={{lineHeight: '1.8'}}>
        <li>Curated selection of premium products</li>
        <li>Competitive pricing and regular discounts</li>
        <li>Fast and secure shipping</li>
        <li>24/7 customer support</li>
        <li>Easy returns and exchanges</li>
      </ul>
    </div>
  )
}