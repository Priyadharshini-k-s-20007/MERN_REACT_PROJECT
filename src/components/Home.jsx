import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{minHeight: '80vh'}}>
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>Welcome to E-Shop</h1>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>Discover amazing products at unbeatable prices</p>
          <Link to="/products">
            <button style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Shop Now
            </button>
          </Link>
        </div>
      </section>
      
      <section style={{padding: '4rem 2rem', textAlign: 'center'}}>
        <h2 style={{marginBottom: '3rem'}}>Why Choose E-Shop?</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{padding: '2rem', border: '1px solid #ddd', borderRadius: '8px'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚚</div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep</p>
          </div>
          <div style={{padding: '2rem', border: '1px solid #ddd', borderRadius: '8px'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💳</div>
            <h3>Secure Payment</h3>
            <p>Safe and secure payment processing</p>
          </div>
          <div style={{padding: '2rem', border: '1px solid #ddd', borderRadius: '8px'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
            <h3>Quality Products</h3>
            <p>Carefully curated products for the best experience</p>
          </div>
        </div>
      </section>
    </div>
  )
}