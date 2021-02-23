import React from 'react';
import './ProfileBoxes.css';

function ProfileBoxes() {
    return (
      <section class="profile" id="profile">
        <div class="section-header rubber3d">
          <div class="section-title">Profile</div>
          <div class="section-descript">Who I Am</div>
          </div>
        <div class="wrapper">
          <div class="profile-box content-zone"  id="innovation">
            <div class="zoom-text about-text">
              <div class="icon icon-bulb leather-button"><span class="tooltip">Grab</span></div>
              <div class="profile-box-title">Innovation</div>
              <div class="profile-box-descript">
                <p>Proficient at learning <strong>new concepts quickly and accurately</strong>, expediting implementation.</p>
              </div>
            </div>
          </div>
          <div class="profile-box content-zone" id="edutcation">
            <div class="zoom-text about-text">
              <div class="icon icon-study leather-button"><span class="tooltip">Grab</span></div>
              <div class="profile-box-title">Education</div>
              <div class="profile-box-descript">
                <p>Solid background in <strong>Administration, Marketing,</strong> and effective <strong>People Management</strong>.</p>
              </div>
            </div>
          </div>
          <div class="profile-box content-zone" id="communication">
            
            <div class="zoom-text about-text">
              <div class="icon icon-speech-bubble leather-button"><span class="tooltip">Grab</span></div>
              <div class="profile-box-title">Communitication</div>
              <div class="profile-box-descript">
                <p>Values the power of <strong>Business to Consumer Relations</strong> and necessity for superior customer service</p>
              </div>
            </div>  
          </div>
          <div class="profile-box content-zone" id="motivation">
            <div class="zoom-text about-text">
              <div class="icon icon-loader leather-button"><span class="tooltip">Grab</span></div>
              <div class="profile-box-title">Motivation</div>
              <div class="profile-box-descript">
                <p>Works well under pressure with <strong>Professional Standards</strong>. Committed to exceeding operational goals.</p>
              </div>
            </div>
          </div>
          <div class="profile-box content-zone" id="leadership">
            <div class="zoom-text about-text">
              <div class="icon icon-user2 leather-button"><span class="tooltip">Grab</span></div>
              <div class="profile-box-title">Leadership</div>
              <div class="profile-box-descript">
                <p>Experience in conducting <strong>Managerial Responsibilities</strong>. Able to speak clearly and effectively to others.</p>
              </div>
            </div>
          </div>
          <div class="profile-box content-zone" id="reliability">
            <div class="zoom-text about-text">
              <div class="icon icon-clock3 leather-button"><span class="tooltip">Grab</span></div>
              <div class="profile-box-title">Reliability</div>
              <div class="profile-box-descript">
                <p>Dedicated and conscientious individual who can provide <strong>Quality Services on a regular basis</strong>.</p>
              </div>
            </div>  
          </div>
        </div>
      </section>
    )}
  export default ProfileBoxes;
  