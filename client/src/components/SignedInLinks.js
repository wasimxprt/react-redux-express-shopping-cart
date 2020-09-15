import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function SignedInLinks(props) {
    const history = useHistory();

    const cartData = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        history.push("/signin");
    }

    return (
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><a style={{cursor:"pointer"}} onClick={logout}>Logout</a></li>
            <li><NavLink to="/cart">My Cart ({cartData.cart.length})</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;