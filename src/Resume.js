import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import {
  Col,
  Container,
  Row,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "./App.css";

class Resume extends Component {
  render() {
    return (
      <div style={{}}>
        <Container className=" text-left">
          <Row className="py-5  " style={{ backgroundColor: "white" }}>
            <Col style={{ paddingLeft: "9%" }} md={6}>
              <h2>Education</h2>
              <hr
                style={{
                  color: "teal",
                  backgroundColor: "#f5aa84",
                  height: 2,
                  width: "10%",
                  marginLeft: "0",
                }}
              />
              <Card
                style={{
                  width: "19.3rem",
                  backgroundColor: "black",
                  boxShadow: "5px 2px 10px 5px grey",
                }}
              >
                <Card.Body>
                  <Card.Text>
                    <Row>
                      <Col>
                        <div
                          className="p-1 "
                          style={{
                            backgroundColor: "#fa8143",
                            color: "white",
                            borderRadius: "25px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            width: "26%",
                          }}
                        >
                          {" "}
                          2019-2023
                        </div>
                        <div
                          className="pt-2"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Electronics and Computer Engineering
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; CGPA: 7.91
                        </div>
                        <div
                          className="pt-1"
                          style={{
                            color: "white",
                            fontSize: "15px",
                          }}
                        >
                          Thapar University(Patiala, India)
                        </div>
                        <hr
                          style={{
                            color: "teal",
                            backgroundColor: "white",
                            height: 1,
                            width: "100%",
                            marginLeft: "0",
                          }}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <div
                          className="p-1 "
                          style={{
                            backgroundColor: "#fa8143",
                            color: "white",
                            borderRadius: "25px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            width: "26%",
                          }}
                        >
                          {" "}
                          2017-2019
                        </div>
                        <div
                          className="pt-2"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Senior Secondary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                          Merit: 85.4%
                        </div>
                        <div
                          className="pt-1"
                          style={{
                            color: "white",
                            fontSize: "15px",
                          }}
                        >
                          Shivalik Public School, Tapa(Barnala,India)
                        </div>
                        <hr
                          style={{
                            color: "teal",
                            backgroundColor: "white",
                            height: 1,
                            width: "100%",
                            marginLeft: "0",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div
                          className="p-1 "
                          style={{
                            backgroundColor: "#fa8143",
                            color: "white",
                            borderRadius: "25px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            width: "26%",
                          }}
                        >
                          {" "}
                          2015-2017
                        </div>
                        <div
                          className="pt-2"
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          Secondary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CGPA: 10
                        </div>
                        <div
                          className="pt-1"
                          style={{
                            color: "white",
                            fontSize: "15px",
                          }}
                        >
                          Shivalik Public School, Tapa(Barnala,India)
                        </div>
                        <hr
                          style={{
                            color: "teal",
                            backgroundColor: "white",
                            height: 1,
                            width: "100%",
                            marginLeft: "0",
                          }}
                        />
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              md={6}
              className="text-left mt-1 "
              style={{ paddingLeft: "9%" }}
            >
              <h3>My Skills</h3>

              <hr
                style={{
                  color: "teal",
                  backgroundColor: "#fa8143",
                  height: 2,
                  width: "10%",
                  marginLeft: "0",
                }}
              ></hr>
              <Card
                style={{
                  width: "19.3rem",
                  boxShadow: "5px 4px 10px 5px grey",
                  backgroundColor: "black",
                }}
              >
                <Card.Body>
                  <Card.Text>
                    <Col style={{ color: "white" }}>
                      <h5>Flutter</h5>
                      <ProgressBar
                        now={92}
                        variant="color"
                        style={{ color: "black" }}
                      />
                      <div style={{ height: "5px" }} />
                      <h5>C++</h5>
                      <ProgressBar variant="color" now={90} />
                      <div style={{ height: "5px" }} />
                      <h5>Node.js</h5>
                      <ProgressBar variant="color" now={85} />
                      <div style={{ height: "5px" }} />
                      <h5>React.js</h5>
                      <ProgressBar variant="color" now={82} />
                      <div style={{ height: "5px" }} />

                      <h5>Firebase</h5>
                      <ProgressBar variant="color" now={80} />
                      <div style={{ height: "5px" }} />
                      <h5>JavaScript</h5>
                      <ProgressBar variant="color" now={78} />
                      <div style={{ height: "5px" }} />
                      <h5>Python</h5>
                      <ProgressBar variant="color" now={65} />
                      <div style={{ height: "5px" }} />
                      <h5>Dart</h5>
                      <ProgressBar variant="color" now={80} />
                      <div style={{ height: "3.8px" }} />
                    </Col>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
