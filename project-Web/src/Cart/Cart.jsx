import './Cart.css';
import { StoreContext } from '../context/StoreContext';
import React, { useState, useContext, useEffect } from 'react';
import Navbarjs from '../contact/Navbarjs';

const Cart = () => {
    const { productzh } = useContext(StoreContext);
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const removeFromCart = (itemId) => {
        const updatedCartItems = { ...cartItems };

        if (updatedCartItems[itemId] > 0) {
            updatedCartItems[itemId]--;
        }

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <>
            <div><Navbarjs /></div>
            <div className='cart'>
                <div className='cart-items'>
                    <div className='cart-items-title'>
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {Object.keys(cartItems).map((itemId) => {
                        const item = productzh.find((product) => product._id === itemId);
                        if (item) {
                            return (
                                <div key={item._id} className='cart-item-title cart-items-item'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <button onClick={() => removeFromCart(item._id)}>Remove</button>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    );
};

export default Cart;
