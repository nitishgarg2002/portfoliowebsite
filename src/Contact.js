import React, { Component } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import axios from "axios";
import { SocialIcon } from "react-social-icons";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  onNameChange(name) {
    this.setState({
      name,
    });
  }
  onEmailChange(email) {
    this.setState({
      email,
    });
  }
  onmessageChange(message) {
    this.setState({
      message,
    });
  }
  handleSubmit(e) {
    //  e.preventDefault();
    console.log(this.state);
    const emailValue = this.state.email.match(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );
    if (emailValue) {
      axios
        .post(
          "https://nitishportfoliowebsitemessages.herokuapp.com/api/v1/messages",
          this.state
        )
        .then((response) => {
          alert("Message sent Successfully");
          console.log(response);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    } else {
      alert("Please enter a valid e-mail");
    }
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <div style={{ height: "50px" }} />
        <Container>
          <Row>
            <Col
              md={6}
              style={{
                backgroundColor: "black",
                color: "white",
                boxShadow: "2px 3px 3px 3px grey",
              }}
            >
              <h4 className="text-left pt-4">Get in Touch</h4>
              <hr
                style={{
                  backgroundColor: "#fa8143",
                  marginLeft: "0px",
                  marginTop: " 0px",
                  height: 2,
                  width: "10%",
                }}
              />
              <Container>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        style={{
                          borderRadius: "0px",
                          padding: "10px",
                          marginTop: "10px",
                        }}
                        value={name}
                        onChange={(e) => this.onNameChange(e.target.value)}
                        type="name"
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Control
                        style={{
                          borderRadius: "0px",
                          padding: "10px",
                          marginTop: "10px",
                        }}
                        value={email}
                        onChange={(e) => this.onEmailChange(e.target.value)}
                        type="email"
                        placeholder="Email-Id"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      style={{
                        borderRadius: "0px",
                        paddingTop: "10px",
                        marginTop: "20px",
                      }}
                      value={message}
                      onChange={(e) => this.onmessageChange(e.target.value)}
                      as="textarea"
                      placeholder="Message"
                      rows={3}
                    />
                  </Form.Group>
                  <Button
                    onClick={() => this.handleSubmit()}
                    className="mb-5 mt-4"
                    style={{
                      backgroundColor: "#fa8143",
                      borderColor: "#fa8143",
                      color: "white",
                      fontweight: "bolder",
                      fontSize: "16px",
                      borderRadius: "0px",
                    }}
                  >
                    Send Your Message
                  </Button>
                </Form>
              </Container>
            </Col>
            <Col md={1}></Col>
            <Col
              md={5}
              style={{
                backgroundColor: "black",
                color: "white",
                marginLeft: "0px",
                boxShadow: "2px 3px 3px 3px grey",
              }}
            >
              <h4 className="text-left  pt-4">Contact Me</h4>
              <hr
                style={{
                  backgroundColor: "#fa8143",
                  marginLeft: "0px",
                  marginTop: " 0px",
                  height: 2,
                  width: "10%",
                }}
              />

              <h5 className="text-left pb-4">
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </h5>
              <div className="mb-2">
                <SocialIcon
                  className="mx-2"
                  height="25%"
                  url="https://github.com/nitishgarg2002"
                  target="_blank"
                />
                <SocialIcon
                  className="mx-2"
                  height="25%"
                  url="https://www.linkedin.com/in/nitish-garg-54a815198/"
                  target="_blank"
                />
                <SocialIcon
                  className="mx-2"
                  height="25%"
                  url="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=nitishgarg2002@gmail.com"
                  target="_blank"
                />
                <SocialIcon
                  className="mx-2"
                  height="10%"
                  url="https://www.facebook.com/nitish.garg.71465/"
                  target="_blank"
                />
                <SocialIcon
                  className="mx-2"
                  height="10%"
                  url="https://www.instagram.com/nitish.garg__/"
                  target="_blank"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
