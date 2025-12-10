import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ cart, logout }) {
  return (
    <header style={{
      background: 'linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%)',
      color: 'white',
      padding: '1rem 0',
      boxShadow: 'var(--shadow-lg)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
          <h1 style={{fontSize: '1.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>🛒 E-Shop</h1>
        </Link>
        <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
          <Link to="/" style={{color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'var(--transition)'}} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</Link>
          <Link to="/products" style={{color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'var(--transition)'}} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>Products</Link>
          <Link to="/about" style={{color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'var(--transition)'}} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>About</Link>
          <Link to="/contact" style={{color: 'white', textDecoration: 'none', fontWeight: '500', transition: 'var(--transition)'}} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact</Link>
          <Link to="/cart" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: '500',
            backgroundColor: 'var(--primary-color)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--border-radius)',
            transition: 'var(--transition)'
          }}>🛒 Cart ({cart.length})</Link>
          {localStorage.getItem("user") ? (
            <button onClick={logout} className="btn" style={{backgroundColor: 'var(--danger-color)', color: 'white'}}>Logout</button>
          ) : (
            <Link to="/login" className="btn btn-primary">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}