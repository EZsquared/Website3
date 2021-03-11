import React from 'react';
import '../ProfileBoxes/ProfileBoxes.css';
import './Skills.css';

function Skills() {
    return (
        <section className="skills" id="skills">
            <div class="section-header rubber3d">
                <div className="section-title">Skills</div>
                <div className="section-descript">My Progression</div>
                </div>
            <div className="skills-wrapper">
                <div className="skills-content about-content content-zone">
                    <div className="about-text zoom-text ">
                        <div className="icon icon-bulb leather-button"><span className="tooltip">Grab</span></div>
                        <div className="profile-box-title">Technology Exposure</div>
                        <p>I fell in love with Programming. I have utilized at hand resources to teach myself the start of web development. I didn’t have the means to attend additional schooling or a bootcamp, so I got to work outlining the subjects I would need to learn to have a comparable education to those finishing a few month bootcamp. I got started with a comprehensive Python tutorial for my Object Oriented Programming Concepts(Back-End). I then tracked down courses on Coursera and Udemy that looked like they would provide the other needed Front-End Languages and Frameworks like HTML, CSS and of course Javascript.
                        <p>Hard to believe where this all started in 2020. It's been such a journey. I continue to pick up new skills and compentencies. I absolutely love absorbing myself into something new and interesting.
                        I intend to keep learning towards a goal of <strong>Full Stack Knowledge</strong>. Here you can track my progess through these skills. </p></p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="profile-box content-zone"  id="innovation">
                        <div className="zoom-text about-text">
                            <div className="icon icon-code leather-button"><span className="tooltip">Grab</span></div>
                            <div className="profile-box-title">Programming</div>
                            <div classNameName="profile-box-descript">
                                <ul>
                                    <li><input type="checkbox" defaultChecked readOnly/>
                                        Python</li>
                                    <li><input type="checkbox" defaultChecked />
                                        HTML / CSS</li>
                                    <li><input type="checkbox" defaultChecked/>
                                        JavaScript / REACT</li>
                                    <li><input type="checkbox" defaultChecked />
                                        Node.js / Express</li>
                                    <li><input type="checkbox" defaultChecked />
                                        SQL / PostgreSQL</li>
                                    <li><input type="checkbox" defaultChecked/>
                                        API / Postman</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile-box content-zone">
                        <div className="zoom-text about-text">
                            <div className="icon icon-windows leather-button"><span className="tooltip">Grab</span></div>
                            <div className="profile-box-title">Windows Suite</div>
                            <div classNameName="profile-box-descript">
                                <ul>
                                    <li><input type="checkbox" defaultChecked />System Installations</li>
                                    <li><input type="checkbox" defaultChecked />
                                        Office Apps</li>
                                    <li><input type="checkbox" defaultChecked />
                                        Command Line</li>
                                    <li><input type="checkbox" defaultChecked />
                                        VS Code</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile-box content-zone"  id="innovation">
                        <div className="zoom-text about-text">
                            <div className="icon icon-google leather-button"><span className="tooltip">Grab</span></div>
                            <div className="profile-box-title">Google Suite</div>
                            <div classNameName="profile-box-descript">
                                <ul>
                                    <li><input type="checkbox" defaultChecked />
                                        Google Drive Apps</li>
                                    <li><input type="checkbox" defaultChecked />
                                        GMail / Workspace</li>
                                    <li><input type="checkbox" defaultChecked />
                                        Google Cloud Platform</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )}
  export default Skills;
  