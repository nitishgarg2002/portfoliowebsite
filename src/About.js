import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image from "./assets/upwork.png";
class About extends Component {
  render() {
    return (
      <div id="about">
        <div style={{ height: "100px" }} />
        <Container className=" text-left h5 container-fluid  rounded">
          <div className="h3 mt-5 mb-3 pl-3 ">About me</div>
          <Row>
            <Col sm={4}>
              <Image
                className="rounded pb-5 pl-3"
                src={image}
                width="80%"
                height="100%"
              />
            </Col>

            <Col sm={8} className="text-left mt-3">
              Hello! I'm<strong> Nitish Garg</strong>,a{" "}
              <strong>software engineer</strong> from India. I'm experienced in{" "}
              <strong>
                Mobile App Development,Web development and database design
              </strong>
              . I'm a ENC Sophomore at Thapar Institute of Engineering and
              Technology. I love to Create, Analyze, Solve and Code.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
