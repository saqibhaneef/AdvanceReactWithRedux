import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";
import reduxPromise from 'redux-promise'
import { applyMiddleware } from "redux";

export default ({children, initialState = {} })=>{
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}