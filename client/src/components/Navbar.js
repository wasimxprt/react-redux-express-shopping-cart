import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar(props) {

    const counter = useSelector(state => state.cart.cart);
    console.log("counter ",counter);

    useEffect(()=>{

        console.log("called")
    },[])

    return (
        <header>
            <div className="left_area">
                <h3>
                    Shopping <span>Cart</span>
                </h3>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="/my-cart"><i className="glyphicon glyphicon-shopping-cart"></i> My Cart</NavLink></li>
                </ul>
            </div>

        </header>
    );
}

export default Navbar;