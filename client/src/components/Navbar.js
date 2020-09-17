import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../services/AuthService';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

function Navbar(props) {

    const links = AuthService.isAuthenticated() ? <SignedInLinks /> : <SignedOutLinks />

    return (
        <header data-test="header-cls" >
            <nav>
                <NavLink to="/home" data-test="site-name">
                    <h3>
                        Shopping <span>Cart</span>
                    </h3>
                </NavLink>
                {links}
            </nav>
        </header>
    );
}

export default Navbar;