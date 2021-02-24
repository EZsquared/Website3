
import React, { useState } from 'react';
import '../Components/leather-button.css';
import './App.css';
import '../Components/fonts/icomoon.css';
import Cover from '../Components/Cover/Cover';
import CoverCard from '../Components/CoverCard/CoverCard';
import Navigation from '../Components/Navigation/Navigation';
import AboutMe from '../Components/AboutMe/AboutMe';
import ProfileBoxes from '../Components/ProfileBoxes/ProfileBoxes';
import Skills from '../Components/Skills/Skills';
import Education from '../Components/Education/Education';
import Experience from '../Components/Experience/Experience';
import Projects from '../Components/Projects/Projects';
import Contacts from '../Components/Contacts/Contacts';
import Downloads from '../Components/Downloads/Downloads';
import { addListener, getButtons } from '../myJavaScripts';
import Sound from 'react-sound';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isclick: false,
      choice: "home"
    };
  }
  componentDidMount () {
    addListener(getButtons());
    }

  render () {
    return (
      <div class="App">
        { this.state.choice === "home" ?
          <div className='home'>
            <Cover/>
          </div>
           : <Navigation/>
        } 
        {/* <Navigation/>
        <div class="main-container">
          <div className="main-content">
            <section></section>
            <AboutMe/>
            <ProfileBoxes/>
            <Skills/>
            <Education/>
            <Experience/>
            <Projects/>
            
          </div>
          <div class="footer rubber3d">
            <Contacts/>
            <Downloads/>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;