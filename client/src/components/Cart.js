import React from 'react';
import Navbar from "./Navbar";


import CartItem from "./CartItem";

import { useSelector } from 'react-redux';

function Cart(props) {

    const cartData = useSelector(state => state.cart);
    const total = useSelector(state => state.cart.totalAmount);
    cartData.cart.sort((a, b) => a.product.name.localeCompare(b.product.name))

    if (cartData.cart.length > 0) {
        return (<div className="container">
            <Navbar />
            <div className="cart" data-test="cart-component">
                <div className="shopping-cart">
                    <div className="title">
                        Shopping Bag
                </div>
                    {
                        cartData.cart.map((item) => (
                            <CartItem item={item.product} key={item.product._id} quantity={item.quantity} />
                        ))
                    }

                    <div className="title title_top">
                        Total
                            <span>${total}</span>
                    </div>
                </div>
            </div>

        </div>);
    }
    else {
        return (
            <div className="container">
                <Navbar />
                <div className="cart">
                    <div className="shopping-cart">
                        <div className="title" style={{ textAlign: "center" }}>
                            Your cart is empty!
                        </div>
                    </div>
                </div>
            </div>);
    }



}

export default Cart;