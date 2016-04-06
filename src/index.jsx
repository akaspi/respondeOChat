'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import io from 'socket.io-client';
import config from '../server/config.json';

window.socket = io(`${location.protocol}//${location.hostname}:${config.socketPort}`);

import { Provider } from 'react-redux';
import { makeStore } from './utils/storeUtils';

ReactDOM.render(
    <Provider store={makeStore()}>
        <App/>
    </Provider>
    , document.getElementById('app'));