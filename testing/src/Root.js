import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";
import reduxPromise from 'redux-promise'
import { applyMiddleware } from "redux";
import async from "middlewares/async";
import stateValidator from "./middlewares/stateValidator";

export default ({children, initialState = {} })=>{
    // const store = createStore(reducers, initialState, applyMiddleware(async,stateValidator)); comment due to giving error with stateValidator middleware
    const store = createStore(reducers, initialState, applyMiddleware(async));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}