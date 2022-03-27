import React from 'react';
import './constants.css';
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import linkedin from './img/linkedin.png'

export const SHORTBIO = 
<div class="bio" style={{marginTop: "10%"}}>
    <div style={{marginBottom: "3%"}}>
        I'm an engineer, designer, and granola girl. 
    </div>
    <div style={{marginBottom: "3%"}}>
        I love to tweet, travel, read, cook, exercise, and create.
    </div>
    <div style={{marginBottom: "5%"}}>
        I'm passionate about design, sustainability, healthy living, and entrepreneurship. 
    </div>
    <div class="socialicons" style={{marginBottom: "3%"}}>
        <a href="https://www.instagram.com/maitrishahhhh/"><img class="social" src={instagram} width="7%" height="7%" /></a>
        <a href="https://twitter.com/maitrishahhhh"><img class="social" src={twitter} width="7%" height="7%" /></a>
        <a href="https://www.linkedin.com/in/maitri-shah/"><img class="social" src={linkedin} width="7%" height="7%" /></a>
    </div>
</div>
