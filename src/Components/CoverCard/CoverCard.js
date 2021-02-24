import React, { useEffect } from 'react';
import './CoverCard.css'
import '../Navigation/Navigation.css';



function CoverCard() {
  useEffect(() => {
    const card = document.querySelector('.CoverCard');
    const container = document.querySelector('.card-container2');

    const name = document.querySelector('.name-cont2');
    const sub = document.querySelector('.covercard-subtext');
    const links = document.querySelector('.cover-links');

    // card.style.transform = `rotateY(360deg)`;

    container.addEventListener('mousemove', (e) => {
      let xAxis  = ((window.innerWidth / 2 - e.pageX) /15 );
      let yAxis  = ((window.innerHeight / 2 - e.pageY) /15 );
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    container.addEventListener('mouseenter', (e) => {
      card.style.transition = 'none';
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      sub.style.transition = '1s ease-in';
      sub.style.transform = "translateZ(80px)";
      name.style.transition = '1.2s ease-in';
      name.style.transform = "translateZ(180px)";

      
    });
    container.addEventListener('mouseleave', (e) => {
      card.style.transition = 'all .5s';
      card.style.transform = `rotateY(-360deg) rotateX(0deg)`;
      name.style.transform = "translateZ(0px)";
      sub.style.transform = "translateZ(0px)";
    });
  });
    return (
      <div className="card-container2">
        <div className="CoverCard">
            <div class="name-cont2">
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
            <div class= "covercard-subtext">
                Business Administrator turned Software Developer
            </div>
            <div className="cover-links">
              <icon className="cover-link icon-github"></icon>
              <icon className="cover-link icon-github"></icon>
              <icon className="cover-link icon-github"></icon>
              <icon className="cover-link icon-github"></icon>
            </div>
        </div>
        </div>
    )}
  export default CoverCard;