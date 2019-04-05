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
          <div className="contact-me" id="contact">
            <div className="title">Contact Me</div>
            
            <div className='center'>
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScyc4ttwDwwVEIZe5X-xXKtxmbbi4_lpuK-ZBo29xUQhrwp-w/viewform?embedded=true" width="400px" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe> */}
              </div>
              <div className="text center">
              I am always open to working with new people! Don't be afraid to email me with any questions you may have. You can reach me at shakiran.sathiyanathan@gmail.com. My resume is available{" "}
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
