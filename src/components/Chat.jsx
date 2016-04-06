'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {sendMessage} from '../actions/actionCreators';

import {map} from 'lodash';

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(React.createClass({
    displayName: 'Chat',

    getInitialState() {
        return {
            value: ''
        };
    },

    onInputChange(e) {
        this.setState({
            value: e.target.value
        });
    },

    onSendClick() {
        this.props.sendMessage(this.state.value);
        this.setState({value: ''});
    },

    onInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.onSendClick();
        }
    },

    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.onInputKeyPress} onChange={this.onInputChange} value={this.state.value}/>
                <button onClick={this.onSendClick}>Send</button>
                <ul>
                    {map(this.props.messages.toJS(), (message) => <li>{message}</li>)}
                </ul>
            </div>
        );
    }
}));