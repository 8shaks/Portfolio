import React, { Component } from "react";
import "./index.css";

export default class Skills extends Component {
  render() {
    return (
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
            <li className="skills-bullet">REST APIS</li>
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
    );
  }
}
