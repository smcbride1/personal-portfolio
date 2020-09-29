import React, { Component } from 'react';
import './SkillsIconContainer.css';
import Icon from './Icon.js'
import ReactIcon from '../react-icon.svg'
import ReduxIcon from '../redux-icon.svg'
import RailsIcon from '../rails-icon.svg'

export default class SkillsIconContainer extends Component {
    render() {
        return (
            <div className="skills-icon-container">
                <ul>
                    <li><Icon icon={ReactIcon} text="React"/></li>
                    <li><Icon icon={ReduxIcon} text="Redux"/></li>
                    <li><Icon icon={RailsIcon} text="Rails"/></li>
                </ul>
            </div>
          );
    }
}