import React from 'react'
import { Link } from "react-router-dom"
import { products } from "../utils/api"

export default function Products({ setCart, cart }) {

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container" style={{padding: '2rem 1rem'}}>
      <div style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '0.5rem'}}>Our Products</h1>
        <p style={{fontSize: '1.1rem', color: 'var(--gray-600)'}}>Discover our amazing collection of quality products</p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {products.map(p => (
          <div key={p.id} className="card" style={{overflow: 'hidden'}}>
            <div style={{position: 'relative', overflow: 'hidden'}}>
              <img 
                src={p.img} 
                alt={p.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                backgroundColor: 'var(--success-color)',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {p.stock} in stock
              </div>
            </div>
            <div style={{padding: '1.25rem'}}>
              <div style={{marginBottom: '0.5rem'}}>
                <span style={{
                  backgroundColor: 'var(--gray-100)',
                  color: 'var(--gray-600)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {p.category}
                </span>
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--gray-900)'}}>{p.name}</h3>
              <p style={{color: 'var(--gray-600)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.5'}}>{p.description}</p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <span style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)'}}>₹{p.price}</span>
              </div>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <Link to={`/product/${p.id}`} className="btn btn-secondary" style={{flex: 1, textAlign: 'center'}}>
                  View Details
                </Link>
                <button onClick={() => addToCart(p)} className="btn btn-primary" style={{flex: 1}}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}