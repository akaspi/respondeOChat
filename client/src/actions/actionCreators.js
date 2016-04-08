'use strict';

import * as actionTypes from './actionTypes';

export const sendMessage = (nickname, text, id)=> {
    id = id || new Date();

    const message = { nickname, text, id };

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

export const setNickname = nickname => {
    return {
        type: actionTypes.SET_NICKNAME,
        nickname
    };
};