import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./movieApp.styles.css";
import movieImage from "../assets/movie-app.png";

const MovieApp = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <br />
      <br />
      <br />
      <h1 className="title">Movie Application</h1>
      <div className="page">
        <article className="project">
          <div className="tools">
            <h3 className="tool-title">Tools Used:</h3>
            <p className="tool"> - ReactJS</p>
            <p className="tool"> - NodeJs</p>
            <p className="tool"> - PostgreSQL</p>
            <p className="tool"> - ExpressJS</p>
            <p className="tool"> - Knex</p>
            <p className="tool"> - Git</p>
            <p className="tool"> - TailwindCSS</p>
            <p className="tool"> - Bootstrap</p>
            <p className="tool"> - CORS Package</p>
          </div>

          <img
            className="project-image"
            src={movieImage}
            alt="Movie Application"
          />
        </article>
        <div className="description">
          <div className="main">
            <p>
              This project was created for my Capstone submission for{" "}
              <a href="www.thinkful.com">Thinkful's</a> program. The Movie
              Application was created using React, assisted with NodeJS. The
              project is intended to help user's find movies and theaters that
              they enjoy. Along with the ability to find a unique movie, you can
              also view an entire description with real-time user reviews!
            </p>

            <button className="view">View Project</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieApp;
