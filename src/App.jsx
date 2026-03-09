import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Seo from "./components/Seo";

const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const BestPractices = lazy(() => import("./components/BestPractices"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
const Certifications = lazy(() => import("./components/Certifications"));

function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Roshan Dubey Portfolio",
    url: typeof window !== "undefined" ? window.location.origin : "",
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Roshan Dubey",
    jobTitle: "Shopify Theme Developer",
    url: typeof window !== "undefined" ? window.location.origin : "",
    sameAs: [
      "https://github.com/Roshandube",
      "https://www.linkedin.com/in/roshan-dubey-380870235",
    ],
  };

  return (
    <>
      <Seo
        title="Roshan Dubey | Shopify Theme Developer"
        description="Portfolio of Roshan Dubey, a Shopify theme developer focused on high-converting storefronts, Liquid architecture, performance, and maintainable frontend systems."
        path="/"
        image="/images/admin-login.png"
        structuredData={[websiteSchema, personSchema]}
      />
      <Hero />
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <BestPractices />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Education />
      </Suspense>
      <Suspense fallback={null}>
        <Certifications />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}

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
            <Route path="/" element={<HomePage />} />
            <Route
              path="/project/:id"
              element={
                <Suspense fallback={<div className="details-page">Loading...</div>}>
                  <ProjectDetails />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
