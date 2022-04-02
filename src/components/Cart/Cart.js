import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    // conditional renderring options
    // 1. Element variable;
    // 2.ternary operator
    // 3.&& operator
    // 4.|| operator

    let command;
    if(cart.length === 0){
        command = <p>Please add atleast one item</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more</p>
    }
    else{
        command = <p><small>Thanks for addding item.</small></p>
    }
    return (
        <div>
            <h2>Items Selected: {cart.length}</h2>
            
            {
                cart.map(tshirt=><p>{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length===3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>3 jon k ki gift diba</p>
                </div>}
            {command} 
            {cart.length !==4 ? <p>Keep adding</p> : <button>Clear All</button>}
            {cart.length ===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;