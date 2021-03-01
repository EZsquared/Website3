
import React, { useState } from 'react';
import '../Components/leather-button.css';
import './App.css';
import '../Components/fonts/icomoon.css';
import Cover from '../Components/Cover/Cover';
import Profile from '../Components/Profile/Profile';
import Projects from '../Components/Projects/Projects';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import mySong from '../Components/sounds/Eternal_Garden.mp3';
import ReactHowler from 'react-howler'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isclick: false,
      choice: "home",
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
  }
  handlePlay () {
    const icon = document.getElementById('song-icon');
    if (this.state.playing === false) {
      icon.classList.remove('icon-media-play-outline');
      this.setState({
        playing: true
        })
      } else {
        icon.classList.add('icon-media-play-outline');
        this.setState({
          playing: false
        })
      }
  }
  render () {
    return (
      <Router>
      <div class="App">
        <Switch>
          <Route path="/" exact component={Cover}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/projects" component={Projects}/>

        </Switch>
      <div className="home-click">
              <div id='song-icon'className="home-nav-icon icon-media-pause-outline icon-media-play-outline"  onClick={this.handlePlay} >
                 <ReactHowler src={mySong} volume={.1} playing={this.state.playing} loop={true}/>
              </div>
              <div>
                <Link to='/'>
                    <div id='home-icon' className="icon-home"></div>
                </Link>
              </div>

            </div>
    </div>
      
      </Router>
      
    );
  }
}

export default App;