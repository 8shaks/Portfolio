import React, { Component } from "react";
import "./css/index.css";
import "./css/skills.css";
import { Icon } from "antd";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
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
          As a self taught full stack web developer, I'm always looking to
          expand my skill set. I currently devlop websites. The complexity of
          the websites I create range from simple informational web pages to
          complex web apps(see some of my projects down below).I'm love working
          new complex projects that require me to leave my comfort zone and
          learn something new! Here's what I currently have in my skill set
        </div>
        <div className="center">
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
