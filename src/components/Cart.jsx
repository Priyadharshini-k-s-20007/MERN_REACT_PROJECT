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
  return (
    <div>
        <h2> Your cart </h2>
        {cart.length=== 0 && <p> No items in cart.</p>}
        {cart.map(item=>(
            <div key={item.id} style={{marginBottom:20}}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={()=>removeItem(item.id)}>Remove</button>
                </div>
        ))}
    </div>
  );
}