import React from 'react';
import './Contacts.css';

function Contacts() {
    return (
      <section class="contacts" id="contacts">
        <div class="contacts-wrapper">
          <div class="section-title">Contacts</div>
          <div class="section-descript">Get In Touch</div>
          <div class="contacts-card zoom-text">
            <a target="_top" href="mailto:ericcannon01@gmail.com" target="popup">
              <div class="contact">
                <i class="icon-google"></i>
                <p>EricCannon01@gmail.com</p>
              </div>
            </a>
            <a href="https://goo.gl/maps/Dd5EsWL5BWSvxrf69" target="_blank">
              <div class="contact">
                <i class="icon-map"></i>
                <p>Altamonte Springs, FL</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/eric-cannon-72437b61/" target="_blank">
              <div class="contact">
                <i class="icon-linkedin2"></i>
                <p>EricCannon01@gmail.com</p>
              </div>
            </a>
          </div>
      </div>
      </section>
    )}
  export default Contacts;
  