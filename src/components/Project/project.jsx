import React, { Component } from 'react';
import './project-style.css';

class Project extends Component {
    render () {
        return (
            <div>
                <p class="project">
                    {this.props.textFront}
                    <a class="project" href={this.props.link}>{this.props.linkText}</a>
                    {this.props.textBack}
                </p>
            </div>
        )
    }
}

export default Project