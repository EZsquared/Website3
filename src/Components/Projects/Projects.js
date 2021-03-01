import React from 'react';
import './Projects.css';
import ghlogo from '../img/icons/GitHub-Mark.png';
import ofilogo from '../img/icons/OFI_logo.png';
import sllogo from '../img/icons/sololearn_logo3.png';
import eulogo from '../img/icons/Esuplogo.png';
import { Link } from 'react-router-dom';

function Projects() {
    return (
      <section className="projects" id="projects">
        <div className="rubber3d section-header">
          <div className="section-title">Projects</div>
          <div className="section-descript">My Latest Work</div>
        </div>
        <div className="projects-wrapper">
          <div className="profile-box content-zone project-box">
            <div className="zoom-text about-text">
              <div className="icon leather-button"><span className="tooltip">Grab</span>
              <img className="proj-img" src={ghlogo} />
              </div>
              <div className="desc">
									<div className="con">
                  <a href="https://github.com/EZsquared" target="_blank"><div className="project-title gold-head float-card">GitHub Repository</div></a>
										<div className="project-descript">My Github. See what I've been working on lately.</div>
									</div>
								</div>
            </div>
          </div>
          <div className="profile-box content-zone">
            <div className="zoom-text about-text">
              <div className="icon leather-button"><span className="tooltip">Grab</span>
              <img className="proj-img" src={sllogo} />
              </div>
              <a href="https://www.sololearn.com/Profile/15824287" target="_blank"><div className="project-title gold-head float-card">SoloLearn Code Playground</div></a>
              <div className="project-descript">
              See random bits of code I saved while using my testing grounds for Codewars.com
              </div>
            </div>
          </div>
          <div className="profile-box content-zone">
            <div className="zoom-text about-text">
              <div className="icon leather-button"><span className="tooltip">Grab</span>
              <img className="proj-img" src={eulogo} />
              </div>
              <a href="https://www.youtube.com/channel/UC8a7zFudU_Ok6FQ1TTFwsKg" target="_blank"><div className="project-title gold-head float-card">E's Up Entertainment</div></a>
              <div className="project-descript">
              My YouTube Channel where we explore Computer Science, Trending Topics, and Entertainment Review
              </div>
            </div>
          </div>
          <div className="profile-box content-zone">
            <div className="zoom-text about-text">
              <div className="icon leather-button"><span className="tooltip">Grab</span>
              <img className="proj-img" src={ofilogo} />
              </div>
              <a href="work.html"><div className="project-title gold-head float-card">Opportunity For Improvement</div></a>
              <div className="project-descript">
              My Personal LLC for doing contract work with Operations, Management, Facilitation Solutions 
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  export default Projects;
  