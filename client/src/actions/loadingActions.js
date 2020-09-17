import * as actions from "../constants/actionTypes";

export const startLoading = () => {
    return {
        type: actions.START_LOADING_REQUEST
    }
}

export const stopLoading = () => {
    return {
        type: actions.STOP_LOADING_REQUEST
    }
}

