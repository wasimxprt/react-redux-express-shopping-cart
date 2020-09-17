import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    auth:authReducer,
    loading:loadingReducer
});

export default rootReducer