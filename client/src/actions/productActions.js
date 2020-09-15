import * as actions from "../constants/actionTypes";

const setProducts = (products) => {
    return {
        type: actions.SET_PRODUCTS,
        payload: products
    }
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