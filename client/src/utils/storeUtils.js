'use strict';

import { createStore, combineReducers, applyMiddleware } from 'redux';

/*
 Reducers
 */
import messagesReducer from '../reducers/messagesReducer';

/*
 Middlewares
 */
import socketMiddleware from '../middleware/socketMiddleware';


export const makeStore = initialState => {
    const reducers = combineReducers({
        messages: messagesReducer
    });

    const middleware = applyMiddleware(
        socketMiddleware
    );

    return createStore(reducers, initialState, middleware);
};
