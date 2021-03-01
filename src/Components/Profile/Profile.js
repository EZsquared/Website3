
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
import { Link } from 'react-router-dom';


function Profile (){
  useEffect(()=> {
    addListener(getButtons());

  })
  
    return (
      <div className="Profile">
        <Navigation/>
        <div className="main-container">
          <div className="main-content">
            <AboutMe/>
            <Skills/>
            <Education/>
            <Experience/>
          </div>
        </div>
      </div>
    );
  }

export default Profile;