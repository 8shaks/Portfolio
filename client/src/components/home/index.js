import React, { Component } from "react";
import "./css/index.css";
import { Icon } from "antd";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Projects from "./Projects";
import Header from "./Header";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        {/* Body */}
        {/* About Me
          <div className="about-me">
            <div className="title">About Me</div>
            <div className="text center">
              I am a self taught full stack web developer
            </div>
          </div> */}
        {/* Skills */}
        <Fade left>
          <Skills />
        </Fade>
        {/* Projects */}
        <Fade left>
          <Projects />
        </Fade>
        {/* Resume/ Contact me */}
        <Fade left>
          <Contact />
        </Fade>
      </div>
    );
  }
}

export default Home;
