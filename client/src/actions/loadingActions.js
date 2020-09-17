import * as actions from "../constants/actionTypes";

const startLoading = () => {
    return {
        type: actions.START_LOADING_REQUEST
    }
}

const stopLoading = () => {
    return {
        type: actions.STOP_LOADING_REQUEST
    }
}

export default {
    startLoading,
    stopLoading
}