import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';


function SignedOutLinks(props) {
    const cartData = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/signin">Signin</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/cart">My Cart ({cartData.cart.length})</NavLink></li>
        </ul>
    );
}

export default SignedOutLinks;