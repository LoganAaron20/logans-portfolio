import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import "./hero.css";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-image"
          src={
            "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80"
          }
          alt="IntroImage"
        />
      </div>
      <div className="content">
        <p>HI, I'M LOGAN!</p>
        <h1>Software Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
