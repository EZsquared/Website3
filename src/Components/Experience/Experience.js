import React from 'react';
import timlogo from '../img/icons/timacuanlogo.png';
import cclogo from '../img/icons/Country-Corners.jpg';
import evlogo from '../img/icons/EVlogo2.png';
import leglogo from '../img/icons/legacylogo3.png';
import './Experience.css';

function Experience() {
    return (
      <section class="experience" id="experience">
        <div class="section-header rubber3d">
          <div class="section-title">Experience</div>
          <div class="section-descript">My Employment History</div>
          </div>
        <div class="work-wrapper">
          <div class="work-company-wrapper content-zone">
            <div class="company-header float-card">
              <div>
                <div class="company-name gold-head">The Legacy Club</div>
                <div>May 2020 - Current</div>
              </div>
              <div class="logo">
                <img src={leglogo}></img>
              </div>
            </div>
            <div class="position zoom-text">
              <div class="position-title">Outside Services Manager
              <div class="position-date">August 2008 - January 2010</div></div>
                <ul>
                  <li>Oversee, manage, schedule, train, and assist the Outside Service Assistants to maintain and exceed guest servies and satisfaction, while maximizing operational KPI’s.</li>
                </ul>
            </div>
          </div>
          <div class="work-company-wrapper content-zone">
            <div class="company-header float-card">
              <div>
                <div class="company-name gold-head">EV Designs, LLC</div>
                <div>June 2019 – May 2020</div>
              </div>
              <div class="logo">
                <img src={evlogo}></img>
              </div>
            </div>
            <div class="position zoom-text">
              <div class="position-title">Business Development Partner
              <div class="position-date">August 2008 - January 2010</div></div>
                <ul>
                  <li>Entrepreneurial endeavor with associate to establish a premium name in professional glass pool tiling and repair.</li>
                </ul>
            </div>
          </div>
          <div class="work-company-wrapper content-zone">
            <div class="company-header float-card">
              <div>
                <div class="company-name gold-head">Timacuan Golf Club</div>
                <div>August 2011 – September 2019</div>
              </div>
              <div class="logo">
                <img src={timlogo}></img>
              </div>
            </div>
            <div class="position zoom-text">
              <div class="position-title">IT Repair and Maintenance Lead
              <div class="position-date">June 2019 - September 2019</div></div>
                <ul>
                  <li>Re-configured Local Network</li>
                  <li>Implimented network security policies</li>
                  <li>Upgraded work stations</li>
                  <li>Maintained Operating POS database and functionality</li>
                  <li>Ensured continued operation through issue-at-hand troubleshooting.</li>
                </ul>
              <div class="position-title">Director of Golf
              <div class="position-date">June 2018 – June 2019</div></div>
                <ul>
                  <li>Interim Director of Golf to maintain club operations</li>
                  <li>Oversaw the entire golf department, including tournaments, contracts, staffing, and policies.</li>
                </ul>
              <div class="position-title">Account Manager & HR Representative
                <div class="position-date">June 2015 – June 2019</div>
              </div>
              <ul>
                <li>Maintained all Accounts Payable and Receivable, inlcuding Vendor/Client Contract negotiation and resolution. </li>
                <li>Assumed all HR Responsibilities including on-boarding, motivating and challenging employees.</li> 
                <li>Worked directly with Owners and Management to ensure smooth operation of a successful business. </li>
                <li>Held responsible for all cash handling procedures, including reporting daily figures to Ownership and accounting firm.</li>
              </ul>
              <div class="position-title">Golf Professional
                <div class="position-date">September 2012 - June 2015</div>
              </div>
              <ul>
                <li>Tournament Preparation</li>
                <li>Pro Shop Sales</li>
                <li>Attended training and conferences to keep job knowledge current and maintain network connections.</li>
              </ul>
              <div class="position-title">Outside Services Assistant
                <div class="position-date">August 2011 - September 2012</div></div>
                <ul>
                  <li>Range, Carts and Bags</li>
                  <li>Greeted and assisted guests to revenue centers.</li>
                  <li>Ensured guest satisfaction through inquiry.</li>
                  <li>Maintained and improved guest services and stages.</li>
                </ul>
              </div>
          </div>
          <div class="work-company-wrapper content-zone">
            <div class="company-header float-card">
              <div>
                <div class="company-name gold-head">Country Corners Deli and Pizzeria</div>
                <div>August 2004 - January 2010</div>
              </div>
              <div class="logo">
                <img src={cclogo}></img>
              </div>
            </div>
            <div class="position zoom-text">
              <div class="position-title">Restaurant Shift Manager
              <div class="position-date">August 2008 - January 2010</div></div>
                <ul>
                  <li>Responsible for property, employees, and customer satisfaction.</li>
                  <li>Ensured efficient resolutions to issues at hand.</li>
                </ul>
              <div class="position-title">Pizza Chef
              <div class="position-date">August 2008 - January 2010</div></div>
                <ul>
                  <li>Learned to craft quality NY Style Pizza with consistent premium standards. </li>
                  <li>Experience with busy, stacked-tickets, pressure situations.</li>
                </ul>
              <div class="position-title">Deli Hand
                <div class="position-date">March 2006 - January 2010</div>
              </div>
              <ul>
                <li>Assisted Customers with Deli requests, Orders, Food Prepartion, Cleaning & Sanitizing.</li>
              </ul>
              <div class="position-title">Delivery Driver
                <div class="position-date">August 2004 - March 2006</div>
              </div>
              <ul>
                <li>Delivered Deli, Pizza, and Convenience purchases to surrounding area.</li>
                <li>Performed cash handling and guest satisifaction practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )}
  export default Experience;
  