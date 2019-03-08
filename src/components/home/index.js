import React, { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="header-home">
          Shakiran Sathiyanathan
          <div style={{ fontSize: "0.5em" }}>Full Stack Web Developer</div>
        </header>
        {/* Body */}
        {/* About Me */}
        <div className="about-me">
          <div className="title">About Me</div>
          <div className="text center">
            I am a self taught full stack web developer
          </div>
        </div>
        {/* Skills */}
        <div className="skills">
          <div className="title">Skills</div>
          <div className="text center">
            <ul className="list">
              <li className="skills-bullet">Vanilla JavaScript</li>
              <li className="skills-bullet">ReactJS</li>
              <li className="skills-bullet">ReduxJS</li>
              <li className="skills-bullet">NodeJS</li>
            </ul>
            <ul className="list">
              <li className="skills-bullet">Express JS</li>
              <li className="skills-bullet">HTML 5</li>
              <li className="skills-bullet">CSS</li>
            </ul>
            <ul className="list">
              <li className="skills-bullet">AWS</li>
              <li className="skills-bullet">Adobe Photoshop</li>
              <li className="skills-bullet">Adobe Illustrator</li>
              <li className="skills-bullet">MongoDB</li>
            </ul>
          </div>
        </div>
        {/* Projects */}
        <div className="projects">
          <div className="title">Projects</div>
          <div className="text center">My name is Shakiran Sathiyanathan</div>
        </div>
      </div>
    );
  }
}

export default Home;
