import React from 'react';
import './ProfileBoxes.css';

function ProfileBoxes() {
    return (
      <section className="profile" id="profile">
        <div className="section-header rubber3d">
          <div className="section-title">Profile</div>
          <div className="section-descript">Who I Am</div>
          </div>
        <div className="wrapper">
          <div className="profile-box content-zone"  id="innovation">
            <div className="zoom-text about-text">
              <div className="icon icon-bulb leather-button"><span className="tooltip">Grab</span></div>
              <div className="profile-box-title">Innovation</div>
              <div className="profile-box-descript">
                <p>Proficient at learning <strong>new concepts quickly and accurately</strong>, expediting implementation.</p>
              </div>
            </div>
          </div>
          <div className="profile-box content-zone" id="edutcation">
            <div className="zoom-text about-text">
              <div className="icon icon-study leather-button"><span className="tooltip">Grab</span></div>
              <div className="profile-box-title">Education</div>
              <div className="profile-box-descript">
                <p>Solid background in <strong>Administration, Marketing,</strong> and effective <strong>People Management</strong>.</p>
              </div>
            </div>
          </div>
          <div className="profile-box content-zone" id="communication">
            
            <div className="zoom-text about-text">
              <div className="icon icon-speech-bubble leather-button"><span className="tooltip">Grab</span></div>
              <div className="profile-box-title">Communitication</div>
              <div className="profile-box-descript">
                <p>Values the power of <strong>Business to Consumer Relations</strong> and necessity for superior customer service</p>
              </div>
            </div>  
          </div>
          <div className="profile-box content-zone" id="motivation">
            <div className="zoom-text about-text">
              <div className="icon icon-loader leather-button"><span className="tooltip">Grab</span></div>
              <div className="profile-box-title">Motivation</div>
              <div className="profile-box-descript">
                <p>Works well under pressure with <strong>Professional Standards</strong>. Committed to exceeding operational goals.</p>
              </div>
            </div>
          </div>
          <div className="profile-box content-zone" id="leadership">
            <div className="zoom-text about-text">
              <div className="icon icon-user2 leather-button"><span className="tooltip">Grab</span></div>
              <div className="profile-box-title">Leadership</div>
              <div className="profile-box-descript">
                <p>Experience in conducting <strong>Managerial Responsibilities</strong>. Able to speak clearly and effectively to others.</p>
              </div>
            </div>
          </div>
          <div className="profile-box content-zone" id="reliability">
            <div className="zoom-text about-text">
              <div className="icon icon-clock3 leather-button"><span className="tooltip">Grab</span></div>
              <div className="profile-box-title">Reliability</div>
              <div className="profile-box-descript">
                <p>Dedicated and conscientious individual who can provide <strong>Quality Services on a regular basis</strong>.</p>
              </div>
            </div>  
          </div>
        </div>
      </section>
    )}
  export default ProfileBoxes;
  