import React, { Component } from 'react';
import './Icon.css';

export default class Icon extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img className="icon-src" src={this.props.icon}></img>
                </div>
                <p>{this.props.text}</p>
            </div>
          );
    }
}