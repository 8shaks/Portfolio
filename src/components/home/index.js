import React, { Component } from "react";
import "./css/index.css";
import { Icon } from "antd";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Projects from "./Projects";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Fade left>
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
          <Skills />
          {/* Projects */}
          <Projects />
          {/* Resume/ Contact me */}
          <div className="contact-me" id="contact">
            <div className="title">Contact Me</div>
            <div className="text center">
              You can email me about any questions you have at
              shakiran.sathiyanathan@gmail.com
              <br />
              My resume is available{" "}
              <a
                target="_blank"
                href="https://drive.google.com/file/d/19-NA5QsPDCuj342E7NK3Evd9QKSIWcIO/view?usp=sharing"
              >
                here
              </a>
              <span>
                {" "}
                <Icon type="arrow-left" />
              </span>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Home;
