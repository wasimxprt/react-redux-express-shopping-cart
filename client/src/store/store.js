import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "../reducers/rootReducer";

const initialState = {};
const loggerMiddleware = createLogger();

const middleware = [thunkMiddleware,loggerMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;