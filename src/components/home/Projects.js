import React, { Component } from "react";
import "./index.css";
import { List } from "antd";
export default class Projects extends Component {
  render() {
    const projects = [
      {
        name: "Crypto-Net",
        desc:
          "A social-network/fourm for crypto fanatics to discuess everything from margin trading bitcoin on bitmex to new technology emerging in the crypto space. It uses the MERN stack(ReactJS, ReduxJS, NodeJS, ExpressJS, and MongoDB. It uses AWS for storage and passport and the JWT strategy for authentication). This website is responsive and mobile friendly.",
        url: "https://crypto-net.herokuapp.com/",
        image: require("../../images/crypto-net.gif")
      },
      {
        name: "Bootstrap Template",
        desc:
          "A simple template website filled with dummy text. Made with HTML and CSS, using Bootstrap as a UI framework. This website is responsive and mobile friendly.",
        url: "https://8shaks.github.io/BootstrapLayout.github.io/",
        image: require("../../images/bootstrapTemp.gif")
      },
      {
        name: "Pong Page",
        desc:
          "A website that has some information about pong. The main attraction of this website is the ability to actually play pong when you visit it on desktop. You cannot play the game on mobile however. The webpage was made with HTML and CSS while the game was made with JavaScript.",
        url: "https://8shaks.github.io/PongGame.github.io/",
        image: require("../../images/pong.gif")
      },
      {
        name: "SneakerBloc",
        desc:
          "A mockup of a online marketplace for sneakers. This web app also uses the MERN stack as well. ",
        url: "https://sneakerbloc.herokuapp.com/",
        image: require("../../images/sneakerBloc.gif")
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
                  <img
                    className="project-preview"
                    src={project.image}
                    alt="Project preview"
                  />
                </div>
              </List.Item>
            </div>
          )}
        />
      </div>
    );
  }
}
