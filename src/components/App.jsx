'use strict';

import React from 'react';
import Chat from './Chat.jsx';

export default React.createClass({
    displayName: 'App',
    getInitialState() {
        window.socket.on('action', (data) => {
           const newMessages = _.clone(this.state.messages);
            newMessages.push(data.time);
            this.setState({messages: newMessages})
        });
        return { messages: [] };
    },
    render() {
        return (
            <Chat messages={this.state.messages} />
        );
    }
});