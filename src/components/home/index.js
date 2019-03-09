import React, { Component } from "react";
import "./index.css";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Projects from "./Projects";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Fade left>
          <div className="header-home">
            Shakiran Sathiyanathan
            <div style={{ fontSize: "0.5em" }}>Full Stack Web Developer</div>
          </div>
          {/* Body */}
          {/* About Me */}
          <div className="about-me">
            <div className="title">About Me</div>
            <div className="text center">
              I am a self taught full stack web developer
            </div>
          </div>
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
        </Fade>
      </div>
    );
  }
}

export default Home;
