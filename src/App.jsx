import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

import Certifications from "./components/Certifications";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
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
    </Router>
  );
}

export default App;
