import React, { Component } from "react";
import "./index.css";
import { Icon } from "antd";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Projects from "./Projects";
import { Document } from "react-pdf";

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
          {/* About Me
          <div className="about-me">
            <div className="title">About Me</div>
            <div className="text center">
              I am a self taught full stack web developer
            </div>
          </div> */}
          {/* Skills */}
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Resume/ Contact me */}
          <div className="contact-me">
            <div className="title">Contact Me</div>
            <div className="text center">
              You can email me about any questions you have at
              shakiran.sathiyanathan@gmail.com
              <br />
              My resume is available for download below
              <span>
                <Icon type="arrow-down" />{" "}
              </span>
              <Document file={require("../../images/resume.pdf")} />
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Home;
