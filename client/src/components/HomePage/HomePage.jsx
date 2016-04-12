'use strict';

import React from 'react';
import {connect} from 'react-redux';

import {setNickname} from '../../actions/actionCreators';

import _ from 'lodash';
import classNames from 'classnames';

require('./homePage.scss');

function mapDispatchToProps(dispatch) {
    return {
        setNickname: (nickname) => dispatch(setNickname(nickname))
    };
}

export default connect(null, mapDispatchToProps)(React.createClass({
    displayName: 'HomePage',

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

    onClick() {
        this.props.setNickname(this.state.value);
        this.setState({value: ''});
    },

    onInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.onClick();
        }
    },

    render() {
        return (
            <div className="home-page">
                <h1 className="title">What is your nickname?</h1>
                <input type="text" placeholder="nickname" onKeyPress={this.onInputKeyPress} onChange={this.onInputChange} value={this.state.value}/>
            </div>
        );
    }

}));