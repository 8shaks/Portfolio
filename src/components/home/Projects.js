import React, { Component } from "react";
import "./index.css";
import { List } from "antd";
export default class Projects extends Component {
  render() {
    const projects = [
      {
        name: "Crypto-Net",
        desc:
          "A social-network/fourm for crypto fanatics to discuess everything from margin trading bitcoin on bitmex to new technology emerging in the crypto space. IT uses the MERN stack(ReactJS, ReduxJS, NodeJS, ExpressJS, and MongoDB. It uses AWS for storage and passport and the JWT strategy for authentication)",
        url: "https://crypto-net.herokuapp.com/",
        image: require("../../images/crypto-net.gif")
      }
    ];
    return (
      <div className="projects">
        <div className="title">Projects</div>
        <List
          size="large"
          style={{ textAlign: "center" }}
          bordered
          dataSource={projects}
          renderItem={project => (
            <div className="indv-project">
              <List.Item>
                <a
                  href={project.url}
                  target="_blank"
                  className="project-title center"
                >
                  {project.name}
                </a>
                <div className="project-desc"> {project.desc}</div>
                <div className="image">
                  <img className="project-preview" src={project.image} />
                </div>
              </List.Item>
            </div>
          )}
        />
      </div>
    );
  }
}
