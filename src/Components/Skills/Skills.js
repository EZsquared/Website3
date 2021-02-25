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
                        <p>In addition to my <strong>Business Qualifications</strong>, I continue to pick up new skills and compentencies. I absolutely love absorbing myself into something new and interesting. 
                        While lacking a CS degree, I have recently started my journey to learn the basics of Computer Science, as I work my way through the <strong>Python Programming Language</strong>. 
                        I do have a basic understanding of front-end languages like <strong>HTML, CSS, JS,</strong> but only contextually as it applies to modifying existing code. 
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
                                    <li>Operating System</li>
                                    <li>Office Suite</li>
                                    <li>Command Line</li>
                                    <li>VS Code</li>
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
                                    <li>Docs / Sheets / Forms / etc.</li>
                                    <li>GMail / Workspace</li>
                                    <li>Cloud Platform</li>
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
                                    <li>HTML / CSS</li>
                                    <li>JS / REACT</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )}
  export default Skills;
  