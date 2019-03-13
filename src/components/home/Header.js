import React, { Component } from "react";
import { Icon, Menu, Affix } from "antd";
import Fade from "react-reveal/Fade";
import "./css/header.css";

export default class Header extends Component {
  state = { current: "" };
  onChange = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="header-home">
        <Affix>
          <div className="navbar">
            <Menu
              onClick={this.onChange}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              style={{ fontSize: "0.8em", zIndex: "100" }}
            >
              <Menu.Item key="skills">
                <a href="#skills">
                  <Icon type="tool" theme="twoTone" />
                  Skills
                </a>
              </Menu.Item>
              <Menu.Item key="projects">
                <a href="#projects">
                  <Icon type="project" theme="twoTone" />
                  Projects
                </a>
              </Menu.Item>
              <Menu.Item key="contact/resume">
                <a href="#contact">
                  <Icon type="mail" theme="twoTone" />
                  Contact/Resume
                </a>
              </Menu.Item>
            </Menu>
          </div>
        </Affix>
        <Fade left>
          <div className="header-title">
            Shakiran Sathiyanathan
            <div>Full Stack Web Developer</div>
            <div>
              <a
                href="https://github.com/8shaks"
                className="github"
                target="_blank"
              >
                <i>Github </i>
                <Icon type="github" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
