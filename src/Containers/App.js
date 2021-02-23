
import React from 'react';
import '../Components/leather-button.css';
import './App.css';
import '../Components/fonts/icomoon.css';
import Navigation from '../Components/Navigation/Navigation';
// import Cover from '../Components/Cover/Cover';
import AboutMe from '../Components/AboutMe/AboutMe';
import ProfileBoxes from '../Components/ProfileBoxes/ProfileBoxes';
import Skills from '../Components/Skills/Skills';
import Education from '../Components/Education/Education';
import Experience from '../Components/Experience/Experience';
import Projects from '../Components/Projects/Projects';
import Contacts from '../Components/Contacts/Contacts';
import Downloads from '../Components/Downloads/Downloads';
import { addListener, getButtons } from '../myJavaScripts';
import Particles from 'react-tsparticles';


class App extends React.Component {
  
  componentDidMount () {
    
    addListener(getButtons());
    }
  render () {
    return (
      <div class="App">
        <Navigation/>
          
          <div class="main-container">
            <div class="content-zone cover-content">
              <Particles
                  options={{
                    backgroundMode: {
                    enable: false,
                    zIndex: 1},
                    fpsLimit: 60,
                    interactivity: {
                      detectsOn: "canvas",
                        events: {
                          onClick: { enable: true, mode: "repulse" },
                          onHover: {
                          enable: true,
                          mode: "bubble",
                          parallax: { enable: false, force: 2, smooth: 10 }},
                          resize: true},
                        modes: {
                          bubble: {
                            distance: 100,
                            duration: 1,
                            opacity: .9,
                            size: 3,
                            speed: .5},
                          grab: { distance: 400, line_linked: { opacity: 0.5 } },
                          push: { particles_nb: 4 },
                          remove: { particles_nb: 2 },
                          repulse: { distance: 300, duration: 1 }}},
                        particles: {
                          color: { value: "#fff" },
                          links: {
                            color: "#ffffff",
                            distance: 10000,
                            enable: false,
                            opacity: 0.2,
                            width: 1},
                          move: {
                            attract: { enable: false, rotateX: 1600, rotateY: 1200 },
                            direction: "bottom",
                            enable: true,
                            outMode: "out",
                            random: true,
                            size: true,
                            speed: 1,
                            straight: false},
                          number: { density: { enable: true, area: 1800 }, value: 1150 },
                            opacity: {
                              random: true,
                              value: 0.5
                            },
                            shape: {
                              type: "circle"
                            },
                            size: {
                              random: true,
                              value: 10
                            }
                          },
                          detectRetina: true
                        }}
              />
            </div>
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
              {/* <Downloads/> */}
            </div>
          </div>
        </div>

    );
  }
}

export default App;