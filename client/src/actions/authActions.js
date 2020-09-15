import * as actions from "../constants/actionTypes";
import React from 'react';
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                //logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const signin = (credentials,history) => {
    return dispatch => {
        dispatch({ type: actions.LOGIN_REQUEST });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        };

        //fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        return fetch(`http://localhost:8080/api/auth/signin`, requestOptions)
            .then(handleResponse)
            .then(response => {

                let loggedinUser = {
                    id: response.id,
                    email: response.email,
                    username: response.username
                }

                localStorage.setItem('token', JSON.stringify(response.accessToken));
                localStorage.setItem('user', JSON.stringify(loggedinUser));

                dispatch({ type: actions.LOGIN_SUCCESS, token: response.accessToken, user: loggedinUser });
                history.push('/home')
            })
            .catch(error => {
                dispatch({ type: actions.LOGIN_FAILURE, error });
            })
    };
}


export const signup = (userData,history) => {
    return dispatch => {
        dispatch({ type: actions.SIGNUP_REQUEST });

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };

        //fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        return fetch(`http://localhost:8080/api/auth/signup`, requestOptions)
            .then(handleResponse)
            .then(response => {
                dispatch({ type: actions.SIGNUP_SUCCESS, response,message:"User registered usccessfully!" });
                history.push('/signin')
            })
            .catch(error => {
                dispatch({ type: actions.SIGNUP_FAILURE, error });
            })
    };
}
