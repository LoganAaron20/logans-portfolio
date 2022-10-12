import "./projectList.css";
import React from "react";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  return (
    <div className="projects">
      <section className="cards">
        <article className="card">
          <div className="project-bio">
            <h3 className="project-name">Movie Application</h3>
            <p className="project-description">
              A fully functional Movie tracker application, allowing users to
              find movies currently showing. Users have the ability to view
              movie theaters in the area along with the specific movies at that
              location.
            </p>
            <div className="buttons">
              <button className="project-button">View Project</button>
              <a
                href="https://github.com/LoganAaron20/we-love-movies-project"
                className="github-button"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project-image"></div>
        </article>
        <article className="card">
          <div className="project-bio">
            <h3 className="project-name">Restaurant Reservation System</h3>
            <p className="project-description">
              An application created to speed up the seating process by 100%.
              Allowing the customers to easily reserve a table ahead of time, it
              saves restaurant employees time not having to worry about a
              seating chart.
            </p>
            <div className="buttons">
              <a
                className="project-button"
                href="https://restuarant-reservation-la.herokuapp.com/dashboard?date=2022-10-13"
              >
                View Project
              </a>
              <a
                className="github-button"
                href="https://github.com/LoganAaron20/restaurant-reservation"
              >
                Code
              </a>
            </div>
          </div>
          <div className="restaurant-project"></div>
        </article>
        <article className="card">
          <div className="project-bio">
            <h3 className="project-name">FlashCard-O-Matic</h3>
            <p className="project-description">
              An application allowing students to create 'Study Cards' in order
              to ace any exams that come their way. Students will be able to
              create double sided cards, allowing them to easly self-study if
              needed.
            </p>
            <div className="buttons">
              <button className="project-button">View Project</button>
              <a
                href="https://github.com/LoganAaron20/Flashcard-O-Matic"
                className="github-button"
              >
                Code
              </a>
            </div>
          </div>
          <div className="flashcard-image"></div>
        </article>
        <article className="card">
          <div className="project-bio">
            <h3 className="project-name">GrubDash</h3>
            <p className="project-description">
              An application allowing users to order food online whenever the
              time! With this application the user has full access to choosing
              where he/she eats. It allows for quick/safe ways to order your
              food right to your front door!
            </p>
            <div className="buttons">
              <button className="project-button">View Project</button>
              {/* <button className="github-button">Code</button> */}
              <a
                href="https://github.com/LoganAaron20/GrubDash-frontend"
                className="github-button"
              >
                Code
              </a>
            </div>
          </div>
          <div className="grubdash-image"></div>
        </article>
        <article className="card">
          <div className="project-bio">
            {/* <Link to="/movie-application"> */}
            <h3 className="project-name">Wordle Clone</h3>
            <p className="project-description">
              A clone of 'New York Times' most popular online puzzle game.
              This was created using Vanilla Javascript along with CSS3 and
              HTML5.
            </p>
            <div className="buttons">
              <button className="project-button">View Project</button>
              <a
                href="https://github.com/LoganAaron20/GrubDash-frontend"
                className="github-button"
              >
                Code
              </a>
            </div>
          </div>
          <div className="wordle-image"></div>
        </article>
      </section>
    </div>
  );
};

export default ProjectsList;
