import React from "react";
import First from "./components/first";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <First />
      <Project />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}
