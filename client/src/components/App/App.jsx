'use strict';

import React from 'react';
import {connect} from 'react-redux';

import Chat from '../Chat/Chat.jsx';
import HomePage from '../HomePage/HomePage.jsx';

require('./app.scss');

function mapStateToProps(state) {
    return {
        nickname: state.nickname
    };
}

export default connect(mapStateToProps)(React.createClass({
    displayName: 'App',
    render() {
        return (
            this.props.nickname ? <Chat/> : <HomePage/> 
        );
    }
}));