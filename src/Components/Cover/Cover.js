import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import CoverCard from '../CoverCard/CoverCard';
import useSound from 'use-sound';
import './Cover.css';
import mySong from '../sounds/Eternal_Garden.mp3';
import ReactHowler from 'react-howler'

// const song = new Audio(mySong);

class Cover extends React.Component {
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     playing: false
  //   }
  //   this.handlePlay = this.handlePlay.bind(this)
  //   // this.handlePause = this.handlePause.bind(this)
  // }

  // handlePlay () {
  //   const icon = document.getElementById('song-icon');
  //   if (this.state.playing === false) {
  //     icon.classList.remove('icon-mute');
  //     this.setState({
  //       playing: true
  //       })
  //     } else {
  //       icon.classList.add('icon-mute');
  //       this.setState({
  //         playing: false
  //       })
  //     }
  // }

  // handlePause () {
  //   this.setState({
  //     playing: false
  //   })
  // }

  render (){
    return(
          <div className="cover-content">
            <Particles className="particles"
                options={{
                  backgroundMode: {
                  enable:true,
                  zIndex: 1},
                  fpsLimit: 60,
                  interactivity: {
                    detectsOn: "canvas",
                      events: {
                        onClick: { enable: true, mode: "repulse" },
                        onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: { enable: false, force: 8, smooth: 10 }},
                        resize: true},
                      modes: {
                        bubble: {
                          distance: 200,
                          duration: 1,
                          opacity: 1,
                          size: 2,
                          speed: .1},
                        grab: { distance: 1600, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 },
                        repulse: { distance: 1000, duration: .5 }}},
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
                          direction: "top",
                          enable: true,
                          outMode: "out",
                          random: true,
                          size: true,
                          speed: .5,
                          straight: false},
                        number: { density: { enable: true, area: 1500 }, value: 150 },
                          opacity: {
                            random: true,
                            value: 0.2
                          },
                          shape: {
                            type: "circle"
                          },
                          size: {
                            random: true,
                            value: 50
                          }
                        },
                        detectRetina: true
                      }}
              /> 
            <CoverCard/>
            
          </div>
  )}
}

  export default Cover;