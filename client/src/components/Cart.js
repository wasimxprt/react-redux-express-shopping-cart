import React from 'react';
import Navbar from "./Navbar";


import CartItem from "./CartItem";

import { useSelector } from 'react-redux';

function Cart(props) {

    const cartData = useSelector(state => state.cart);

    if (cartData.cart.length > 0) {
        return (<div className="container">
            <Navbar />
            <div className="cart">
                <div className="shopping-cart">
                    <div className="title">
                        Shopping Bag
                </div>
                {
                    cartData.cart.map((item)=>(
                        <CartItem item={item.product} key={item.product._id} />
                    ))
                }

                </div>
            </div>

        </div>);
    }
    else {
        return (
            <div className="container">
                <Navbar />
                <h1>Empty cart</h1>
            </div>);
    }



}

export default Cart;