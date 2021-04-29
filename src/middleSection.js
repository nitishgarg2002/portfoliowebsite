import { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

export default class MiddleSection extends Component {
  render() {
    return (
      <>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>

        <div id="resume">
          <Resume />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </>
    );
  }
}
