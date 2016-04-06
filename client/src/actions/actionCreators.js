'use strict';

import * as actionTypes from './actionTypes';

export const sendMessage = message => {
    return {
        type: actionTypes.SEND_MESSAGE,
        message
    };
};

export const messageReceive = message => {
    return {
        type: actionTypes.MESSAGE_RECEIVED,
        message
    };
};