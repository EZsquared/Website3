import React from 'react';
import './Navigation.css';
import NavPicture from './NavPicture';


class Navigation extends React.Component {
  constructor() {
    super();

    //In the state you can keep track of the class you want to add to the element
    this.state = {
      class: "" //For now its empty or you can give it a default class.
    }
  }

  //use the lifecycle methods to trigger the getWindowHeight method.

  componentDidMount(){
       {
      window.addEventListener('scroll', this.getWindowHeight);
     }
  }

  componentWillUnmount(){
    {
      window.removeEventListener('scroll', this.getWindowHeight);
    }
  }

  //then create the method
  getWindowHeight = () => {

    const distanceY = window.scrollY;
    const shrinkOn = "200px";

    console.log(distanceY);

    //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    // if (distanceY > shrinkOn) {
    //   this.setState({
    //     class: "smaller"
    //   })
    // }
  }
  
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
              <li class= "choices"><a href="#profile">Profile</a></li>
              <li class= "choices"><a href="#skills">Skills</a></li>
              <li class="choices"><a href="#education">Education</a></li>
              <li class= "choices"><a href="#experience">Experience</a></li>
              <li class= "choices"><a href="#projects">Projects</a></li>
              <li class= "choices"><a href="#contacts">Contacts</a></li>
              <li class="choices"><a href="#downloads">Downloads</a></li>
            </ul>
        </nav>

      );
    }
}

  
export default Navigation;
  