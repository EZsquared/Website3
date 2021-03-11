import React, { useState } from 'react';
import './Navigation.css';
import NavPicture from './NavPicture';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  render() {
    return (
        <nav className="zone sidenav sticky">
            <NavPicture/>
            <div className="name-cont">
              <div className="animate-letter">E</div>
              <div className="animate-letter">r</div>
              <div className="animate-letter">i</div>
              <div className="animate-letter">c</div>
              <div className="space-break"></div>
              <div className="animate-letter">C</div>
              <div className="animate-letter">a</div>
              <div className="animate-letter">n</div>
              <div className="animate-letter">n</div>
              <div className="animate-letter">o</div>
              <div className="animate-letter">n</div>
            </div>
            <div className= "navtext descript-container">
                <div className="title-descript">Junior Developer</div>
                <div className="title-descript">Management & Facilitation</div>
            </div>
            <ul className="navtext choice-container">
              
              <li className= "choices"><a href="#skills">Skills</a></li>
              <li className="choices"><a href="#education">Education</a></li>
              <li className= "choices"><a href="#experience">Experience</a></li>
              <li className= "choices"><a href="#about">About</a></li>
            </ul>
            <div className="choices home" id='home'>
            </div>
        </nav>

      );
    }
}

  
export default Navigation;
  