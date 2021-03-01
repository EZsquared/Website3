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
                        <p>I continue to pick up new skills and compentencies. I absolutely love absorbing myself into something new and interesting.
                        I intend to keep learning towards a goal of <strong>Full Stack Knowledge</strong>. Here you can track my progess through these skills. </p>
                    </div>
                </div>
                <div className="wrapper">
                    <div className="profile-box content-zone">
                        <div className="zoom-text about-text">
                            <div className="icon icon-windows leather-button"><span className="tooltip">Grab</span></div>
                            <div className="profile-box-title">Windows Suite</div>
                            <div classNameName="profile-box-descript">
                                <ul>
                                    <li><input type="checkbox" checked />System Installations</li>
                                    <li><input type="checkbox" checked />
                                        Office Apps</li>
                                    <li><input type="checkbox" checked />
                                        Command Line</li>
                                    <li><input type="checkbox" checked />
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
                                    <li><input type="checkbox" checked />
                                        Google Drive Apps</li>
                                    <li><input type="checkbox" checked />
                                        GMail / Workspace</li>
                                    <li><input type="checkbox" checked />
                                        Google Cloud Platform</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile-box content-zone"  id="innovation">
                        <div className="zoom-text about-text">
                            <div className="icon icon-code leather-button"><span className="tooltip">Grab</span></div>
                            <div className="profile-box-title">Programming</div>
                            <div classNameName="profile-box-descript">
                                <ul>
                                    <li><input type="checkbox" checked />
                                        Python</li>
                                    <li><input type="checkbox" checked />
                                        HTML / CSS</li>
                                    <li><input type="checkbox" checked />
                                        REACT</li>
                                    <li><input type="checkbox" unchecked/>
                                        JavaScript</li>
                                    <li><input type="checkbox" unchecked/>
                                        SQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )}
  export default Skills;
  