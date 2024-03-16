/* 
* Footer component
*/

import React from "react";
import styles from '../styles/main.module.scss';

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "teal", color: "white", padding: "20px" , marginTop: "30px"}}
    >
      <div style={{ width: "33.33%", float: "left" }}>
        <h3 className={styles.footer__copyright}>Explore</h3>
        <ul>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Travel Guides</a>
          </li>
          <li>
            <a href="#">Travel Tips</a>
          </li>
          <li>
            <a href="#">Travel Deals</a>
          </li>
        </ul>
      </div>
      <div style={{ width: "33.33%", float: "left" }}>
        <h3>Plan Your Trip</h3>
        <ul>
          <li>
            <a href="#">Book Flights</a>
          </li>
          <li>
            <a href="#">Book Hotels</a>
          </li>
          <li>
            <a href="#">Rent a Car</a>
          </li>
          <li>
            <a href="#">Travel Insurance</a>
          </li>
        </ul>
      </div>
      <div style={{ width: "33.33%", float: "left" }}>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="#">Customer Support</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
        </ul>
      </div>
      <div style={{ clear: "both" }}></div>
      <hr style={{ borderColor: "white" }} />
      <p style={{ textAlign: "center" }}>
        &copy; 2024 Your Travel Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
