import React, { Component } from "react";
import { Col, Image, Container, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import image from "./assets/Covid.png";
class Projects extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "100px" }} />
        <Container className="text-left pl-3">
          <div className="h2 font-weight-bold">Projects</div>
          <Row className="my-4">
            <Col sm={4}>
              <Image src={image} width="65%" height="90%" />
            </Col>
            <Col sm={8}>
              <div className="text-left font-weight-bold">
                It is a system designed to properly hold vaccination events
                across all major cities of the country. It uses Face Recognition
                to uniquely identify citizens and prioritizes them as per the
                rules of Govt. This system also manages the logistics of
                vaccines.
              </div>
            </Col>
          </Row>
          <Row className="my-4">
            <Col sm={4}>
              <Image src={image} width="65%" height="90%" />
            </Col>
            <Col sm={8}>
              <div className="text-left font-weight-bold">
                It is a system designed to properly hold vaccination events
                across all major cities of the country. It uses Face Recognition
                to uniquely identify citizens and prioritizes them as per the
                rules of Govt. This system also manages the logistics of
                vaccines.
              </div>
            </Col>
          </Row>
          <Row className="my-4">
            <Col sm={4}>
              <Image src={image} width="65%" height="90%" />
            </Col>
            <Col sm={8}>
              <div className="text-left font-weight-bold">
                It is a system designed to properly hold vaccination events
                across all major cities of the country. It uses Face Recognition
                to uniquely identify citizens and prioritizes them as per the
                rules of Govt. This system also manages the logistics of
                vaccines.
              </div>
            </Col>
          </Row>
        </Container>
        <a href="https://github.com/nitishgarg2002">
          <Button className="btn btn-dark">View More on Github</Button>
        </a>
      </div>
    );
  }
}

export default Projects;
