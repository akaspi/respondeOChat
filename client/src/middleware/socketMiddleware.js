'use strict';

import { SEND_MESSAGE } from '../actions/actionTypes';
import { messageReceive } from '../actions/actionCreators';

import io from 'socket.io-client';
import config from '../../../server/config.json';

let socket;

function initializeSocketIO(store) {
    socket = socket || io(`${location.protocol}//${location.hostname}:${config.socketPort}`);
    socket.on('message', (message) => store.dispatch(messageReceive(message)));
}

export default store => next => action => {

    if (!socket) {
        initializeSocketIO(store);
    }

    switch (action.type) {
    case SEND_MESSAGE:
        socket.emit('message', action.message);
        break;
    }

    return next(action);
};