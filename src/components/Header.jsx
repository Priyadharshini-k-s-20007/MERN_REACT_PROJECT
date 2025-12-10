import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ cart, logout }) {
  return (
    <header style={{backgroundColor: '#333', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
        <h1>🛒 E-Shop</h1>
      </Link>
      <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
        <Link to="/products" style={{color: 'white', textDecoration: 'none'}}>Products</Link>
        <Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About</Link>
        <Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link>
        <Link to="/cart" style={{color: 'white', textDecoration: 'none'}}>Cart ({cart.length})</Link>
        {localStorage.getItem("user") ? (
          <button onClick={logout} style={{padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Logout</button>
        ) : (
          <Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link>
        )}
      </nav>
    </header>
  )
}