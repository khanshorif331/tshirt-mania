import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tshirts,setTshirts] = useTshirts() 
    const [cart,setCart] = useState([]) 

    const handleAddToCart = (selectedItem)=>{
        const exists = cart.find(tshirt=> tshirt._id === selectedItem._id)
        if(!exists){
            const newCart = [...cart,selectedItem]
            setCart(newCart)
        }
        else{
            alert('Item already added')
        }
        
        console.log(cart);
    }

    const handleRemoveFromCart = selectedItem =>{
        const rest = cart.filter(tshirt=>tshirt._id !== selectedItem._id)
        setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt=><Tshirt key={tshirt._id} 
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                        ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;