import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import MovieApp from "./components/MovieApp";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie-application" element={<MovieApp />} />
        {/* <Route path="/decoder-ring" element={<DecoderRing.js />} />
        <Route path="/flashcard-app" element={<FlashcardApp />} /> */}
      </Routes>
    </>
  );
}

export default App;
