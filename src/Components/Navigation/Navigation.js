import React, { useState } from 'react';
import './Navigation.css';
import NavPicture from './NavPicture';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  render() {
    return (
        <nav class="zone sidenav sticky">
            <NavPicture/>
            <div class="name-cont">
              <div class="animate-letter">E</div>
              <div class="animate-letter">r</div>
              <div class="animate-letter">i</div>
              <div class="animate-letter">c</div>
              <div class="space-break"></div>
              <div class="animate-letter">C</div>
              <div class="animate-letter">a</div>
              <div class="animate-letter">n</div>
              <div class="animate-letter">n</div>
              <div class="animate-letter">o</div>
              <div class="animate-letter">n</div>
            </div>
            <div class= "navtext descript-container">
                <div class="title-descript">Junior Developer</div>
                <div class="title-descript">Management & Facilitation</div>
            </div>
            <ul class="navtext choice-container">
              <li class= "choices"><a href="#about">About</a></li>
              <li class= "choices"><a href="#skills">Skills</a></li>
              <li class="choices"><a href="#education">Education</a></li>
              <li class= "choices"><a href="#experience">Experience</a></li>
            </ul>
            <div class="choices home" id='home'>
            </div>
        </nav>

      );
    }
}

  
export default Navigation;
  