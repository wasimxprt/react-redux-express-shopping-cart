import * as actions from "../constants/actionTypes";
import axios from 'axios';

const setProducts = (products) => {
    return {
        type: actions.SET_PRODUCTS,
        payload: products
    }
}

export const fetchProducts = () => async (dispatch) => {

    let options = {
        headers: {
            "x-access-token": (localStorage.getItem("token") && typeof localStorage.getItem("token") !== 'undefined') ? JSON.parse(localStorage.getItem("token")) : ""
        }
    }

    dispatch({type:"START_LOADING_REQUEST"})

    await axios.get("http://localhost:8080/products",options)
        .then(res => {
            dispatch({
                type: actions.SET_PRODUCTS,
                payload: res.data.products
            })
            dispatch({type:"STOP_LOADING_REQUEST"})
        })
        .catch(error => {
            dispatch({type:"STOP_LOADING_REQUEST"})
            if (!error.response) {
                //setIsNetworkError(true)
            } else {
                // http status code
                const code = error.response.status
                // response data
                const response = error.response.data

                dispatch({
                    type: actions.SET_PRODUCTS_ERROR,
                    payload: error
                });
            }
        })
}

const setProductsError = (error) => {
    return {
        type: actions.SET_PRODUCTS_ERROR,
        payload: error
    }
}

export default {
    setProducts,
    setProductsError
}