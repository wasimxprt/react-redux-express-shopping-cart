import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/authActions';
import { useHistory } from "react-router-dom";
import AuthService from '../services/AuthService';

function Signin(props) {

    const history = useHistory();

    useEffect(() => {
        
        if (AuthService.isAuthenticated()) {
            history.push("/home");
        }
    }, []);

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        username: "",
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
        dispatch(signin(values,history));
    }

    return (
        <div className="container">
            <Navbar />
            <section className="forms-section">
                <form onSubmit={submitHandler} action="" className="white">
                {auth.success && <p className="success">{auth.success}</p>}
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <input type="text" id="username" name="username" placeholder="Username" value={values.username} onChange={changeHandler} />
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

export default Signin;