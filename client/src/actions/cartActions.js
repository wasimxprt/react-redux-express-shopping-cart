import * as actions from "../constants/actionTypes";

const addToCart = (product) => {
    return {
        type: actions.ADD_TO_CART,
        payload: {
            product,
            quantity: 1
        }
    }
}

const removeFromCart = (productId) => {

    return {
        type: actions.REMOVE_FROM_CART,
        payload: {
            productId: productId
        }
    }
};


const increaseQuantity = (productId) => {

    return {
        type: actions.INCREASE_QUANTITY,
        payload: {
            productId
        }
    }
};

const decreaseQuantity = (productId) => {

    return {
        type: actions.DECREASE_QUANTITY,
        payload: {
            productId
        }
    }
};

export default {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}