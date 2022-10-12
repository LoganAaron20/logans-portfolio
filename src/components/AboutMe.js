import React from "react";
import "./AboutMe.styles.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="introduction">
        <h1 className="name">Hello, my name is Logan!</h1>
        <h3>
          I am a full-stack software engineer. <br />I love to build everyday
          web applications that you use daily! <br />
          I am currently open to any Full-stack, Front-end, or Back-end role.
          <br />
          Contact me directly via Email and or Phone and lets get started!
        </h3>
        {/* <div className="random-image"></div> */}
      </div>
      <br />
      <br />
      <div className="schooling">
        <h1 className="completed">Certifications:</h1>
        <h2 className="thinkful">Thinkful</h2>
        <p className="thinkful-description">
          I attended Thinkful's{" "}
          <strong>Software Engineering Immersions program</strong> in May of
          2022.
          <br />
          Whilst attending Thinkful's program I completed various projects from
          client-side programming, to server-side programming, and full-stack
          programming.
          <br />
          Many of the projects I completed while following Thinkful's
          curriculumn taught me all of the necessary skills and practices to
          ensure that I am the best at what I do.
          <br />
          My main goal while attending Thinkful was to learn the neccessary
          skills in order to land my dream Job in full-stack web development.
        </p>
        <div className="thinkful-image"></div>
      </div>
    </div>
  );
};

export default AboutMe;
