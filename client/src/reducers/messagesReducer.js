'use strict';

import { MESSAGE_RECEIVED } from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS([]);

export default function messagesReducer(state = initialState, action = {}) {
    switch (action.type) {
    case MESSAGE_RECEIVED:
        return state.concat([ action.message ]);
    default:
        return state;
    }
}