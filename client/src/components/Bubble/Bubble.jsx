'use strict';

import React from 'react';
import classNames from 'classnames';

require('./bubble.scss');

const supportedDirections = ['left', 'right'];
const supportedColors = ['green', 'blue'];


export default React.createClass({
    displayName: 'Bubble',
    propTypes: {
        direction: React.PropTypes.oneOf(supportedDirections),
        color: React.PropTypes.oneOf(supportedColors),
        title: React.PropTypes.string,
        text: React.PropTypes.string
    },
    getDefaultProps() {
        return {
            direction: supportedDirections[0],
            color: supportedColors[0]
        };
    },
    render() {
        const bubbleClass = classNames({
            bubble: true,
            [this.props.direction]: true,
            [this.props.color]: true
        });

        return (
            <div className={bubbleClass}>
                <div className="title">{this.props.title}</div>
                <span>{this.props.text}</span>
            </div>
        );
    }
});