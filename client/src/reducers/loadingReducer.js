const initialState = {
    isLoading: false
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_LOADING_REQUEST":
            return {
                ...state,
                isLoading: true
            }
        case "STOP_LOADING_REQUEST":
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}
export default loadingReducer;