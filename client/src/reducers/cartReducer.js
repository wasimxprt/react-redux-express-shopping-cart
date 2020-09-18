import * as actions from "../constants/actionTypes";

export const initialState = {
    cart: [],
    totalAmount: 0
};

export const cartReducer = (state = initialState, action) => {

    let cart = state.cart;

    switch (action.type) {

        case 'ADD_TO_CART':

            cart.push(action.payload);
            const total = Object.values(cart)
                .reduce((result, cartItem) => result + cartItem.product.price * cartItem.quantity, 0);


            return {
                ...state,
                cart: cart,
                totalAmount: total
            };

        case 'INCREASE_QUANTITY':
            {
                let item = cart.find(item => item.product._id == action.payload.productId);

                var filtered = cart.filter(function (item) { return item.product._id != action.payload.productId; });
                item.quantity += 1;
                filtered.push(item);
                filtered.sort((a, b) => a.product.name.localeCompare(b.product.name));

                const total = Object.values(filtered)
                    .reduce((result, cartItem) => result + cartItem.product.price * cartItem.quantity, 0);

                return {
                    ...state,
                    cart: filtered,
                    totalAmount: total
                };
            }


        case 'DECREASE_QUANTITY':
            {
                let item = cart.find(item => item.product._id == action.payload.productId);

                if (item.quantity === 1) {
                    return {
                        ...state,
                        cart: cart.filter(item => item.product._id != action.payload.productId)
                    }
                }

                var filtered = cart.filter(function (item) { return item.product._id != action.payload.productId; });
                item.quantity -= 1;
                filtered.push(item);
                filtered.sort((a, b) => a.product.name.localeCompare(b.product.name));

                const total = Object.values(filtered)
                    .reduce((result, cartItem) => result + cartItem.product.price * cartItem.quantity, 0);

                return {
                    ...state,
                    cart: filtered,
                    totalAmount: total
                };
            }

        case 'REMOVE_FROM_CART':
            {
                let newCart = cart.filter(item => item.product._id != action.payload.productId);
                const total = Object.values(newCart)
                    .reduce((result, cartItem) => result + cartItem.product.price * cartItem.quantity, 0);

                return {
                    ...state,
                    cart: newCart,
                    totalAmount: total
                };
            }

        default:
            return state;
    }
};

export default cartReducer;