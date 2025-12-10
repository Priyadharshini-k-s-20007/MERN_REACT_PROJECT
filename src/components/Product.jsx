import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../utils/api';

export default function Product() {
    const {id} = useParams();
    const product=products.find(p=>p.id==id);
    if(!product) return <p>Product not found</p>
    return (
    <div className="container" style={{padding: '2rem 1rem'}}>
        <div className="card" style={{maxWidth: '800px', margin: '0 auto', overflow: 'hidden'}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start'}}>
                <div style={{position: 'relative'}}>
                    <img 
                        src={product.img} 
                        alt={product.name}
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            borderRadius: 'var(--border-radius)'
                        }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: 'var(--success-color)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--border-radius)',
                        fontWeight: '500'
                    }}>
                        {product.stock} in stock
                    </div>
                </div>
                <div style={{padding: '2rem'}}>
                    <div style={{marginBottom: '1rem'}}>
                        <span style={{
                            backgroundColor: 'var(--gray-100)',
                            color: 'var(--gray-600)',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--border-radius)',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}>
                            {product.category}
                        </span>
                    </div>
                    <h1 style={{fontSize: '2rem', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '1rem'}}>{product.name}</h1>
                    <p style={{fontSize: '2rem', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '1.5rem'}}>₹{product.price}</p>
                    <p style={{color: 'var(--gray-600)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem'}}>{product.description}</p>
                    
                    <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
                        <div style={{flex: 1, textAlign: 'center', padding: '1rem', backgroundColor: 'var(--gray-100)', borderRadius: 'var(--border-radius)'}}>
                            <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-900)'}}>{product.stock}</div>
                            <div style={{fontSize: '0.875rem', color: 'var(--gray-600)'}}>Available</div>
                        </div>
                        <div style={{flex: 1, textAlign: 'center', padding: '1rem', backgroundColor: 'var(--gray-100)', borderRadius: 'var(--border-radius)'}}>
                            <div style={{fontSize: '1.5rem', fontWeight: '700', color: 'var(--gray-900)'}}>⭐ 4.8</div>
                            <div style={{fontSize: '0.875rem', color: 'var(--gray-600)'}}>Rating</div>
                        </div>
                    </div>
                    
                    <Link to={`/buynow/${product.id}`} className="btn btn-primary" style={{width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: '600'}}>
                        🛒 Buy Now
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}