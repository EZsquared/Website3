import React from 'react';
import timlogo from '../img/icons/timacuanlogo.png';
import cclogo from '../img/icons/Country-Corners.jpg';
import evlogo from '../img/icons/EVlogo2.png';
import leglogo from '../img/icons/legacylogo3.png';
import './Experience.css';

function Experience() {
    return (
      <section className="experience" id="experience">
        <div className="section-header rubber3d">
          <div className="section-title">Experience</div>
          <div className="section-descript">My Employment History</div>
          </div>
        <div className="work-wrapper">
          <div className="work-company-wrapper content-zone">
            <div className="company-header float-card">
              <div>
                <div className="company-name gold-head">The Legacy Club</div>
                <div>May 2020 - Current</div>
              </div>
              <div className="logo">
                <img src={leglogo}></img>
              </div>
            </div>
            <div className="position zoom-text">
              <div className="position-title">Outside Services Supervisor
              <div className="position-date">August 2020 - Current</div></div>
                <ul>
                  <li>Oversee, manage, schedule, train, and assist the Outside Service Assistants to maintain and exceed guest servies and satisfaction, while maximizing operational KPI’s.</li>
                </ul>
            </div>
          </div>
          <div className="work-company-wrapper content-zone">
            <div className="company-header float-card">
              <div>
                <div className="company-name gold-head">EV Designs, LLC</div>
                <div>June 2019 – May 2020</div>
              </div>
              <div className="logo">
                <img src={evlogo}></img>
              </div>
            </div>
            <div className="position zoom-text">
              <div className="position-title">Business Development Partner
              <div className="position-date">June 2019 – May 2020</div></div>
                <ul>
                  <li>Entrepreneurial endeavor with associate to establish a premium name in professional glass pool tiling and repair.</li>
                </ul>
            </div>
          </div>
          <div className="work-company-wrapper content-zone">
            <div className="company-header float-card">
              <div>
                <div className="company-name gold-head">Timacuan Golf Club</div>
                <div>August 2011 – September 2019</div>
              </div>
              <div className="logo">
                <img src={timlogo}></img>
              </div>
            </div>
            <div className="position zoom-text">
              <div className="position-title">IT Repair and Maintenance Lead
              <div className="position-date">June 2019 - September 2019</div></div>
                <ul>
                  <li>Re-configured Local Network</li>
                  <li>Implimented network security policies</li>
                  <li>Upgraded work stations</li>
                  <li>Maintained Operating POS database and functionality</li>
                  <li>Ensured continued operation through issue-at-hand troubleshooting.</li>
                </ul>
              <div className="position-title">Director of Golf
              <div className="position-date">June 2018 – June 2019</div></div>
                <ul>
                  <li>Interim Director of Golf to maintain club operations</li>
                  <li>Oversaw the entire golf department, including tournaments, contracts, staffing, and policies.</li>
                </ul>
              <div className="position-title">Account Manager & HR Representative
                <div className="position-date">June 2015 – June 2019</div>
              </div>
              <ul>
                <li>Maintained all Accounts Payable and Receivable, inlcuding Vendor/Client Contract negotiation and resolution. </li>
                <li>Assumed all HR Responsibilities including on-boarding, motivating and challenging employees.</li> 
                <li>Worked directly with Owners and Management to ensure smooth operation of a successful business. </li>
                <li>Held responsible for all cash handling procedures, including reporting daily figures to Ownership and accounting firm.</li>
              </ul>
              <div className="position-title">Golf Professional
                <div className="position-date">September 2012 - June 2015</div>
              </div>
              <ul>
                <li>Tournament Preparation</li>
                <li>Pro Shop Sales</li>
                <li>Attended training and conferences to keep job knowledge current and maintain network connections.</li>
              </ul>
              <div className="position-title">Outside Services Assistant
                <div className="position-date">August 2011 - September 2012</div></div>
                <ul>
                  <li>Range, Carts and Bags</li>
                  <li>Greeted and assisted guests to revenue centers.</li>
                  <li>Ensured guest satisfaction through inquiry.</li>
                  <li>Maintained and improved guest services and stages.</li>
                </ul>
              </div>
          </div>
          <div className="work-company-wrapper content-zone">
            <div className="company-header float-card">
              <div>
                <div className="company-name gold-head">Country Corners Deli and Pizzeria</div>
                <div>August 2004 - January 2010</div>
              </div>
              <div className="logo">
                <img src={cclogo}></img>
              </div>
            </div>
            <div className="position zoom-text">
              <div className="position-title">Restaurant Shift Manager
              <div className="position-date">August 2008 - January 2010</div></div>
                <ul>
                  <li>Responsible for property, employees, and customer satisfaction.</li>
                  <li>Ensured efficient resolutions to issues at hand.</li>
                </ul>
              <div className="position-title">Pizza Chef
              <div className="position-date">August 2006 - January 2010</div></div>
                <ul>
                  <li>Learned to craft quality NY Style Pizza with consistent premium standards. </li>
                  <li>Experience with busy, stacked-tickets, pressure situations.</li>
                </ul>
              <div className="position-title">Deli Hand
                <div className="position-date">March 2006 - January 2010</div>
              </div>
              <ul>
                <li>Assisted Customers with Deli requests, Orders, Food Prepartion, Cleaning & Sanitizing.</li>
              </ul>
              <div className="position-title">Delivery Driver
                <div className="position-date">August 2004 - March 2006</div>
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
  