import React, { useEffect } from 'react';
import './CoverCard.css'
import '../Navigation/Navigation.css';
import { Link } from 'react-router-dom';



function CoverCard() {
  useEffect(() => {
    const card = document.querySelector('.CoverCard');
    const container = document.querySelector('.card-container2');

    const name = document.querySelector('.name-cont2');
    const sub = document.querySelector('.covercard-subtext');
    const links = document.querySelector('.cover-links');

    // card.style.transform = `rotateY(360deg)`;

    container.addEventListener('mousemove', (e) => {
      let xAxis  = ((window.innerWidth / 2 - e.pageX) /10 );
      let yAxis  = ((window.innerHeight / 2 - e.pageY) /25 );
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', (e) => {
      card.style.transition = 'none';
      sub.style.transition = '.6s ease-out';
      sub.style.transform = "translateZ(80px)";
      name.style.transition = '.6s ease-in';
      name.style.transform = "translateZ(180px)";
      links.style.transition = '.6s ease-in';
      links.style.transform = "translateZ(120px)";
    });
    container.addEventListener('mouseleave', (e) => {
      card.style.transition = 'all .6s';
      card.style.transform = `rotateY(-360deg) rotateX(0deg)`;
      name.style.transition = 'all .6s ease-in';
      name.style.transform = "translateZ(0px)";
      sub.style.transition = 'all .5s ease-in';
      sub.style.transform = "translateZ(0px)";
      links.style.transition = 'all .5s ease-in';
      links.style.transform = "translateZ(0px)";
    });
  });
    return (
      <div className="card-container2">
        <div className="CoverCard">
            <div className="name-cont2">
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
            <div className= "covercard-subtext">
                Business Administrator turned Software Developer
            </div>
            <div className="cover-links">
              <Link to='/profile' ><div className="cover-link icon-user-outline"><span className="tooltip-cover">Profile</span></div></Link>
              <Link to='/projects' ><div className="cover-link icon-folder"><span className="tooltip-cover">Projects</span></div></Link>
              <a href='https://www.linkedin.com/in/eric-cannon-72437b61/' target="_blank" ><div className="cover-link linked icon-social-linkedin"><span className="tooltip-cover">LinkedIn</span></div></a>
              <a href='../downloads/EricCannonResume2020.zip' download><div className="cover-link icon-download"><span className="tooltip-cover">Resume</span></div></a>
              <a href='mailto:ericcannon01@gmail.com' target="_blank" ><div className="cover-link icon-mail"><span className="tooltip-cover">Contact</span></div></a>
            </div>
            
        </div>
        </div>
    )}
  export default CoverCard;