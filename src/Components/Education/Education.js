import React from 'react';
import glogo from '../img/icons/glogo2.png';
import tialogo from '../img/icons/comptia2.png';
import gaalogo from '../img/icons/gaalogo2.png';
import sunylogo from '../img/icons/sunylogo.png';
import dutchlogo from '../img/icons/dutchlogo2.png';
import bslogo from '../img/icons/boyscoutslogo.png';
import './Education.css';

function Education() {
    return (
      <section className="education" id="education">
        <div class="section-header rubber3d">
          <div className="section-title">Education</div>
          <div className="section-descript">My Knowledge Base</div>
          </div>
        <div className="education-wrapper">
          <div className="certs-education-wrapper"><div class="sub-cat"> Courses & Certificates</div>
            <div className="content-zone education-slot">
              <div className="earned zoom-text float-card">
                <div className="earned-title gold-head">IT Automation</div>
                with Python
              </div>
              <div className="subjects zoom-text float-card">
                <ul>
                  <li>Crash Course on Python</li>
                  <li>Using Pythong to Interact with the Operating System</li>
                  <li>Introduction to Git and GitHub</li>
                  <li>Troubleshooting and Debugging Techniques</li>
                  <li>Configuration Management and the Cloud</li>
                  <li>Automating Real-World Tasks with Python</li>
                </ul>
              </div>
              <div className="logo school-wrapper zoom-text float-card">
                <img src={glogo}/>
                <div>
                  <div className="school gold-head">Google Certification</div>
                  <div className="location">Coursera.org</div>
                </div>
                <div className="school-year">2021</div>
              </div>
            </div>
            <div className="content-zone education-slot">
              <div className="earned zoom-text float-card">
                <div className="earned-title gold-head">A+ Training </div>
                </div>
              <div className="subjects zoom-text float-card">
                <ul>
                  <li>IT Troubleshooting and Repair</li>
                  <li>Network Administration</li>
                  <li>Printing Support</li>
                </ul>
              </div>
              <div className="logo school-wrapper zoom-text float-card">
                <img src={tialogo}/>
                <div>
                  <div className="school gold-head">CompTIA</div>
                  <div className="location">Orlando, FL</div>
                </div>
                <div className="school-year">2019</div>
                
              </div>
            </div>
          </div>
          <div className="formal-education-wrapper"><div class="sub-cat">Formal Degrees</div>
            <div className="content-zone education-slot">
              <div className="earned zoom-text float-card">
                <div className="earned-title gold-head">Associate’s Degree</div>Complex Operations and Management</div>
              <div className="subjects zoom-text float-card">
                <ul>
                  <li>Complex Revenue Centers and Management</li>
                  <li>Golf Instruction Certified</li>
                </ul>
              </div>
              <div className="logo school-wrapper zoom-text float-card">
                <img src={gaalogo}/>
                <div>
                  <div className="school gold-head">Golf Academy of America</div>
                  <div>Orlando, FL</div>
                </div>
                <div className="school-year">2011 with Honors</div>
              </div>
            </div>
            <div className="content-zone education-slot">
              <div className="earned zoom-text float-card">
                <div className="earned-title gold-head">Bachelor's Degree</div>Business Marketing</div>
              <div className="subjects zoom-text float-card">
                <ul>
                  <li>Concentration in Marketing, Statistics, and Project Management.</li>
                </ul>
              </div>
              <div className="logo school-wrapper zoom-text float-card">
                <img src={sunylogo}></img>
                <div>
                  <div className="school gold-head">State University of New York</div>
                  <div>New Paltz, NY</div>
                </div>
                <div className="school-year">2008 Dean’s List</div>
              </div>
            </div>
            <div className="content-zone education-slot">
              <div className="earned zoom-text float-card">
                <div className="earned-title gold-head">Associate’s Degree</div>Business Administration</div>
              <div className="subjects zoom-text float-card">
                <ul>
                  <li>Concentration in Management and Human Resources.</li>
                </ul>
              </div>
              <div className="logo school-wrapper zoom-text float-card">
                <img src={dutchlogo}></img>
                <div>
                    <div className="school gold-head">Dutchess Community </div>
                    <div>Poughkeepsie, NY</div>
                </div>
                <div className="school-year">2006 President’s List</div>
              </div>
            </div>
          </div>
          <div className="achiev-education-wrapper"><div class="sub-cat">Achievements</div>
            <div className="content-zone education-slot">
              <div className="earned zoom-text float-card">
                <div className="earned-title gold-head">Eagle Scout</div></div>
              
              <div className="subjects zoom-text float-card">
                <ul>
                  Expertise in leadership, dedication, team working practices, and advanced skills in emergency survival.
                  Highest rank attainable in the Scouting Organization.
                </ul>
              </div>
              <div className="logo school-wrapper zoom-text float-card">
                <img src={bslogo}></img>
                <div className="school gold-head">Boy Scouts of America</div>
                <div className="school-year">2003</div>
              </div>
            </div>   
          </div>
        </div>
      </section>
    )}
  export default Education;
  