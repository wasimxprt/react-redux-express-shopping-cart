
const initialState = {
    products: [],
    error: ""
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: action.payload,
                error: ""
            }
        case "SET_PRODUCTS_ERROR":
            return {
                ...state,
                products: [],
                error: action.payload.message
            }
        default:
            return state;
    }
}

export default productReducer;