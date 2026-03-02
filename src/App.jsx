import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import BestPractices from "./components/BestPractices";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <div className="background-grid" aria-hidden="true" />
        <div className="background-orbits" aria-hidden="true">
          <div className="orbit orbit-lg">
            <span />
            <span />
            <span />
          </div>
          <div className="orbit orbit-md">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="orbit orbit-sm">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <Navbar />
        <ScrollProgress />

        <main className="app-main">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <BestPractices />
                  <Skills />
                  <Projects />
                  <Education />
                  <Certifications />
                  <Contact />
                </>
              }
            />

            {/* Project Details Page */}
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
