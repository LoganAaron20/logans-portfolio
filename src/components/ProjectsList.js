import "./projectList.css";
import React from "react";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  return (
    <div className="projects">
      <section className="cards">
        <article className="card">
          <Link to="/movie-application">
            <div className="image project-1"></div>
            <h3 className="project-name">Movie Application</h3>
            <p className="project-description">
              Lorem ipsum giveth tow vow dea sesa...
            </p>
          </Link>
        </article>
        <article className="card">
          <div className="image project-2"></div>
          <h3 className="project-name">Recipe Tracker</h3>
          <p className="project-description">
            Lorem ipsum giveth tow vow dea sesa...
          </p>
        </article>
        <article className="card">
          <div className="image project-3"></div>
          <h3 className="project-name">Decoder Ring</h3>
          <p className="project-description">
            Lorem ipsum giveth tow vow dea sesa...
          </p>
        </article>
        <article className="card">
          <div className="image project-4"></div>
          <h3 className="project-name">Flashcard Application</h3>
          <p className="project-description">
            Lorem ipsum giveth tow vow dea sesa...
          </p>
        </article>
      </section>
    </div>
  );
};

export default ProjectsList;
