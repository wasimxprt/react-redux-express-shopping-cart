import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../actions/authActions';
import AuthService from '../services/AuthService';
import { useHistory } from "react-router-dom";

function Signup(props) {
    
    const history = useHistory();
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        if (AuthService.isAuthenticated()) {
            history.push("/home");
        }
    }, []);

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signup(values,history));
    }

    return (
        <div className="container">
            <Navbar />
            <section className="forms-section">
                <form onSubmit={submitHandler} action="" className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <input type="text" id="username" name="username" placeholder="Username" value={values.username} onChange={changeHandler} />
                    </div>
                    <div className="input-field">
                        <input type="email" id="email" name="email" placeholder="Email" value={values.email} onChange={changeHandler} />
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" name="password" placeholder="Password" value={values.password} onChange={changeHandler} />
                    </div>

                    {auth.error && <p className="error">{auth.error}</p>}

                    <div className="input-field">
                        <button className="btn" type="submit" name="action">Submit</button>
                    </div>
                </form>
            </section>

        </div>
    );
}

export default Signup;