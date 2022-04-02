import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    // conditional renderring options
    
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            {
                cart.map(tshirt=><p>{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;