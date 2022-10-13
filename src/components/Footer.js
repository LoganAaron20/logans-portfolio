import React from "react";
import "./footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Pensacola, FL</p>
              <p>United States</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              205 405 3215
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              loganaaron16@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            My name is Logan Aaron. I enjoy discussing new projects and design
            challenges
          </p>
          <div className="social">
            <SiLinkedin
              style={{
                color: "white",
                marginRight: "1rem",
                width: "30px",
                height: "30px",
              }}
            />
            <GoMarkGithub
              style={{
                color: "white",
                marginRight: "1rem",
                width: "50px",
                height: "30px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
