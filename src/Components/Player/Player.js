import React from 'react';
import './Player.css';

function Player() {


<div id="audio-player-container">
  <p>audio player ish</p>
  <button id="play-icon"></button>
  <span id="current-time" class="time">0:00</span>
  <input type="range" id="seek-slider" max="100" value="0">
  <span id="duration" class="time">0:00</span>
  <output id="volume-output">100</output>
  <input type="range" id="volume-slider" max="100" value="100">
  <button id="mute-icon"></button>
</div>
