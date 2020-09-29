import React, { Component } from 'react';
import './LanguageIconContainer.css';
import Icon from './Icon.js'
import JavaScriptIcon from '../javascript-icon.svg'
import RubyIcon from '../ruby-icon.svg'

export default class LanguageIconContainer extends Component {
    render() {
        return (
            <div className="language-icon-container">
                <ul>
                    <li><Icon icon={JavaScriptIcon} text="JavaScript"/></li>
                    <li><Icon icon={RubyIcon} text="Ruby"/></li>
                </ul>
            </div>
          );
    }
}