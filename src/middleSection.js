import { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

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
        <div id="contact">
          <Projects />
        </div>
        <div id="service">
          <Contact />
        </div>
      </>
    );
  }
}
