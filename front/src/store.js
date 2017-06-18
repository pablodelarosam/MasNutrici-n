import {createStore, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import { combineReducers } from 'redux';

import thunk from "redux-thunk";
import promise from "redux-promise";
import {loginReducer, loginHasError, loginRequest} from "./login/reducers/login";
import {signinReducer, signinHasError, signinRequest} from "./authentication/reducers/signin";


const enhancers = compose(window.devToolsExtension
    ? window.devToolsExtension()
    : f => f);

let middleware = [thunk];


export function getStore(history, intialState) {
    const reducer = combineReducers({
        loginReducer,
        loginHasError,
        loginRequest,
        signinReducer,
        signinHasError,
        signinRequest,
        routing: routerReducer
    });

    middleware.push(routerMiddleware(history));

    return createStore(reducer, intialState, compose(applyMiddleware(...middleware), enhancers));
}
