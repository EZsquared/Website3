import React from 'react';
import './Projects.css';
import ghlogo from '../img/icons/GitHub-Mark.png'
import ofilogo from '../img/icons/OFI_logo.png'
import sllogo from '../img/icons/sololearn_logo3.png'
import eulogo from '../img/icons/Esuplogo.png'

function Projects() {
    return (
      <section class="projects" id="projects">
        <div class="rubber3d section-header">
          <div class="section-title">Projects</div>
          <div class="section-descript">My Latest Work</div>
        </div>
        <div class="projects-wrapper">
          <div class="profile-box content-zone project-box">
            <div class="zoom-text about-text">
              <div class="icon leather-button"><span class="tooltip">Grab</span>
              <img class="proj-img" src={ghlogo} />
              </div>
              <div class="desc">
									<div class="con">
                  <a href="https://github.com/EZsquared" target="_blank"><div class="project-title gold-head float-card">GitHub Repository</div></a>
										<div class="project-descript">My Github. See what I've been working on lately.</div>
									</div>
								</div>
            </div>
          </div>
          <div class="profile-box content-zone">
            <div class="zoom-text about-text">
              <div class="icon leather-button"><span class="tooltip">Grab</span>
              <img class="proj-img" src={sllogo} />
              </div>
              <a href="https://www.sololearn.com/Profile/15824287" target="_blank"><div class="project-title gold-head float-card">SoloLearn Code Playground</div></a>
              <div class="project-descript">
              See random bits of code I saved while using my testing grounds for Codewars.com
              </div>
            </div>
          </div>
          <div class="profile-box content-zone">
            <div class="zoom-text about-text">
              <div class="icon leather-button"><span class="tooltip">Grab</span>
              <img class="proj-img" src={eulogo} />
              </div>
              <a href="https://www.youtube.com/channel/UC8a7zFudU_Ok6FQ1TTFwsKg" target="_blank"><div class="project-title gold-head float-card">E's Up Entertainment</div></a>
              <div class="project-descript">
              My YouTube Channel where we explore Computer Science, Trending Topics, and Entertainment Review
              </div>
            </div>
          </div>
          <div class="profile-box content-zone">
            <div class="zoom-text about-text">
              <div class="icon leather-button"><span class="tooltip">Grab</span>
              <img class="proj-img" src={ofilogo} />
              </div>
              <a href="work.html"><div class="project-title gold-head float-card">Opportunity For Improvement</div></a>
              <div class="project-descript">
              My Personal LLC for doing contract work with Operations, Management, Facilitation Solutions 
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  export default Projects;
  