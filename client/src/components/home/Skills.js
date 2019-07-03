import React, { Component } from "react";
import "./css/skills.css";
import { Icon } from "antd";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div className="skills-images">
          <img
            className="skills-image"
            src={require("../../images/html.png")}
            alt="skillset"
          />
          <img
            className="skills-image"
            src={require("../../images/react.png")}
            alt="skillset"
          />
          <img
            className="skills-image"
            src={require("../../images/nodejs.png")}
            alt="skillset"
          />
          <img
            className="skills-image"
            src={require("../../images/mongodb.png")}
            alt="skillset"
          />
        </div>
        <div className="title">Skills</div>
        <div className=" skills-para text center">
          I have a wide skill-set that includes many new and popular
          technologies. My skill set helps me to cater toward my client's vision
          and what their goal is. I love learning new technologies that I can
          implement into my work. I prefer to learn by experience and by trying
          something out myself I gain a better understanding of how to skill
          works.
        </div>
        <div className="skills-arrow center">
          {" "}
          <Icon type="arrow-down" style={{ fontSize: "5.5em" }} />
        </div>
        <div className="skills-list text center">
          <ul className="list">
            <li className="skills-subheading">Front-End</li>
            <li className="skills-bullet">ReactJS</li>
            <li className="skills-bullet">ReduxJS</li>
            <li className="skills-bullet">HTML 5</li>
            <li className="skills-bullet">CSS</li>
          </ul>
          <ul className="list">
            <li className="skills-subheading">Back-End</li>
            <li className="skills-bullet">REST APIS</li>
            <li className="skills-bullet">Express JS</li>
            <li className="skills-bullet">NodeJS</li>
            <li className="skills-bullet">MongoDB</li>
          </ul>
          <ul className="list">
            <li className="skills-subheading">Other</li>
            <li className="skills-bullet">AWS</li>
            <li className="skills-bullet">Adobe Photoshop</li>
            <li className="skills-bullet">Adobe Illustrator</li>
            <li className="skills-bullet">Git</li>
          </ul>
        </div>
      </div>
    );
  }
}
