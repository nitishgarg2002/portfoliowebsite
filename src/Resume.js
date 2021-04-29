import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
class Resume extends Component {
  render() {
    return (
      <div>
        <Container className="text-left pl-3">
          <div className="h2 font-weight-bold">Education</div>
          <Row className="my-4">
            <Col>
              <div className="h5 font-weight-bold">
                Electronics and Computer Engineering
              </div>
              <div>CGPA: 8.06/10</div>
            </Col>
            <Col>
              <div className="text-center font-weight-bold">
                2019-Present-2023
              </div>
              <div className="text-center">Thapar Institute</div>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <div className="h5 font-weight-bold">Senior Secondary</div>
              <div>Merit:85.4%</div>
            </Col>
            <Col>
              <div className="text-center font-weight-bold">2017-2019</div>
              <div className="text-center">Shivalik Public School</div>
            </Col>
          </Row>
          <Row className="my-4">
            <Col>
              <div className="h5 font-weight-bold">Secondary</div>
              <div>CGPA: 10/10</div>
            </Col>
            <Col>
              <div className="text-center font-weight-bold">2015-2017</div>
              <div className="text-center">Shivalik Public School</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
