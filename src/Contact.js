import React, { Component } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";

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
          <h2 className="text-center font-weight bold mb-4 ">
            Wanna Collaborate ?
          </h2>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => this.onNameChange(e.target.value)}
                  type="name"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => this.onEmailChange(e.target.value)}
                  type="email"
                  placeholder="Email-Id"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Your Message</Form.Label>

              <Form.Control
                value={message}
                onChange={(e) => this.onmessageChange(e.target.value)}
                as="textarea"
                placeholder="Your message"
                rows={3}
              />
            </Form.Group>
            <Button
              onClick={() => this.handleSubmit()}
              className="mb-5"
              variant="primary"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contact;
