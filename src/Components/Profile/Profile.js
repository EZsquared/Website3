
import React, { useEffect } from 'react';
import '../leather-button.css';
import './Profile.css';
import '../fonts/icomoon.css';
import { addListener, getButtons } from '../myJavaScripts';
import Navigation from '../Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';


function Profile (){
  useEffect(()=> {
    addListener(getButtons());

  })
  
    return (
      <div className="Profile">
        <Navigation/>
        <div className="main-container">
          <div className="main-content">
            <Skills/>
            <Education/>
            <Experience/>
            <AboutMe/>
          </div>
        </div>
      </div>
    );
  }

export default Profile;