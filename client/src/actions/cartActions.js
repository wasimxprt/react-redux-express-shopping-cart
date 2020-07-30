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

const updateCartQuantity = (productId, quantity) => {

    return {
        type: actions.UPDATE_CART_QUANTITY,
        payload: {
            productId,
            quantity: quantity
        }
    }
};

export default {
    addToCart,
    removeFromCart,
    updateCartQuantity
}