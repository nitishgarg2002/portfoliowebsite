import React, { Component } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
class Contact extends Component {
  render() {
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
                <Form.Control type="name" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email-Id" />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className="mb-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contact;
