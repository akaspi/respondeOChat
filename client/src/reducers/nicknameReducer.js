'use strict';

import { SET_NICKNAME } from '../actions/actionTypes';

const initialState = null;

export default function nicknameReuducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_NICKNAME:
            return action.nickname;
        default:
            return state;
    }
}