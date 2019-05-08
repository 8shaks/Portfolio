import React, { Component } from "react";
import "./css/contact.css";
import axios from "axios";

import { Input, Icon, Button } from "antd";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      email: "",
      errorsEmail: "",
      errorsMessage: "",
      errorsName: ""
    };
  }
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  handleSubmit = e => {
    e.preventDefault();
    let valid = true;
    if (this.state.name === "") {
      this.setState({ errorsName: "Name Field is Required" });
      valid = false;
    } else {
      this.setState({ errorsName: "" });
    }
    if (this.state.email === "") {
      this.setState({ errorsEmail: "Email Field is Required" });
      valid = false;
    } else {
      this.setState({ errorsEmail: "" });
    }
    if (!this.validateEmail(this.state.email)) {
      this.setState({ errorsEmail: "Your email is not valid" });
      valid = false;
    } else {
      this.setState({ errorsEmail: "" });
    }
    if (this.state.message < 15) {
      this.setState({
        errorsMessage:
          "Your message is not valid(Must be at least 15 characters)"
      });
      valid = false;
    } else {
      this.setState({ errorsMessage: "" });
    }
    if (valid) {
      const contactReq = {
        email: this.state.email,
        name: this.state.name,
        message: this.state.message
      };
      axios.post("/contact-me/email", contactReq).then(res => console.log(res));
    }
  };
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { errorsEmail, errorsMessage, errorsName } = this.state;
    return (
      <div className="contact-me" id="contact-me">
        <h2 className="contact-me-heading">Contact Me</h2>
        <div className="contact-me-form">
          <div className="contact-me-input">
            <h2 className="contact-me-form-heading">Email</h2>
            <Input
              placeholder="Write your Email here!"
              prefix={<Icon type="mail" />}
              onChange={this.onChange}
              id="email"
            />
            {errorsEmail !== "" ? (
              <span className="error">{errorsEmail}</span>
            ) : null}
          </div>
          <div className="contact-me-input">
            <h2 className="contact-me-form-heading">Name</h2>
            <Input
              placeholder="What's your name?"
              onChange={this.onChange}
              id="name"
            />
            {errorsName !== "" ? (
              <span className="error">{errorsName}</span>
            ) : null}
          </div>
          <div className="contact-me-input">
            <h2 className="contact-me-form-heading">Message</h2>
            <Input.TextArea
              placeholder="What services are you looking for? Please try to include as much detail as possible!"
              rows={4}
              prefix={<Icon type="mail" />}
              onChange={this.onChange}
              id="message"
            />
            {errorsMessage !== "" ? (
              <span className="error">{errorsMessage}</span>
            ) : null}
          </div>
          <Button
            color="primary"
            className="contact-me-submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Contact;
