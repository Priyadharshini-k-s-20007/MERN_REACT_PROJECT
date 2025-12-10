import React from 'react'

export default function Cart({cart,setCart}) {
    const removeItem=(id)=>{
        const index = cart.findIndex(item=>item.id === id);
        if(index > -1) {
            const newCart = [...cart];
            newCart.splice(index, 1);
            setCart(newCart);
        }
    };
    
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };
    
  return (
    <div className="container" style={{padding: '2rem 1rem'}}>
        <h1 style={{fontSize: '2.5rem', fontWeight: '700', color: 'var(--gray-900)', marginBottom: '2rem', textAlign: 'center'}}>Your Cart</h1>
        
        {cart.length === 0 ? (
            <div style={{textAlign: 'center', padding: '3rem'}}>
                <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🛒</div>
                <h2 style={{color: 'var(--gray-600)', marginBottom: '1rem'}}>Your cart is empty</h2>
                <p style={{color: 'var(--gray-500)'}}>Add some products to get started!</p>
            </div>
        ) : (
            <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem'}}>
                <div>
                    {cart.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="card" style={{marginBottom: '1rem', padding: '1.5rem'}}>
                            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                <img 
                                    src={item.img} 
                                    alt={item.name}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        objectFit: 'cover',
                                        borderRadius: 'var(--border-radius)'
                                    }}
                                />
                                <div style={{flex: 1}}>
                                    <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: '0.5rem'}}>{item.name}</h3>
                                    <p style={{color: 'var(--gray-600)', fontSize: '0.875rem', marginBottom: '0.5rem'}}>{item.category}</p>
                                    <p style={{fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-color)'}}>₹{item.price}</p>
                                </div>
                                <button 
                                    onClick={() => removeItem(item.id)} 
                                    className="btn"
                                    style={{
                                        backgroundColor: 'var(--danger-color)',
                                        color: 'white'
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="card" style={{padding: '1.5rem', height: 'fit-content', position: 'sticky', top: '2rem'}}>
                    <h3 style={{fontSize: '1.5rem', fontWeight: '600', color: 'var(--gray-900)', marginBottom: '1rem'}}>Order Summary</h3>
                    <div style={{borderBottom: '1px solid var(--gray-200)', paddingBottom: '1rem', marginBottom: '1rem'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                            <span>Items ({cart.length})</span>
                            <span>₹{getTotalPrice()}</span>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                            <span>Shipping</span>
                            <span style={{color: 'var(--success-color)'}}>Free</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem'}}>
                        <span>Total</span>
                        <span style={{color: 'var(--primary-color)'}}>₹{getTotalPrice()}</span>
                    </div>
                    <button className="btn btn-primary" style={{width: '100%', padding: '1rem', fontSize: '1.1rem', fontWeight: '600'}}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        )}
    </div>
  );
}