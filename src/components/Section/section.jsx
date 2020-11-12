import React, { Component } from 'react';
import './section-style.css';
import Emoji from 'a11y-react-emoji'
import ReactRotatingText from 'react-rotating-text';

class Section extends Component {
    render () {
        
        return (
            <div>
                <h1 class={this.props.sectionStyle}>
                    {<Emoji symbol={this.props.emojiSymbol}></Emoji>}{' '}
                    {this.props.heading}
                    <span class="introduction">{this.props.heading2}</span>
                    {this.props.header && <ReactRotatingText class="typewritertext" items={this.props.typewriterText} />}</h1>
            </div>
        )
    }
}

export default Section;