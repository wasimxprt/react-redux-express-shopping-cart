import * as actions from "../constants/actionTypes";

const setProducts = (products) => {
    return {
        type: actions.SET_PRODUCTS,
        payload: products
    }
}

export default {
    setProducts
}