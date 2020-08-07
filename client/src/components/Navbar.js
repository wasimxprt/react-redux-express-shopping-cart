import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux"
import { getNumbers } from "../actions/cartActions"
// import cartActions from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';


function Navbar(props) {

    const cartData = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <header>
            <nav>
                <h3>
                    Shopping <span>Cart</span>
                </h3>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/my-cart">My Cart ({cartData.cart.length})</NavLink></li>
                </ul>
            </nav>


        </header>
    );
}

export default Navbar;