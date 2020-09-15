import productReducer from './productReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    auth:authReducer
});

export default rootReducer