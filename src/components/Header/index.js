import React from 'react';
import './style.css';
import logo from '../../assets/booksloth_alternate_logo.svg';
import facebook_logo from '../../assets/facebook_logo.svg';
import twitter_logo from '../../assets/twitter_logo.svg';
import integram_logo from '../../assets/instagram_logo.svg';


function Header() {
  return (
    <div className="Nav-Bar-Background">
        <div className="Nav-Bar-Container">
        <img className="booksloth-logo" src={logo} />
        <span className="Header-Text">Community</span>
            <div className="social-media-container">
                <img className="social-media-icon" src={facebook_logo} />
                <img className="social-media-icon" src={twitter_logo} />
                <img className="social-media-icon" src={integram_logo} />
            </div>                         
        </div>
        <div className="Header-Text-Container">
            <span className="Header-Text"></span>
        </div>
    </div>
  );
}

export default Header;
