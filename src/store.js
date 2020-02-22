import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import user from './state/user';
import snackbar from './state/snackbar';
import thunk from "redux-thunk";


const reducers = combineReducers ({
    userReducer: user,
    snackbarReducer: snackbar,
});

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);
export const store = createStore(reducers, enhancer);
