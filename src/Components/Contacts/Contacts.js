import React from 'react';
import './Contacts.css';

function Contacts() {
    return (
      <section className="contacts" id="contacts">
        <div className="contacts-wrapper">
          <div className="section-title">Contacts</div>
          <div className="section-descript">Get In Touch</div>
          <div className="contacts-card zoom-text">
            <a target="_top" href="mailto:ericcannon01@gmail.com" target="popup">
              <div className="contact">
                <i className="icon-google"></i>
                <p>EricCannon01@gmail.com</p>
              </div>
            </a>
            <a href="https://goo.gl/maps/Dd5EsWL5BWSvxrf69" target="_blank">
              <div className="contact">
                <i className="icon-map"></i>
                <p>Altamonte Springs, FL</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/eric-cannon-72437b61/" target="_blank">
              <div className="contact">
                <i className="icon-linkedin2"></i>
                <p>EricCannon01@gmail.com</p>
              </div>
            </a>
          </div>
      </div>
      </section>
    )}
  export default Contacts;
  