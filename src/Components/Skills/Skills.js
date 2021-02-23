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
                                    <li>Operating System</li>
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
                                    <li>Operating System</li>
                                    <li>Office Suite</li>
                                    <li>Command Line</li>
                                    <li>Operating System</li>
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
                                    <li>Operating System</li>
                                    <li>Office Suite</li>
                                    <li>Command Line</li>
                                    <li>Operating System</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-zone">
                    <div className="zoom-text progBarWrap">
                            <div className="skill">
                                <h3>HTML / CSS</h3>
                                <div className="progress-wrap">
                                    <div className="progress yellow html">
                                        <div className="percent-num">35%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>Python</h3>
                                <div className="progress-wrap">
                                    <div className="progress yellow python">
                                        <div className="percent-num">40%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>SQL / Database</h3>
                                <div className="progress-wrap">
                                    <div className="progress yellow sql">
                                        <div className="percent-num">20%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>JavaScript / REACT</h3>
                                <div className="progress-wrap">
                                    <div className="progress yellow js">
                                        <div className="percent-num">30%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <h3>Computer Science Studies</h3>
                                <div className="progress-wrap">
                                    <div className="progress yellow cs">
                                        <div className="percent-num">30%</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="skill">
                                <h3>HTML / CSS</h3>
                                <div className="progress-wrap">
                                    <div className="progress html">
                                        <div className="percent-num">90%</div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </section>
    )}
  export default Skills;
  