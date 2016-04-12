'use strict';

import React from 'react';

import Bubble from '../Bubble/Bubble.jsx';

import {connect} from 'react-redux';
import {sendMessage} from '../../actions/actionCreators';

import _ from 'lodash';
import classNames from 'classnames';

require('./chat.scss');

function mapStateToProps(state) {
    return {
        nickname: state.nickname,
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendMessage: (nickname, text) => dispatch(sendMessage(nickname, text))
    };
}

function createMessage(currName, message) {
    const iSentTheMessage = message.nickname === currName;
    const wrapperClass = classNames({
        'chat-message-wrapper': true,
        'right': iSentTheMessage,
        'left': !iSentTheMessage
    });
    const bubbleDirection = iSentTheMessage ? 'right' : 'left';
    const bubbleColor = iSentTheMessage ? 'green' : 'blue';

    return (
        <div key={'msg-' + message.id} className={wrapperClass}>
            <Bubble direction={bubbleDirection} color={bubbleColor} title={message.nickname} text={message.text}/>
        </div>
    )
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
        this.props.sendMessage(this.props.nickname, this.state.value);
        this.setState({value: ''});
    },

    onInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.onSendClick();
        }
    },

    render() {
        return (
            <div className="chat">
                <div className="chat-window">
                    { _.map(this.props.messages.toJS(), createMessage.bind(this, this.props.nickname)) }
                </div>
                <div className="footer">
                    <input type="text" placeholder="Type a message..." onKeyPress={this.onInputKeyPress} onChange={this.onInputChange}
                           value={this.state.value}/>
                </div>
            </div>
        );
    }
}));