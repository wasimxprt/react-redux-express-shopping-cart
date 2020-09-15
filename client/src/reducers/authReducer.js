import * as actions from "../constants/actionTypes";

const initialState = {
    isLoggedIn: false,
    token: '',
    refreshToken: '',
    expiresOn: '',
    user: '',
    error: "",
    success:""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USERS_LOGIN_REQUEST":
            return {
                ...state
            };
        case "USERS_LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                token: action.token,
                user: action.user,
                error: ""
            };
        case "USERS_LOGIN_FAILURE":
            return {
                ...state,
                error: action.error,
                success:""
            };

        case "USERS_SIGNUP_SUCCESS":
            return {
                ...state,
                success: action.message,
                error:""
            };
        case "USERS_SIGNUP_FAILURE":
            return {
                ...state,
                error: action.error,
                success:""
            };

        case "REDIRECT":
            console.log("redirect ", action)
        default:
            return state;
    }
};

export default authReducer;