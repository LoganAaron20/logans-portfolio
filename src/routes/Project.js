import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import ProjectsList from "../components/ProjectsList";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2
        heading="PROJECTS"
        text="Please feel free to view the live version and leave feeback!"
      />
      <ProjectsList />
      <Footer />
    </div>
  );
};

export default Project;
