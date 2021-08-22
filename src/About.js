import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image from "./assets/upwork.png";
import "./App.css";

class About extends Component {
  render() {
    return (
      <div id="about">
        <Row className="py-5" style={{ backgroundColor: "#000000" }}>
          <Col sm={4}>
            <Image
              className="rounded  "
              src={image}
              width="80%"
              height="100%"
            />
          </Col>

          <Col
            sm={8}
            className="text-left mt-1 px-5"
            style={{ color: "white" }}
          >
            <div className="h2 mb-4 " style={{ color: "white" }}>
              About me
            </div>
            Hello! I'm<strong> Nitish Garg</strong>,a{" "}
            <strong>software engineer</strong> from India. I'm experienced in{" "}
            <strong>
              Mobile App Development,Web development and database design
            </strong>
            . I'm an ENC Sophomore at Thapar Institute of Engineering and
            Technology. I love to Create, Analyze, Solve and Code.
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
